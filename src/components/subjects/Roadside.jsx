import React, { useState } from "react";
import "../../style/roadside.css";
import { useData } from "../../context/DataContext.jsx";
import roadSideHighlight from "../../assets/images/roadside/roadSideHighlight.png";
import boxPlanned from "../../assets/images/roadside/boxPlanned.png";
import boxUnplanned from "../../assets/images/roadside/boxUnplanned.png";
import TitledGraphics from "../../components/TitledGraphics";
import Rocks from "../../components/Rocks";


function Roadside({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);
  const [numOfPlanned, setNumOfPlanned] = useState(2);
  const [numOfUnplanned, setNumOfUnplanned] = useState(2);
  const [mirrorBroken, setMirrorBroken] = useState(false);
  const [plannedIndex, setPlannedIndex] = useState(0); // איזה גורם מתוכנן מוצג כרגע (factor1 או factor2)
  const [unplannedIndex, setUnplannedIndex] = useState(0); // איזה גורם לא מתוכנן מוצג כרגע
  const [showMirror, setShowMirror] = useState(false);

  const [plannedClicks, setPlannedClicks] = useState(0);

  // מסנן את העמודים - דילוג על index 2 ו-3
  const pages = data.roadside.filter((_, index) => index !== 2 && index !== 3);
  const canGoNext =
  pageIndex !== 1 || (numOfPlanned === 0 && numOfUnplanned === 0);

  const titleRoadside = data.subjMap[4].text;
  const secTitleRoadside = pages[pageIndex].secTitle;
  const textRoadside = pages[pageIndex].text;
  const textFactors = data.roadside[2].text;
  const planned = data.roadside[2].planned;
  const unplanned = data.roadside[3].unplanned;

  // כפתורים
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  

  const nextPage = () => {
    if (pageIndex === 1 && !(numOfPlanned === 0 && numOfUnplanned === 0)) {
      return; // נעול
    }
  
    if (pageIndex < pages.length - 1) {
      setPageIndex((prev) => prev + 1);
    } else {
      onNext && onNext();
    }
  };
  

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };
  const openFactors = (event) => {
    const id = event.target.id;

    setShowMirror(true);

    if (id === "planned") {
      // מראה שלמה
      setMirrorBroken(false);

      // עדכון אינדקס גורם מתוכנן
      setPlannedIndex((prev) => (prev === 1 ? 2 : 1));

      // ספירת לחיצות על המתוכננים
      setPlannedClicks((prev) => prev + 1);

      // עדכון מספר גורמים שנותרו
      setNumOfPlanned((prev) => (prev === 0 ? 0 : prev - 1));
    }

    if (id === "unplanned") {
      // בודקים אם כבר לחץ על שני הגורמים המתוכננים
      if (plannedClicks < 2) return;

      setMirrorBroken(true); // מראה שבורה
      setUnplannedIndex((prev) => (prev === 1 ? 2 : 1));
      setNumOfUnplanned((prev) => (prev === 0 ? 0 : prev - 1));
    }
  };

  // מערך של divים לכל עמוד
  const pageDivs = pages.map((page, index) => {
    switch (index) {
      case 0:
        return (
          <div key={index} className="page1">
            <img
              src={roadSideHighlight}
              alt="roadSideHighlight"
              className="roadSideHighlight"
            />
          </div>
        );
      case 1:
        return (
          <div key={index} className="page2">
            <img
              src={boxPlanned}
              id="planned"
              onClick={openFactors}
              alt="boxPlanned"
              className="boxPlanned"
            />
            <p className="counter-unplanned">
              {textFactors} 
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              2/{numOfUnplanned}
              </span>
            </p>

            <p className="planned">{planned}</p>
            <img
              src={boxUnplanned}
              id="unplanned"
              onClick={openFactors}
              alt="boxUnplanned"
              className="boxUnplanned"
              style={{
                opacity: plannedClicks >= 2 ? 1 : 0.5,
                pointerEvents: plannedClicks >= 2 ? "auto" : "none",
                cursor: plannedClicks >= 2 ? "pointer" : "default",
              }}
            />
            <p className="counter-planned">
            {textFactors} 
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              2/{numOfPlanned}
              </span>
            </p>
            <p className="unplanned">{unplanned}</p>
            {showMirror &&
              (mirrorBroken ? (
                <div className="mirror-broken">
                  <p className="mirror-text">
                    {data.roadside[3][`factor${unplannedIndex}`]}
                  </p>
                </div>
              ) : (
                <div className="mirror">
                  <p className="mirror-text">
                    {data.roadside[2][`factor${plannedIndex}`]}
                  </p>
                </div>
              ))}
          </div>
        );
        case 2:
        return (
          <div key={index} className="page3">
            <TitledGraphics />
          </div>
        );
        case 3:
          return (
            <div key={index} className="page4">
            <TitledGraphics />
          </div>
          );
          case 4:
            return (
              <div key={index} className="page5">
              <Rocks />
            </div>
            );
      // אם יש עוד עמודים אפשר להוסיף כאן case נוספים
      default:
        return (
          <div key={index}>
            <p>{page.text}</p>
          </div>
        );
    }
  });

  return (
    <div className="roadside-container">
      <p className="title-subjects">{titleRoadside}</p>
      <p className="sec-title-subjects">{secTitleRoadside}</p>
      <p className="roadside-text">{textRoadside}</p>

      {/* מציג רק את הדיב של העמוד הנוכחי */}
      {pageDivs[pageIndex]}

      <div className="nav-buttons">
        <button
          className="nav-button1"
          onClick={prevPage}
          disabled={pageIndex === 0}
        >
          {backBtn}
        </button>

        <button className="nav-button2" onClick={nextPage}  disabled={pageIndex === 1 && !(numOfPlanned === 0 && numOfUnplanned === 0)}>
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default Roadside;
