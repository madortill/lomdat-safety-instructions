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

  const titleKeepingDistance = data.subjMap[5].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  const pages = data.keepingDistance;
  const importantText = data.payAttention[0].twoSec;
  const importantText2 = data.payAttention[0].whyDistance;

  const reasons = [
    pages[2].reason1,
    pages[2].reason2,
    pages[2].reason3,
    pages[2].reason4,
    pages[2].reason5,
    pages[2].reason6,
    pages[2].reason7,
    pages[2].reason8,
  ];

  /* אנימציית ספירה */
  useEffect(() => {
    if (pageIndex !== 1) return;

    setSec("1");
    let currentSecond = 1;

    const interval = setInterval(() => {
      currentSecond = currentSecond === 1 ? 2 : 1;
      setSec(currentSecond.toString());
    }, 2000);

    setTimeout(() => setPage2Unlocked(true), 4000);

    return () => clearInterval(interval);
  }, [pageIndex]);

  /* ספירת קלפים */
  const handleCardFlip = () => {
    setFlippedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (flippedCount === reasons.length && reasons.length > 0) {
      setPage3Unlocked(true);
    }
  }, [flippedCount, reasons.length]);

  /* ניווט */
  const nextPage = () => {
    // עמוד 2 – קודם PayAttention
    if (pageIndex === 1 && page2Unlocked && !showAttentionPage2) {
      setShowAttentionPage2(true);
      return;
    }

    if (pageIndex === 1 && showAttentionPage2) {
      setShowAttentionPage2(false);
      setPageIndex(2);
      return;
    }

    // עמוד 3 – קודם PayAttention
    if (pageIndex === 2 && page3Unlocked && !showAttentionPage3) {
      setShowAttentionPage3(true);
      return;
    }

    if (pageIndex === 2 && showAttentionPage3) {
      onNext("AnimalAccidents");
      return;
    }

    setPageIndex((prev) => prev + 1);
  };

  const prevPage = () => {
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

  return (
    <div className="subject-container">
      <p className="title-subjects">{titleKeepingDistance}</p>

      {/* עמוד 1 */}
      {pageIndex === 0 && (
        <div className="page page1">
          <p className="sec-title-subjects">{pages[0].secTitle}</p>
          <ul className="distance-text">
            <li>{pages[0].text1}</li>
            <li>{pages[0].text2}</li>
          </ul>
          <img src={distanceImg} className="distanceImg" alt="" />
        </div>
      )}

      {/* עמוד 2 */}
      {pageIndex === 1 && (
        <div className="page page2">
          <p className="sec-title-subjects">{pages[1].secTitle}</p>

          <div className="animaition-container">
            <img src={carsAnimaitions} className="carsAnimaitions" alt="" />
            <img src={lightPole} className="lightPole" alt="" />
            <p className="text-sec">{sec} {pages[1].text}</p>
          </div>

          {showAttentionPage2 && <PayAttention text={importantText} />}
        </div>
      )}

      {/* עמוד 3 */}
      {pageIndex === 2 && (
        <div className="page page3">
          <p className="sec-title-subjects">{pages[2].secTitle}</p>
          <p className="why-distance-text">{pages[2].text}</p>

          <div className="container-license-plate">
            {reasons.map((reason, index) => (
              <FlipCard key={index} back={reason} onFlip={handleCardFlip} />
            ))}
          </div>

          {showAttentionPage3 && <PayAttention text={importantText2} />}
        </div>
      )}

      {/* ניווט */}
      <div className="nav-buttons">
        <button className="nav-button1" onClick={prevPage}>
          {backBtn}
        </button>

        <button
          className="nav-button2"
          onClick={nextPage}
          disabled={
            (pageIndex === 1 && !page2Unlocked) ||
            (pageIndex === 2 && !page3Unlocked)
          }
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default KeepDistance;
