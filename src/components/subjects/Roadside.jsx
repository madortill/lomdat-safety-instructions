import React, { useState } from "react";
import "../../style/roadside.css";
import { useData } from "../../context/DataContext.jsx";
import roadSideHighlight from "../../assets/images/roadside/roadSideHighlight.png";
import boxPlanned from "../../assets/images/roadside/boxPlanned.png";
import boxUnplanned from "../../assets/images/roadside/boxUnplanned.png";
import brokenMirror from "../../assets/images/roadside/brokenMirror.png";

function Roadside({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);
  const [numOfPlanned, setNumOfPlanned] = useState(2);
  const [numOfUnplanned, setNumOfUnplanned] = useState(2);
  const [mirrorBroken, setMirrorBroken] = useState(false);
  const [plannedIndex, setPlannedIndex] = useState(1); // איזה גורם מתוכנן מוצג כרגע (factor1 או factor2)
  const [unplannedIndex, setUnplannedIndex] = useState(1); // איזה גורם לא מתוכנן מוצג כרגע

  // מסנן את העמודים - דילוג על index 2 ו-3
  const pages = data.roadside.filter((_, index) => index !== 2 && index !== 3);

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
    if (pageIndex < pages.length - 1) {
      setPageIndex((prev) => prev + 1);
    } else {
      onNext && onNext(); // אם הגענו לסוף, נשלח לפונקציה של Home
    }
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };
  const openFactors = (event) => {
    if (event.target.id === "planned") {
      setNumOfPlanned((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
      setMirrorBroken(false); // מראה שלמה
      setPlannedIndex(prev => (prev === 1 ? 2 : 1));
    }

    if (event.target.id === "unplanned") {
      setNumOfUnplanned((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
      setMirrorBroken(true); // מראה שבורה
    setUnplannedIndex(prev => (prev === 1 ? 2 : 1))
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
              style={{ opacity: numOfPlanned === 0 ? 0.5 : 1 }}
            />
            <p className="counter-unplanned">
              {textFactors} 2/{numOfUnplanned}
            </p>
            <p className="planned">{planned}</p>
            <img
              src={boxUnplanned}
              id="unplanned"
              onClick={openFactors}
              alt="boxUnplanned"
              className="boxUnplanned"
              style={{ opacity: numOfUnplanned === 0 ? 0.5 : 1 }}
            />
            <p className="counter-planned">
              {textFactors} 2/{numOfPlanned}
            </p>
            <p className="unplanned">{unplanned}</p>
            {mirrorBroken ? (
              <div className="mirror-broken"><p className="mirror-text">{data.roadside[3][`factor${unplannedIndex}`]}</p></div>
            ) : (
              <div className="mirror"><p className="mirror-text">{data.roadside[2][`factor${plannedIndex}`]}</p></div>
            )}
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

        <button className="nav-button2" onClick={nextPage}>
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default Roadside;
