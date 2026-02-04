import React, { useState, useEffect } from "react";
import "../style/endScreen.css";
import { useData } from "../context/DataContext";
import { useLocation, useNavigate } from "react-router-dom";
import cloud from "../assets/images/openingPage/cloud.png";
import carEnd from "../assets/images/openingPage/carEnd.png";

function EndScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  // שם ומספר אישי
  const name =
    location.state?.name ||
    localStorage.getItem("name") ||
    "לא הוזן שם";

  const personalNumber =
    location.state?.personalNumber ||
    localStorage.getItem("personalNumber") ||
    "לא הוזן מספר אישי";

  const { data } = useData();
  const endTitle = data.endScreen[0].title;
  const endSecTitle = data.endScreen[0].secTitle;
  const startBtn = data.endScreen[0].startOverBtn;

  const [showAbout, setShowAbout] = useState(false);
  const [timeSpent, setTimeSpent] = useState("00:00");

  const toggleAbout = () => setShowAbout((prev) => !prev);

  // חישוב זמן
  useEffect(() => {
    const startTime = localStorage.getItem("startTime");
    if (!startTime) return;

    const elapsedMs = Date.now() - Number(startTime);
    const totalSeconds = Math.floor(elapsedMs / 1000);

    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    setTimeSpent(`${minutes}:${seconds}`);
  }, []);

  // 🔁 חזרה להתחלה
  const handleStartOver = () => {
    localStorage.removeItem("startTime");
    navigate("/");
  };

  return (
    <div onClick={() => setShowAbout(false)}>
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
        <p className="list-text-about">סמל יוסי</p>
        <h3 className="list-text-about">רמ"ד טי"ל:</h3>
        <p className="list-text-about">רס"מ עדן בן חמו</p>
        <h3 className="list-text-about">גרסה:</h3>
        <p className="list-text-about">יולי 2025</p>
      </div>

      {/* תוכן עיקרי */}
      <div className="main-items">
        <div className="cloud-container">
          <img src={cloud} alt="cloud" className="cloud" />
        </div>

        <p className="title">{endTitle}</p>
        <p className="details name">{name}</p>
        <p className="details perNum">{personalNumber}</p>
        <p className="details time">{timeSpent}</p>
        <p className="end-sec-title">{endSecTitle}</p>

        <img src={carEnd} alt="carEnd" className="carEnd" />
      </div>

      {/* כפתור התחלה מחדש */}
      <div className="start-over-btn-wrapper">
        <div
          className="start-over-btn"
          onClick={handleStartOver}
        >
          {startBtn}
        </div>
      </div>
    </div>
  );
}

export default EndScreen;
