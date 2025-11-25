import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";
import "../../style/keepingDistance.css";
import distanceImg from "../../assets/images/keepingDistance/distance.png";

function KeepDistance({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);

  const titleKeepingDistance = data.subjMap[5].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

  const pages = data.keepingDistance;

  const nextPage = () => {
    setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const prevPage = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="subject-container">
      <p className="title-subjects">{titleKeepingDistance}</p>

      {/* עמוד 1 */}
      <div
        className="page page1"
        style={{ display: pageIndex === 0 ? "block" : "none" }}
      >
        <p className="sec-title-subjects">{pages[0].secTitle}</p>
        <ul className="distance-text">
          {[pages[0].text1, pages[0].text2].map((text, index) =>
            text ? <li key={index}>{text}</li> : null
          )}
        </ul>
        <img src={distanceImg} className="distanceImg" alt="distanceImg" />
      </div>

      {/* עמוד 2 */}
      <div
        className="page page2"
        style={{ display: pageIndex === 1 ? "block" : "none" }}
      >
        <p className="sec-title-subjects">{pages[1].secTitle}</p>
        {pages[1].text && <p>{pages[1].text}</p>}
      </div>

      {/* עמוד 3 */}
      <div
        className="page page3"
        style={{ display: pageIndex === 2 ? "block" : "none" }}
      >
        <p className="sec-title-subjects">{pages[2].secTitle}</p>
        {/* רשימת סיבות */}
        <ul className="reason-list">
          {Object.keys(pages[2])
            .filter((key) => key.startsWith("reason"))
            .map((key) => (
              <li key={key}>{pages[2][key]}</li>
            ))}
        </ul>
      </div>

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
              ? () => onNext("AnimalAccidents")
              : nextPage
          }
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default KeepDistance;
