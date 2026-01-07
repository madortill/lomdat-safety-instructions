import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/openingPage.css";
import Details from "../components/Details";
import { useData } from "../context/DataContext";
import carGraphic from "../assets/images/openingPage/carGraphic.png";
import cloud from "../assets/images/openingPage/cloud.png";
import cloud2 from "../assets/images/openingPage/cloud2.png";
import startBtn from "../assets/images/openingPage/startBtn.svg";

function OpeningPage() {
  const { data, switchJSON } = useData();
  const navigate = useNavigate();

  const headTitleText = data.openingPage[0].text;
  const openText1 = data.openingPage[1].text;
  const openText2 = data.openingPage[2].text;
  const nextBtnText = data.openingPage[3].text;

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
    name.trim().includes(" ") &&
    !/\d/.test(name) &&
    /^\d{7}$/.test(personalNumber);

  // כפתור הבא עם זום אמיתי
  const handleNext = () => {
    // זום אמיתי של הדף
    document.body.style.zoom = "80%"; // אפשר לשנות אחוז
    // או לחלופין scale:
    // document.body.style.transform = "scale(0.8)";
    // document.body.style.transformOrigin = "top center";

    // ממשיכים לנווט ל־Home
    navigate("/Home");
  };

  // נקה את הזום כשעוזבים את הדף
  useEffect(() => {
    return () => {
      document.body.style.zoom = "100%";
      document.body.style.transform = "none";
    };
  }, []);

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
          <div>
            <button className="about-btn" onClick={toggleAbout}>
              i
            </button>
            <p className="about-text-btn">אודות</p>
          </div>

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

          {/* כפתור הבא שמקטין את הדף */}
          <button
            className="next-btn-opening"
            disabled={!isDetailsValid}
            onClick={handleNext}
          >
            {nextBtnText}
          </button>
        </div>
      )}
    </>
  );
}

export default OpeningPage;
