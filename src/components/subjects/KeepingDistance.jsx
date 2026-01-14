import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext.jsx";
import "../../style/keepingDistance.css";
import distanceImg from "../../assets/images/keepingDistance/distance.png";
import carsAnimaitions from "../../assets/images/keepingDistance/carsAnimaitions.png";
import lightPole from "../../assets/images/keepingDistance/lightPole.png";
import PayAttention from "../../components/PayAttention";
import FlipCard from "../../components/FlipCard";

function KeepDistance({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);
  const [sec, setSec] = useState("");
  const [showAttentionPage2, setShowAttentionPage2] = useState(false);
  const [showAttentionPage3, setShowAttentionPage3] = useState(false);
  const [flippedCount, setFlippedCount] = useState(0);
  const [page2Unlocked, setPage2Unlocked] = useState(false);
  const [page3Unlocked, setPage3Unlocked] = useState(false);

  const pages = data.keepingDistance;
  const titleKeepingDistance = data.subjMap[5].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  const importantTextPage2 = data.payAttention[0].twoSec;
  const importantTextPage3 = data.payAttention[0].whyDistance;

  // רשימת הסיבות בכרטיסים
  const reasons = [
    data.keepingDistance[2].reason1,
    data.keepingDistance[2].reason2,
    data.keepingDistance[2].reason3,
    data.keepingDistance[2].reason4,
    data.keepingDistance[2].reason5,
    data.keepingDistance[2].reason6,
    data.keepingDistance[2].reason7,
    data.keepingDistance[2].reason8,
  ];

  // ניווט עמודים
  const nextPage = () => {
    // עמוד 2 – הצגת PayAttention במקום מעבר
    if (pageIndex === 1 && !showAttentionPage2) {
      setShowAttentionPage2(true);
      return;
    }

    // עמוד 3 – הצגת PayAttention במקום מעבר
    if (pageIndex === 2 && !showAttentionPage3) {
      setShowAttentionPage3(true);
      return;
    }

    // מעבר רגיל
    if (pageIndex === pages.length - 1) {
      onNext("AnimalAccidents"); // או המפה שלך
      return;
    }

    setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const prevPage = () => {
    // אם PayAttention מוצג, פשוט מסתירים אותו
    if (showAttentionPage2) {
      setShowAttentionPage2(false);
      return;
    }
    if (showAttentionPage3) {
      setShowAttentionPage3(false);
      return;
    }

    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  // ספירה בין 1 ל-2 בעמוד 2
  useEffect(() => {
    if (pageIndex !== 1) return;

    setSec("1");
    let currentSecond = 1;
    let ticks = 0; // ⬅️ חדש – סופר החלפות

    const interval = setInterval(() => {
      currentSecond = currentSecond === 1 ? 2 : 1;
      setSec(currentSecond.toString());

      ticks++; // ⬅️ חדש

      // ⬅️ אחרי מחזור אחד (1 → 2) פותחים את הכפתור
      if (ticks === 2 && !page2Unlocked) {
        setPage2Unlocked(true);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [pageIndex, page2Unlocked]);

  // טיפול ב-FlipCard – ספירת הפלפופים
  const handleCardFlip = () => {
    setFlippedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (pageIndex !== 2 || page3Unlocked) return;

    if (flippedCount === reasons.length && reasons.length > 0) {
      setShowAttentionPage3(true);
      setPage3Unlocked(true); // נפתח לתמיד
    }
  }, [flippedCount, pageIndex, reasons.length, page3Unlocked]);

  return (
    <div className="subject-container">
      <p className="title-subjects">{titleKeepingDistance}</p>

      {/* עמוד 1 */}
      {pageIndex === 0 && (
        <div className="page page1">
          <p className="sec-title-subjects">{pages[0].secTitle}</p>
          <ul className="distance-text">
            {[pages[0].text1, pages[0].text2].map((text, idx) =>
              text ? <li key={idx}>{text}</li> : null
            )}
          </ul>
          <img src={distanceImg} className="distanceImg" alt="distanceImg" />
        </div>
      )}

      {/* עמוד 2 */}
      {pageIndex === 1 && (
        <div className="page page2">
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
          {/* PayAttention */}
          {showAttentionPage2 && <PayAttention text={importantTextPage2} />}
        </div>
      )}

      {/* עמוד 3 */}
      {pageIndex === 2 && (
        <div className="page page3">
          <p className="sec-title-subjects">{pages[2].secTitle}</p>
          <p className="why-distance-text">{pages[2].text}</p>

          <div className="container-license-plate">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`card ${index % 2 === 0 ? "left" : "right"}`}
              >
                <FlipCard back={reason} onFlip={handleCardFlip} />
              </div>
            ))}
          </div>

          {/* PayAttention */}
          {showAttentionPage3 && <PayAttention text={importantTextPage3} />}
        </div>
      )}

      {/* ניווט */}
      <div className="nav-buttons">
        <button
          className="nav-button1"
          onClick={prevPage}
          disabled={
            pageIndex === 0 && !showAttentionPage2 && !showAttentionPage3
          }
        >
          {backBtn}
        </button>

        <button
          className="nav-button2"
          onClick={nextPage}
          disabled={pageIndex === 1 && !page2Unlocked}
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default KeepDistance;
