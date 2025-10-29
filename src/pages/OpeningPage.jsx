import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/openingPage.css";
import Details from "../components/Details";
import myData from "../data/myData.json";
import carGraphic from "../assets/images/openingPage/carGraphic.png";
import cloud from "../assets/images/openingPage/cloud.png";
import cloud2 from "../assets/images/openingPage/cloud2.png";
import startBtn from "../assets/images/openingPage/startBtn.svg";

function OpeningPage() {
  const navigate = useNavigate();

  const headTitleText = myData.openingPage[0].text;
  const openText1 = myData.openingPage[1].text;
  const openText2 = myData.openingPage[2].text;
  const nextBtnText = myData.openingPage[3].text;

  const [showAbout, setShowAbout] = useState(false);
  const [carMoving, setCarMoving] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showText, setShowText] = useState(false);

  // state של השדות
  const [name, setName] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");

  const toggleAbout = () => setShowAbout((prev) => !prev);

  const handleStart = () => {
    setCarMoving(true);
    setBtnClicked(true);
  };

  // בדיקה האם הטופס תקין
  const isDetailsValid =
    name.trim().includes(" ") && !/\d/.test(name) && /^\d{7}$/.test(personalNumber);

  return (
    <>
      {!hidden && (
        <div
          className={`opening-page ${fadeOut ? "fade-out1" : ""}`}
          onTransitionEnd={() => {
            if (fadeOut) {
              setHidden(true);
              setShowText(true);
            }
          }}
        >
          <button className="about-btn" onClick={toggleAbout}>
            i
          </button>

          {showAbout && (
            <div className="div-about fade-in">
              <h3 className="list-text-about">מפתחת ראשית:</h3>
              <p className="list-text-about">רב"ט מאיה מרום</p>
              <h3 className="list-text-about">גרפיקה:</h3>
              <p className="list-text-about">רב"ט מאיה מרום</p>
              <h3 className="list-text-about">מומחה תוכן:</h3>
              <p className="list-text-about">סמל יוסי</p>
              <h3 className="list-text-about">רמ"ד טי"ל:</h3>
              <p className="list-text-about">רס"מ עדן בן חמו</p>
              <h3 className="list-text-about">גרסה:</h3>
              <p className="list-text-about">יולי 2025</p>
            </div>
          )}

          <div className="main-items">
            <div className="cloud-container">
              <img src={cloud} alt="cloud" className="cloud" />
            </div>

            <p className="title">{headTitleText}</p>

            <div className="cloud2-container">
              <img src={cloud2} alt="cloud" className="cloud2" />
            </div>

            <img
              src={carGraphic}
              alt="carGraphic"
              className={`carGraphic ${carMoving ? "car-animate" : ""}`}
              onAnimationEnd={() => setFadeOut(true)}
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
      )}

      {showText && (
        <div className="openText fade-in-text">
          <p className="open-text1">{openText1}</p>
          <p className="open-text2">{openText2}</p>

          {/* כאן Details */}
          <Details
            name={name}
            setName={setName}
            personalNumber={personalNumber}
            setPersonalNumber={setPersonalNumber}
          />

          {/* הכפתור מחוץ ל-Details */}
          <button
            className="next-btn-opening"
            disabled={!isDetailsValid}
            onClick={() => navigate("/Home")}
          >
           {nextBtnText}
          </button>
        </div>
      )}
    </>
  );
}

export default OpeningPage;
