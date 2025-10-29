import React from "react";
import "../style/details.css";
import myData from "../data/myData.json";

function Details({ name, setName, personalNumber, setPersonalNumber }) {
  const detailsTitle = myData.details[0].text; 
  const nameText = myData.details[1].text; 
  const numText = myData.details[2].text; 
  // בדיקות תקינות
  const isValidName = (value) => value.trim().includes(" ") && !/\d/.test(value);
  const isValidPersonalNumber = (value) => /^\d{7}$/.test(value);

  const nameError = !isValidName(name) && name.length > 0
    ? "יש להזין שם מלא    "
    : "";

  const personalNumberError = !isValidPersonalNumber(personalNumber) && personalNumber.length > 0
    ? "מספר אישי מכיל 7 ספרות"
    : "";

  const isFormValid = isValidName(name) && isValidPersonalNumber(personalNumber);

  return (
    <div className={`details-container ${isFormValid ? "valid" : "invalid"}`}>
      <p className="details-title">{detailsTitle}</p>

      <div className="input1-details">
        {nameText}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="error-text">{nameError}</p>}
      </div>

      <div className="input2-details">
        {numText}
        <input
          type="text"
          value={personalNumber}
          onChange={(e) => setPersonalNumber(e.target.value)}
        />
        {personalNumberError && <p className="error-text">{personalNumberError}</p>}
      </div>
    </div>
  );
}

export default Details;
