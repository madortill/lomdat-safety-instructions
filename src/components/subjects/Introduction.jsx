import React, { useState, useEffect } from "react";
import "../../style/introduction.css";
import { useData } from "../../context/DataContext.jsx"; // import של הקונטקסט
import PayAttention from "../PayAttention.jsx";

import accident1 from "../../assets/images/introduction/accident1.jpg";
import accident2 from "../../assets/images/introduction/accident2.jpg";
import accident3 from "../../assets/images/introduction/accident3.jpg";
import accident4 from "../../assets/images/introduction/accident4.jpg";

function Introduction({ onNext }) {
  const { data } = useData(); // כאן מקבלים את ה-JSON הנוכחי לפי השפה שנבחרה

  const titleIntro = data.subjMap[3].text; // כותרת
  const secTitleIntro = data.introduction[0].text; // כותרת שניה
  const sentenceIntro1 = data.introduction[1].text; // משפט 1
  const sentenceIntro2 = data.introduction[2].text; // משפט 2
  const sentenceIntro3 = data.introduction[3].text; // משפט 3
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  const important = data.payAttention[0].intro;

  const [pageIndex, setPageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(0);
const [showAttention, setShowAttention] = useState(false);

  // מעבר לעמוד הבא
  const nextPage = () => {
    setPageIndex((prev) => Math.min(prev + 1, 1));
  };

  // מעבר לעמוד הקודם
  const prevPage = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const fadeDuration = 1500; // כמה זמן לוקח לתמונה להופיע (1.5 שניות)
const gap = 300; // זמן המתנה אחרי שהיא הופיעה
const delayAfterLast = 1000;
useEffect(() => {
  let timeouts = [];

  timeouts.push(setTimeout(() => setVisibleImages(1), 0));
  timeouts.push(setTimeout(() => setVisibleImages(2), fadeDuration + gap));
  timeouts.push(setTimeout(() => setVisibleImages(3), 2 * (fadeDuration + gap)));
  timeouts.push(setTimeout(() => setVisibleImages(4), 3 * (fadeDuration + gap)));

  timeouts.push(
    setTimeout(
      () => setShowAttention(true),
      4 * (fadeDuration + gap) + delayAfterLast
    )
  );

  return () => timeouts.forEach(clearTimeout);
}, []);

  return (
    <div className="intro-container">
      <p className="title-subjects">{titleIntro}</p>

      {pageIndex === 0 && (
        <div className=" page intro-page1">
          <img
  src={accident1}
  className={`accident1 ${visibleImages >= 1 ? "fade-in" : ""}`}
/>

<img
  src={accident2}
  className={`accident2 ${visibleImages >= 2 ? "fade-in" : ""}`}
/>

<img
  src={accident3}
  className={`accident3 ${visibleImages >= 3 ? "fade-in" : ""}`}
/>

<img
  src={accident4}
  className={`accident4 ${visibleImages >= 4 ? "fade-in" : ""}`}
/>
{showAttention && <PayAttention text={important} />}
        </div>
      )}

      {pageIndex === 1 && (
        <div className="page intro-page2">
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
  disabled={pageIndex === 0 && !showAttention}
>
  {nextBtn}
</button>
      </div>
    </div>
  );
}

export default Introduction;
