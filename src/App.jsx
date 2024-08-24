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

    return (
        <>
            <form className="cvForm">
                <GeneralInfo />
                <EducationalExperience />
                <PracticalExperience />
                <input type="submit" value="Submit" className="cvFormSubmit" onClick={submitButton} />
            </form>
            <div className="cvCardHolderDiv">{cvList.length > 0 && <NewCv cvList={cvList} />}</div>
        </>
    );
}

export default App;

function NewCv({ cvList }) {
    return (
        <>
            {cvList.map((element) => {
                return (
                    <div className="cvDiv" key={element.Key}>
                        <CvContent list={element} identifier={element.Key}/>
                    </div>
                );
            })}
        </>
    );
}

function CvContent({ list, identifier }) {
    const [listContent, setListContent] = useState(list.content);
    const [editState, setEditState] = useState(false);

    function editObject() {
        setEditState(true);
    }

    function submitEdit() {
        setEditState(false);
    }

    function changeContent(event) {
        setListContent(currentContent => ({
            ...currentContent, 
            Name: event.target.value
        }))
    }

    return (
        <>
            {!editState ? (
                <div>
                    <p>{listContent.Name}</p>
                    <p>{identifier}</p>
                    <button onClick={editObject}>Edit</button>
                </div>
            ) : (
                <div>
                    <input type="text" value={listContent.Name} onChange={changeContent}/>
                    <button onClick={submitEdit}>Submit edit</button>
                </div>
            )}
            {!editState ? (
                <div>
                    <p>{listContent.Email}</p>
                    <button onClick={editObject}>Edit</button>
                </div>
            ) : (
                <div>
                    <input type="text" value={listContent.Email} onChange={changeContent}/>
                    <button onClick={submitEdit}>Submit edit</button>
                </div>
            )}
        </>
    );
}
