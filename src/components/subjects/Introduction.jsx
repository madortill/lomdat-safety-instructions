import React, { useState } from "react";
import "../../style/introduction.css";
import myData from "../../data/myData.json";

import { useData } from "../../context/DataContext.jsx"; // import של הקונטקסט

function Introduction({ onNext }) {
  const { data } = useData(); // כאן מקבלים את ה-JSON הנוכחי לפי השפה שנבחרה

  const titleIntro = data.subjMap[3].text; // כותרת
  const secTitleIntro = data.introduction[0].text; // כותרת שניה
  const sentenceIntro1 = data.introduction[1].text; // משפט 1
  const sentenceIntro2 = data.introduction[2].text; // משפט 2
  const sentenceIntro3 = data.introduction[3].text; // משפט 3
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

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
      <p className="title-subjects">{titleIntro}</p>

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
         {backBtn}
        </button>

        <button
          className="nav-button2"
          onClick={pageIndex === 1 ? onNext : nextPage}
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default Introduction;
