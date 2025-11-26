import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext.jsx";
import "../../style/keepingDistance.css";
import distanceImg from "../../assets/images/keepingDistance/distance.png";
import carsAnimaitions from "../../assets/images/keepingDistance/carsAnimaitions.png";
import lightPole from "../../assets/images/keepingDistance/lightPole.png";
import PayAttention from "../../components/PayAttention";

function KeepDistance({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);
  const [sec, setSec] = useState("");
  const [showAttention, setShowAttention] = useState(false); // <-- חדש

  const titleKeepingDistance = data.subjMap[5].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  const pages = data.keepingDistance;
  const importantText = data.payAttention[0].twoSec;

  const nextPage = () =>
    setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
  const prevPage = () => setPageIndex((prev) => Math.max(prev - 1, 0));

  // ספירה בין 1 ל-2 בעמוד 2
  useEffect(() => {
    if (pageIndex !== 1) return;

    setSec("1");
    let currentSecond = 1;

    const interval = setInterval(() => {
      currentSecond = currentSecond === 1 ? 2 : 1;
      setSec(currentSecond.toString());
    }, 2000);

    return () => clearInterval(interval);
  }, [pageIndex]);

  // הצגת PayAttention אחרי סיבוב אחד של האנימציה (נניח 4 שניות)
  useEffect(() => {
    if (pageIndex !== 1) return;

    const timer = setTimeout(() => {
      setShowAttention(true);
    }, 4000); // מחכה 4 שניות לפני הופעה

    return () => {
      clearTimeout(timer);
      setShowAttention(false); // אפס כשעוזבים את העמוד
    };
  }, [pageIndex]);

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
        <div className="animaition-container">
          <img
            src={carsAnimaitions}
            className="carsAnimaitions"
            alt="carsAnimaitions"
          />
          <img src={lightPole} className="lightPole" alt="lightPole" />
          <p className="text-sec">
            {sec} {pages[1].text}
          </p>
        </div>
        {showAttention && <PayAttention text={importantText} />}
      </div>

      {/* עמוד 3 */}
      <div
        className="page page3"
        style={{ display: pageIndex === 2 ? "block" : "none" }}
      >
        <p className="sec-title-subjects">{pages[2].secTitle}</p>
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
          disabled={pageIndex === 1 && !showAttention} // הכפתור לא פעיל עד שהאנימציה הסתיימה
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default KeepDistance;
