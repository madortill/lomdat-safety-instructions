import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";

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

  const currentPage = pages[pageIndex];

  return (
    <div className="subject-container">
      <p className="title-subjects">{titleKeepingDistance}</p>

      <div className={`page page${pageIndex + 1}`}>
        <p className="sec-title">{currentPage.secTitle}</p>
        {/* טקסטים כלליים */}
        {currentPage.text1 && <p>{currentPage.text1}</p>}
        {currentPage.text2 && <p>{currentPage.text2}</p>}
        {currentPage.text && <p>{currentPage.text}</p>}

        {/* רשימת סיבות אם קיימות */}
        {Object.keys(currentPage)
          .filter((key) => key.startsWith("reason"))
          .length > 0 && (
          <ul className="reason-list">
            {Object.keys(currentPage)
              .filter((key) => key.startsWith("reason"))
              .map((key) => (
                <li key={key}>{currentPage[key]}</li>
              ))}
          </ul>
        )}
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
