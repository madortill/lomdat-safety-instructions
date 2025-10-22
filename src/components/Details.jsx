import React from "react";
import "../style/details.css";

function Details({ name, setName, personalNumber, setPersonalNumber }) {
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
      <p className="details-title">יאללה תכניסו שם מלא ומספר אישי!</p>

      <div className="input1-details">
        שם מלא:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="error-text">{nameError}</p>}
      </div>

      <div className="input2-details">
        מספר אישי:
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
