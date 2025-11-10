import React, { useState } from "react";
import "../../style/introduction.css";
import myData from "../../data/myData.json";

function Introduction({ onNext }) {
  const titleIntro = myData.subjMap[3].text;
  const secTitleIntro = myData.introduction[0].text;
  const sentenceIntro1 = myData.introduction[1].text;
  const sentenceIntro2 = myData.introduction[2].text;
  const sentenceIntro3 = myData.introduction[3].text;

  const [pageIndex, setPageIndex] = useState(0);

  // מעבר לעמוד הבא
  const nextPage = () => {
    setPageIndex((prev) => Math.min(prev + 1, 1));
  };

  // מעבר לעמוד הקודם
  const prevPage = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="intro-container">
      <p className="title-introduction">{titleIntro}</p>

      {pageIndex === 0 && (
        <div className="intro-page1">
          <p>תוכן של עמוד ראשון — לדוגמה הסבר ראשוני</p>
        </div>
      )}

      {pageIndex === 1 && (
        <div className="intro-page2">
          <p className="sec-title-intro">{secTitleIntro}</p>
          <div className="sign-crash">
            <ul className="my-list">
              <li>{sentenceIntro1}</li>
              <li>{sentenceIntro2}</li>
              <li>{sentenceIntro3}</li>
            </ul>
          </div>
        </div>
      )}

      <div className="nav-buttons">
        <button
          className="nav-button1"
          onClick={prevPage}
          disabled={pageIndex === 0}
        >
          הקודם
        </button>

        <button
          className="nav-button2"
          onClick={pageIndex === 1 ? onNext : nextPage}
        >
          הבא
        </button>
      </div>
    </div>
  );
}

export default Introduction;
