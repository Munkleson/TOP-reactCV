import { useState } from "react";

function GeneralInfo({ postedState }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    function setNameFunction(event) {
        setName(event.target.value);
    }
    function setEmailFunction(event) {
        setEmail(event.target.value);
    }
    function setPhoneNumberFunction(event) {
        setPhoneNumber(event.target.value);
    }
    return (
        <>
            <input type="text" placeholder="Name" onChange={setNameFunction} value={name} className="formInput" />
            <input type="email" placeholder="Email" onChange={setEmailFunction} value={email} className="formInput" />
            <input type="number" placeholder="Phone Number" onChange={setPhoneNumberFunction} value={phoneNumber} className="formInput" />
        </>
    );
}

function EducationalExperience() {}

function PracticalExperience() {}

export { GeneralInfo, EducationalExperience, PracticalExperience };
