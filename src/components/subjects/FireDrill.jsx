import React, { useState } from "react";
import "../../style/fireDrill.css";
import { useData } from "../../context/DataContext.jsx";

function FireDrill({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);

  const pages = data.fireDrill;
  const titleFireDrill = data.subjMap[8].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

  const nextPage = () =>
    setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));

  const prevPage = () =>
    setPageIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="subject-container">
      {/* כותרת ראשית */}
      <p className="title-subjects">{titleFireDrill}</p>

      {/* עמוד 1 – סיבות לשריפה */}
      <div
        className="page page1"
        style={{ display: pageIndex === 0 ? "block" : "none" }}
      >
        <p className="sec-title-subjects">{pages[0].secTitle}</p>

        <div className="container-fire-cards">
          <div className="fire-card">
            <p className="text-fire-card">{pages[0].reason1}</p>
          </div>
          <div className="fire-card">
            <p className="text-fire-card">{pages[0].reason2}</p>
          </div>   
          <div className="fire-card">
            <p className="text-fire-card">{pages[0].reason3}</p>
          </div>   
          <div className="fire-card">
            <p className="text-fire-card">{pages[0].reason4}</p>
          </div>
        </div>
      </div>

      {/* עמוד 2 – תרגולת שריפה */}
      <div
        className="page page2"
        style={{ display: pageIndex === 1 ? "block" : "none" }}
      >
        <p className="sec-title-subjects">{pages[1].secTitle}</p>
        <p class="roadside-text">סרטון יגיע בהמשך</p>
      </div>

      {/* ניווט */}
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
          onClick={
            pageIndex === pages.length - 1
              ? () => onNext("Map") // או השם האמיתי של המפה
              : nextPage
          }
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default FireDrill;
