import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";
import "../../style/changingWheel.css";
import SvgTools from "../../components/SvgTools";

import wheelChangeVideo from "../../assets/videos/wheelChangeVideo.mp4";

function ChangingWheel({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);

  const TOTAL_CARDS = 6;
  const [flippedCount, setFlippedCount] = useState(0);

  const pages = data.changingWheel;
  const titleChangingWheel = data.subjMap[7].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleToolFlip = () => {
    setFlippedCount((prev) => Math.min(prev + 1, TOTAL_CARDS));
  };

  const isNextEnabled = flippedCount === TOTAL_CARDS;

  return (
    <div className="subject-container">
      <p className="title-subjects">{titleChangingWheel}</p>

      {/* עמוד ראשון */}
      {pageIndex === 0 && (
        <div className="page page1">
          <p className="sec-title-subjects">
            {pages[0].sectitle}
          </p>

          <div className="wheel-text">
            <p className="wheel-text-microfopy">
              {pages[0].text}
            </p>

            <div className="tools">
              <SvgTools onToolFlip={handleToolFlip} />
            </div>
          </div>
        </div>
      )}

      {/* עמוד שני */}
      {pageIndex === 1 && (
        <div className="page page2">
          <p className="sec-title-subjects">
            {pages[2].sectitle}
          </p>
          <video className="videos" src={wheelChangeVideo} alt="wheelChangeVideo" onEnded={() => setIsVideoEnded(true)} controls autoPlay muted></video>
        </div>
      )}

      <div className="nav-buttons">
        <button
          className="nav-button1"
          onClick={() =>
            setPageIndex((prev) => Math.max(prev - 1, 0))
          }
          disabled={pageIndex === 0}
        >
          {backBtn}
        </button>

        <button
  className="nav-button2"
  disabled={
    (pageIndex === 0 && !isNextEnabled) ||
    (pageIndex === 1 && !isVideoEnded)
  }
  onClick={() => {
    if (pageIndex === 0) {
      setPageIndex(1);
    } else {
      onNext("Map");
    }
  }}
  style={{
    opacity:
      (pageIndex === 0 && !isNextEnabled) ||
      (pageIndex === 1 && !isVideoEnded)
        ? 0.4
        : 1,
    cursor:
      (pageIndex === 0 && !isNextEnabled) ||
      (pageIndex === 1 && !isVideoEnded)
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

export default ChangingWheel;