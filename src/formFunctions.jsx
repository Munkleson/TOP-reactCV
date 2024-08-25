import { useState } from "react";

function GeneralInfo() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    function setGeneralInfo(event){
        switch(event.target.placeholder) {
            case "Name" :
                return setName(event.target.value);
            case "Email" : 
                return setEmail(event.target.value);
            case "Phone Number" :
                return setPhoneNumber(event.target.value);
        }
    }
    return (
        <>
            <input type="text" placeholder="Name" onChange={setGeneralInfo} value={name} className="formInput" />
            <input type="email" placeholder="Email" onChange={setGeneralInfo} value={email} className="formInput" />
            <input type="number" placeholder="Phone Number" onChange={setGeneralInfo} value={phoneNumber} className="formInput" />
        </>
    );
}

function EducationalExperience() {
    const [schoolName, setSchoolName] = useState("");
    const [major, setMajor] = useState("");
    const [studyYears, setStudyYears] = useState("");
    const [endStudyYears, setEndStudyYears] = useState("");
    function setEducationExperience(event){
        switch(event.target.placeholder) {
            case "Name of school" :
                return setSchoolName(event.target.value);
            case "Major" : 
                return setMajor(event.target.value);
            case "Start year of study" :
                return setStudyYears(event.target.value);
            case "End year of study" :
                return setEndStudyYears(event.target.value);
        }
    }
    return (
        <>
            <input type="text" placeholder="Name of school" onChange={setEducationExperience} value={schoolName} className="formInput" />
            <input type="text" placeholder="Major" onChange={setEducationExperience} value={major} className="formInput" />
            <input type="date" placeholder="Start year of study" onChange={setEducationExperience} value={studyYears} className="formInput" />
            <span> to </span>
            <input type="date" placeholder="End year of study" onChange={setEducationExperience} value={endStudyYears} className="formInput" />
        </>
    );
}

function PracticalExperience() {}

export { GeneralInfo, EducationalExperience, PracticalExperience };
