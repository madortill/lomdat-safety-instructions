import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";
import "../../style/flippingDrill.css";
import carFlipped from "../../assets/images/flippingDrill/carFlipped.png";
import gripPointsCar from "../../assets/images/flippingDrill/gripPointsCar.png";
import TitledGraphics from "../../components/TitledGraphics";
import PayAttention from "../../components/PayAttention";

function FlippingDrill({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);
  const [showPayAttention, setShowPayAttention] = useState(false);

  const pages = data.FlippingDrill;
  const titleFlippingDrill = data.subjMap[9].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  const importantText = data.payAttention[0].FlippingDrill;

  const nextPage = () => {
    // בעמוד האחרון – לחיצה ראשונה מציגה PayAttention
    if (pageIndex === pages.length - 1 && !showPayAttention) {
      setShowPayAttention(true);
      return;
    }

    // לחיצה שנייה – מעבר למפה
    if (pageIndex === pages.length - 1 && showPayAttention) {
      onNext("Practice");
      return;
    }

    // מעבר רגיל בין עמודים
    setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const prevPage = () => {
    // אם PayAttention פתוח – רק סוגרים אותו
    if (showPayAttention) {
      setShowPayAttention(false);
      return;
    }

    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="subject-container">
      {/* כותרת ראשית */}
      <p className="title-subjects">{titleFlippingDrill}</p>

      {/* עמוד 1 – רקע */}
      <div
        className="page page1"
        style={{ display: pageIndex === 0 ? "block" : "none" }}
      >
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

      {/* עמוד 2 – התנהלות לפני נסיעה */}
      <div
        className="page page2"
        style={{ display: pageIndex === 1 ? "block" : "none" }}
      >
        <p className="sec-title-subjects">{pages[1].secTitle}</p>
        <TitledGraphics subject="flippingDrill" />
      </div>

      {/* עמוד 3 – נקודות אחיזה + תשומת לב */}
      <div
        className="page page3"
        style={{ display: pageIndex === 2 ? "block" : "none" }}
      >
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

        {/* PayAttention – מופיע בלי מעבר עמוד */}
        {showPayAttention && <PayAttention text={importantText} />}
      </div>

      {/* ניווט */}
      <div className="nav-buttons">
        <button
          className="nav-button1"
          onClick={prevPage}
          disabled={pageIndex === 0 && !showPayAttention}
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

export default FlippingDrill;
