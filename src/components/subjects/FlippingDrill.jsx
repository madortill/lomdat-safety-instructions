import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";
import "../../style/flippingDrill.css";
import carFlipped from "../../assets/images/flippingDrill/carFlipped.png";
import gripPointsCar from "../../assets/images/flippingDrill/gripPointsCar.png";
import TitledGraphics from "../../components/TitledGraphics";
import PayAttention from "../../components/PayAttention";

import flippingDrillVideo from "../../assets/videos/flippingDrillVideo.mp4";


function FlippingDrill({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);
  const [showPayAttention, setShowPayAttention] = useState(false);

  const pages = data.FlippingDrill;
  const titleFlippingDrill = data.subjMap[9].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  const importantText = data.payAttention[0].FlippingDrill;

  const [isVideoEnded, setIsVideoEnded] = useState(false);


  const nextPage = () => {
    // בעמוד 3 (נקודות אחיזה) – הצגת PayAttention
    if (pageIndex === 2 && !showPayAttention) {
      setShowPayAttention(true);
      return;
    }

    // בעמוד 3 – מעבר לעמוד 4
    if (pageIndex === 2 && showPayAttention) {
      setShowPayAttention(false);
      setPageIndex(3);
      return;
    }

    // בעמוד 4 – מעבר ל-Practice
    if (pageIndex === 3) {
      onNext("Practice");
      return;
    }

    // מעבר רגיל
    setPageIndex((prev) => prev + 1);
  };

  const prevPage = () => {
    // אם PayAttention פתוח – רק סוגרים
    if (showPayAttention) {
      setShowPayAttention(false);
      return;
    }

    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="subject-container">
      <p className="title-subjects">{titleFlippingDrill}</p>

      {/* עמוד 1 – רקע */}
      {pageIndex === 0 && (
        <div className="page page1">
          <p className="sec-title-subjects">{pages[0].secTitle}</p>

          <ul className="flipping-text">
            <li>{pages[0].text1}</li>
            <li>{pages[0].text2}</li>
            <li>{pages[0].text3}</li>
          </ul>

          <img
            className="carFlippedImg"
            src={carFlipped}
            alt="carFlipped"
          />
        </div>
      )}

      {/* עמוד 2 – התנהלות לפני נסיעה */}
      {pageIndex === 1 && (
        <div className="page page2">
          <p className="sec-title-subjects">{pages[1].secTitle}</p>
          <TitledGraphics subject="flippingDrill" />
        </div>
      )}

      {/* עמוד 3 – נקודות אחיזה */}
      {pageIndex === 2 && (
        <div className="page page3">
          <p className="sec-title-subjects">{pages[2].secTitle}</p>

          <div className="gripPointsContainer">
            <img
              className="gripPointsCar"
              src={gripPointsCar}
              alt="gripPointsCar"
            />

            <p className="gripPointsCarText steeringWheel">
              {pages[2].gripPointSteeringWheel}
            </p>
            <p className="gripPointsCarText chairs">
              {pages[2].gripPointChairs}
            </p>
            <p className="gripPointsCarText handles">
              {pages[2].gripPointHandles}
            </p>
          </div>

          {showPayAttention && (
            <PayAttention text={importantText} />
          )}
        </div>
      )}

      {/* עמוד 4 – תרגולת התהפכות */}
      {pageIndex === 3 && (
        <div className="page page4">
          <p className="sec-title-subjects">{pages[3].secTitle}</p>
          <video className="videos" src={flippingDrillVideo} alt="flippingDrillVideo" onEnded={() => setIsVideoEnded(true)} controls autoPlay muted></video>

        </div>
      )}

      {/* ניווט */}
      <div className="nav-buttons">
        <button
          className="nav-button1"
          onClick={prevPage}
          disabled={pageIndex === 0 && !showPayAttention}
        >
          {backBtn}
        </button>

        <button
  className="nav-button2"
  onClick={nextPage}
  disabled={pageIndex === 3 && !isVideoEnded}
  style={{
    opacity:
      pageIndex === 3 && !isVideoEnded
        ? 0.4
        : 1,
    cursor:
      pageIndex === 3 && !isVideoEnded
        ? "not-allowed"
        : "pointer",
  }}
>
  {nextBtn}
</button>
      </div>
    </div>
  );
}

export default FlippingDrill;