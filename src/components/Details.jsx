import React from "react";
import "../style/details.css";
import { useData } from "../context/DataContext.jsx"; // ה-hok מהקונטקסט

function Details({ name, setName, personalNumber, setPersonalNumber }) {
  // שימוש בקונטקסט
  const { data } = useData();

  // בדיקה שהdata מוגדר כדי למנוע שגיאות
  if (!data || !data.details) return null;

  const detailsTitle = data.details[0].text; 
  const nameText = data.details[1].text;
  const verifyName = data.details[1].verifyName; 
  const numText = data.details[2].text;
  const verifyPerNum = data.details[2].verifyPerNum;

  // בדיקות תקינות
  const isValidName = (value) => value.trim().includes(" ") && !/\d/.test(value);
  const isValidPersonalNumber = (value) => /^\d{7}$/.test(value);

  const nameError =
    !isValidName(name) && name.length > 0 ? `${verifyName}` : "";

  const personalNumberError =
    !isValidPersonalNumber(personalNumber) && personalNumber.length > 0
      ? `${verifyPerNum}`
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
