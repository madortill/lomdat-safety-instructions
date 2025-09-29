import React from "react";
import "../style/openingPage.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import carGraphic from "../assets/images/openingPage/carGraphic.png";
import cloud from "../assets/images/openingPage/cloud.png";
import cloud2 from "../assets/images/openingPage/cloud2.png";
import startBtn from "../assets/images/openingPage/startBtn.svg";

function OpeningPage() {
  const [showAbout, setShowAbout] = useState(false);
  const navigate = useNavigate();

  const toggleAbout = () => {
    setShowAbout((prev) => !prev);
  };
  const [carMoving, setCarMoving] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const handleStart = () => {
    setCarMoving(true); // מתחילים להזיז את המכונית
    setBtnClicked(true); // הכפתור נעלם מיד
  };
  if (hidden) return null; // אחרי שהפייד נגמר – מעלימים לגמרי

  return (
    <div className="opening-page">
      <div
        className={`opening-page ${fadeOut ? "fade-out1" : ""}`}
        onAnimationEnd={() => {
          if (fadeOut) setHidden(true); // רק אחרי הפייד-אאוט נעלם מה-DOM
        }}
      >
        <button className="about-btn" onClick={toggleAbout}>
          i
        </button>
        <div className={`div-about ${showAbout ? "fade-in" : "fade-out"}`}>
          {showAbout && (
            <>
              <h3 className="list-text-about">מפתחת ראשית: </h3>
              <p className="list-text-about">רב"ט מאיה מרום</p>
              <h3 className="list-text-about">גרפיקה:</h3>
              <p className="list-text-about">רב"ט מאיה מרום</p>
              <h3 className="list-text-about">מומחה תוכן:</h3>
              <p className="list-text-about">סמל יוסי</p>
              <h3 className="list-text-about">רמ"ד טי"ל:</h3>
              <p className="list-text-about">רס"מ עדן בן חמו</p>
              <h3 className="list-text-about">גרסה:</h3>
              <p className="list-text-about">יולי 2025</p>
            </>
          )}
        </div>
        <div className="main-items">
          <div className="cloud-container">
            <img src={cloud} alt="cloud" className="cloud" />
          </div>
          <p className="title">הוראות בטיחות בנהיגה</p>
          <div className="cloud2-container">
            <img src={cloud2} alt="cloud" className="cloud2" />
          </div>
          <img
            src={carGraphic}
            alt="carGraphic"
            className={`carGraphic ${carMoving ? "car-animate" : ""}`}
            onAnimationEnd={() => setFadeOut(true)} // כשהמכונית מסיימת -> מפעילים פייד למסך
          />
          {!btnClicked && (
            <img
              src={startBtn}
              alt="startBtn"
              className="start-btn"
              onClick={handleStart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default OpeningPage;
