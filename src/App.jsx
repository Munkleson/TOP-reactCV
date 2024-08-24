import { useState } from "react";
import "./App.css";
import { GeneralInfo, EducationalExperience, PracticalExperience } from "./formFunctions";

// const cvObject = {};

function App() {
    const [cvList, setCvList] = useState([]);
    const [cvListId, setCvListId] = useState(0);

    function submitButton(event) {
        event.preventDefault();
        const documentWhole = document.querySelectorAll(".formInput");
        const cvObject = { content: {} };
        documentWhole.forEach((element) => {
            cvObject.content[element.getAttribute("placeholder")] = element.value;
        });
        cvObject.Key = cvListId;
        setCvList((prevCvList) => [...prevCvList, cvObject]);
        setCvListId(cvListId + 1);
    }

    function deleteCv(key){
        setCvList((prevCvList) => {
            return prevCvList.filter((element) => {
                return element.Key !== key;
            })
        });
    }

    return (
        <>
            <form className="cvForm">
                <GeneralInfo />
                <EducationalExperience />
                <PracticalExperience />
                <input type="submit" value="Submit" className="cvFormSubmit" onClick={submitButton} />
            </form>
            <div className="cvCardHolderDiv">{cvList.length > 0 && <NewCv cvList={cvList} deleteCv={deleteCv}/>}</div>
        </>
    );
}

export default App;

function NewCv({ cvList, deleteCv }) {
    return (
        <>
            {cvList.map((element) => {
                return (
                    <div className="cvDiv" key={element.Key}>
                        <CvContent list={element} />
                        <p>{element.Key}</p>
                        <button onClick={() => deleteCv(element.Key)}>Delete</button>
                    </div>
                );
            })}
        </>
    );
}

function CvContent({ list }) {
    const [listContent, setListContent] = useState(list.content);
    const [editState, setEditState] = useState(false);
    const listKeys = Object.keys(listContent);

    function editObject() {
        setEditState(true);
    }
    function submitEdit() {
        setEditState(false);
    }
    function changeContent(event) {
        const contentName = event.target.getAttribute("class");
        setListContent((currentContent) => ({
            ...currentContent,
            [contentName]: event.target.value,
        }));
    }
    function inputType(elementType) {
        switch(elementType) {
            case "Name" :
                return "text"
            case "Email" : 
                return "email"
            case "Phone Number" :
                return "number"
        }
    }

    return (
        <>
            { listKeys.map((element) => 
                ( !editState ? (
                <div key={element}>
                    <p>{listContent[element]}</p>
                    <button onClick={editObject}>Edit</button>
                </div>
                ) : (
                <div key={element}>
                    <input type={inputType(element)} value={listContent[element]} onChange={changeContent} className={element}/>
                    <button onClick={submitEdit}>Submit edit</button>
                </div>
                ))
            )}
        </>
    )

    // return (
    //     <>
    //         {!editState ? (
    //             <div>
    //                 <p>{listContent.Name}</p>
    //                 <button onClick={editObject}>Edit</button>
    //                 <p>{listContent.Email}</p>
    //                 <button onClick={editObject}>Edit</button>
    //             </div>
    //         ) : (
    //             <div>
    //                 <input type="text" value={listContent.Name} onChange={changeContent} className="Name" />
    //                 <button onClick={submitEdit}>Submit edit</button>
    //                 <input type="email" value={listContent.Email} onChange={changeContent} className="Email" />
    //                 <button onClick={submitEdit}>Submit edit</button>
    //             </div>
    //         )}
    //     </>
    // );
}
