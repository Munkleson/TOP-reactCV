import { useState } from "react";
import "./App.css";
import { GeneralInfo, EducationalExperience, PracticalExperience } from "./formFunctions";

// const cvObject = {};

function App() {
    const [postedState, setPostedState] = useState(false);

    function submitButton(event) {
        event.preventDefault();
        setPostedState(postedState ? false : true);
        const documentWhole = document.querySelectorAll(".formInput");
        const cvObject = {};
        documentWhole.forEach((element) => {
            cvObject[element.getAttribute("placeholder")] = element.value;
        });
        newCv(cvObject);
    }

    return (
        <form className="cvForm">
            <GeneralInfo postedState={postedState} />
            <EducationalExperience postedState={postedState} />
            <PracticalExperience postedState={postedState} />
            <input type="submit" value="Submit" className="cvFormSubmit" onClick={submitButton} />
        </form>
    );
}

export default App;

function newCv(cvObject) {

    
}
