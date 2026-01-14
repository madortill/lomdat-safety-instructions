import React, { useState, useEffect } from "react";
import "../style/openingPage.css";
import { useData } from "../context/DataContext";
import { useLocation } from "react-router-dom";
import cloud from "../assets/images/openingPage/cloud.png";
import carEnd from "../assets/images/openingPage/carEnd.png";

function EndScreen() {
  const location = useLocation();
  
  // שם ומספר אישי מגיעים מה-OpeningPage או מ-localStorage
  const name = location.state?.name || localStorage.getItem("name") || "לא הוזן שם";
  const personalNumber =
    location.state?.personalNumber || localStorage.getItem("personalNumber") || "לא הוזן מספר אישי";

  const { data } = useData();
  const endTitle = data.endScreen[0].title;
  const endSecTitle = data.endScreen[0].secTitle;

  const [showAbout, setShowAbout] = useState(false);
  const [timeSpent, setTimeSpent] = useState("00:00");

  const toggleAbout = () => setShowAbout((prev) => !prev);

  // חישוב הזמן שהושקע מרגע ההתחלה ב-OpeningPage
  useEffect(() => {
    const startTime = parseInt(localStorage.getItem("startTime"));
    if (startTime) {
      const elapsedMs = Date.now() - startTime;
      const totalSeconds = Math.floor(elapsedMs / 1000);
      const minutes = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (totalSeconds % 60).toString().padStart(2, "0");
      setTimeSpent(`${minutes}:${seconds}`);
    }
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default EndScreen;
