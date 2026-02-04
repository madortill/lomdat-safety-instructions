import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/openingPage.css";
import Details from "../components/Details";
import { useData } from "../context/DataContext";

import carGraphic from "../assets/images/openingPage/carGraphic.png";
import cloud from "../assets/images/openingPage/cloud.png";
import cloud2 from "../assets/images/openingPage/cloud2.png";
import openingPage2 from "../assets/audio/openingPage2.mp4";

function OpeningPage() {
  const { data, switchJSON, currentJSON, playAudio } = useData();
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
  const [audioPlayed, setAudioPlayed] = useState(false);

  const [name, setName] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");

  const toggleAbout = () => setShowAbout(prev => !prev);

  const toggleLanguage = (e) => {
    e.stopPropagation();
    switchJSON(currentJSON === "he" ? "en" : "he");
  };

  const handleStart = () => {
    localStorage.setItem("startTime", Date.now());
    setCarMoving(true);
    setBtnClicked(true);
  };

  const isDetailsValid =
    name.trim().includes(" ") &&
    !/\d/.test(name) &&
    /^\d{7}$/.test(personalNumber);

  const handleNext = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("personalNumber", personalNumber);

    document.body.style.zoom = "80%";
    navigate("/Home");
  };

  useEffect(() => {
    return () => {
      document.body.style.zoom = "100%";
      document.body.style.transform = "none";
    };
  }, []);

  const handleCarFadeOut = () => {
    setFadeOut(true);
    setHidden(true);
    setShowText(true);

    if (!audioPlayed && currentJSON === "he") {
      playAudio(openingPage2);
      setAudioPlayed(true);
    }
  };

  return (
    <>
      {!hidden && (
        <div
          className={`opening-page ${fadeOut ? "fade-out1" : ""}`}
          onClick={() => setShowAbout(false)}
        >
          {/* כפתור אודות */}
          <div>
            <button
              className="about-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleAbout();
              }}
            >
              i
            </button>
            <p className="about-text-btn">אודות</p>
          </div>

          {/* כפתור שפה */}
          <button className="lang-btn" onClick={toggleLanguage}>
            {currentJSON === "he" ? "EN" : "עב"}
          </button>

          {/* אודות */}
          <div
            className={`div-about ${showAbout ? "fade-in show" : "fade-out"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="list-text-about">מפתחת ראשית:</h3>
            <p className="list-text-about">רב"ט מאיה מרום</p>
            <h3 className="list-text-about">גרפיקה:</h3>
            <p className="list-text-about">רב"ט מאיה מרום</p>
            <h3 className="list-text-about">מומחה תוכן:</h3>
            <p className="list-text-about">רנ"ג יוסי</p>
            <h3 className="list-text-about">רמ"ד טי"ל:</h3>
            <p className="list-text-about">רס"מ עדן בן חמו</p>
            <h3 className="list-text-about">גרסה:</h3>
            <p className="list-text-about">יולי 2025</p>
          </div>

          {/* תוכן ראשי */}
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
              onAnimationEnd={handleCarFadeOut}
            />

            {!btnClicked && (
              <div className="start-btn-wrapper">
                <div
                  className="start-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStart();
                  }}
                >
                  צאו לדרך
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showText && (
        <div className="openText fade-in-text">
          <p className="open-text1">{openText1}</p>
          <p className="open-text2">{openText2}</p>

          <Details
            name={name}
            setName={setName}
            personalNumber={personalNumber}
            setPersonalNumber={setPersonalNumber}
          />

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
