import React, { useState } from "react";
import "../../style/roadside.css";
import { useData } from "../../context/DataContext.jsx";
import roadSideHighlight from "../../assets/images/roadside/roadSideHighlight.png";
import boxPlanned from "../../assets/images/roadside/boxPlanned.png";
import boxUnplanned from "../../assets/images/roadside/boxUnplanned.png";
import TitledGraphics from "../../components/TitledGraphics";
import Rocks from "../../components/Rocks";
import PayAttention from "../../components/PayAttention";
import bigVi from "../../assets/images/roadside/big-vi.svg";
import bigX from "../../assets/images/roadside/big-X.svg";

function Roadside({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);
  const [numOfPlanned, setNumOfPlanned] = useState(2);
  const [numOfUnplanned, setNumOfUnplanned] = useState(2);
  const [plannedClicks, setPlannedClicks] = useState(0);
  const [mirrorBroken, setMirrorBroken] = useState(false);
  const [plannedIndex, setPlannedIndex] = useState(0);
  const [unplannedIndex, setUnplannedIndex] = useState(0);
  const [showMirror, setShowMirror] = useState(false);
  const [rocksDone, setRocksDone] = useState(false);
  const [showAttentionRocks, setShowAttentionRocks] = useState(false);

  const pages = data.roadside.filter((_, index) => index !== 2 && index !== 3);

  const titleRoadside = data.subjMap[4].text;
  const secTitleRoadside = pages[pageIndex].secTitle;
  const textRoadside = pages[pageIndex].text;
  const textFactors = data.roadside[2].text;
  const planned = data.roadside[2].planned;
  const unplanned = data.roadside[3].unplanned;
  const highlightRight = data.roadside[8].right;
  const highlightWrong = data.roadside[8].wrong;

  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

  const handleRocksComplete = () => {
    setRocksDone(true);
  };

  const openFactors = (event) => {
    const id = event.target.id;
    setShowMirror(true);

    if (id === "planned") {
      setMirrorBroken(false);
      setPlannedIndex((prev) => (prev === 1 ? 2 : 1));
      setPlannedClicks((prev) => prev + 1);
      setNumOfPlanned((prev) => Math.max(prev - 1, 0));
    }

    if (id === "unplanned") {
      if (plannedClicks < 2) return;
      setMirrorBroken(true);
      setUnplannedIndex((prev) => (prev === 1 ? 2 : 1));
      setNumOfUnplanned((prev) => Math.max(prev - 1, 0));
    }
  };

  const nextPage = () => {
    const lastPage = pages.length - 1;

    // נעילה בעמודים ספציפיים
    if (pageIndex === 1 && !(numOfPlanned === 0 && numOfUnplanned === 0)) return;

    // עמוד Rocks – קודם מציג PayAttention, לחיצה שנייה עוברת הלאה
    if (pageIndex === 4 && rocksDone && !showAttentionRocks) {
      setShowAttentionRocks(true);
      return;
    }

    if (pageIndex === 4 && showAttentionRocks) {
      setShowAttentionRocks(false);
      setPageIndex((prev) => prev + 1);
      return;
    }

    if (pageIndex < lastPage) {
      setPageIndex((prev) => prev + 1);
    } else {
      onNext && onNext("keepingDistance");
    }
  };

  const prevPage = () => {
    if (showAttentionRocks) {
      setShowAttentionRocks(false);
      return;
    }

    if (pageIndex > 0) setPageIndex((prev) => prev - 1);
  };

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
          <div key={index} className="page3 margin">
            <TitledGraphics />
          </div>
        );
      case 3:
        return (
          <div key={index} className="page4 margin">
            <TitledGraphics />
          </div>
        );
      case 4:
        return (
          <div key={index} className="page5">
            <Rocks onAllRocksClicked={handleRocksComplete} />
            {showAttentionRocks && (
              <PayAttention text={data.payAttention[0].roadside} />
            )}
          </div>
        );
      case 6:
        return (
          <div key={index} className="page6 margin">
            <div className="graphics-right-wrong-container">
              <div className="graphic-right">
                <div className="div-text-graphic-right">
                  <p className="text-graphic-right">{highlightRight}</p>
                </div>
                <img src={bigVi} className="big-vi" alt="big-vi" />
              </div>
              <div className="graphic-wrong">
                <div className="div-text-graphic-wrong">
                  <p className="text-graphic-wrong">{highlightWrong}</p>
                </div>
                <img src={bigX} className="big-x" alt="big-x" />
              </div>
            </div>
          </div>
        );
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

      {pageDivs[pageIndex]}

      <div className="nav-buttons">
        <button
          className="nav-button1"
          onClick={prevPage}
          disabled={pageIndex === 0}
        >
          {backBtn}
        </button>

        <button
          className="nav-button2"
          onClick={nextPage}
          disabled={
            (pageIndex === 1 && !(numOfPlanned === 0 && numOfUnplanned === 0)) ||
            (pageIndex === 4 && !rocksDone)
          }
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default Roadside;
