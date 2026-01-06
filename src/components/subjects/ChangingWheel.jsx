import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";
import "../../style/changingWheel.css";
import SvgTools from "../../components/SvgTools";

function ChangingWheel({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);

  // ⬇️ חדש: ספירת קלפים
  const TOTAL_CARDS = 6;
  const [flippedCount, setFlippedCount] = useState(0);

  const pages = data.changingWheel;
  const titleChangingWheel = data.subjMap[7].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

  const nextPage = () =>
    setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));

  const prevPage = () =>
    setPageIndex((prev) => Math.max(prev - 1, 0));

  // ⬇️ חדש: פונקציה שקלף קורא לה
  const handleToolFlip = () => {
    setFlippedCount((prev) => Math.min(prev + 1, TOTAL_CARDS));
  };

  // ⬇️ חדש: האם אפשר לעבור הלאה
  const isNextEnabled = flippedCount === TOTAL_CARDS;

  return (
    <div className="subject-container">
      {/* כותרת ראשית */}
      <p className="title-subjects">{titleChangingWheel}</p>

      {/* עמודים */}
      {pages.map((page, index) => (
        <div
          key={index}
          className={`page page${index + 1}`}
          style={{ display: pageIndex === index ? "block" : "none" }}
        >
          <p className="sec-title-subjects">{page.sectitle}</p>

          {/* תוכן עמוד ראשון – טקסט + SVG */}
          {index === 0 && (
            <div className="wheel-text">
              <p className="wheel-text-microfopy">{page.text}</p>
              <div className="tools">
                {/* ⬇️ חדש: העברת callback */}
                <SvgTools onToolFlip={handleToolFlip} />
              </div>
            </div>
          )}
        </div>
      ))}

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
  disabled={!isNextEnabled}
  onClick={() => onNext("Map")}
  style={{
    opacity: isNextEnabled ? 1 : 0.4,
    cursor: isNextEnabled ? "pointer" : "not-allowed",
  }}
>
  {nextBtn}
</button>

      </div>
    </div>
  );
}

export default ChangingWheel;
