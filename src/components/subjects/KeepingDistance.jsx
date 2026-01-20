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

  // עמוד 2
  const [sec, setSec] = useState("1");
  const [page2Unlocked, setPage2Unlocked] = useState(false);
  const [showAttentionPage2, setShowAttentionPage2] = useState(false);

  // עמוד 3
  const [flippedCount, setFlippedCount] = useState(0);
  const [page3Unlocked, setPage3Unlocked] = useState(false);
  const [showAttentionPage3, setShowAttentionPage3] = useState(false);

  const pages = data.keepingDistance;
  const title = data.subjMap[5].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

  const importantTextPage2 = data.payAttention[0].twoSec;
  const importantTextPage3 = data.payAttention[0].whyDistance;

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

  /* ---------------- ניווט קדימה ---------------- */
  const nextPage = () => {
    // עמוד 2 – קודם PayAttention
    if (pageIndex === 1 && !showAttentionPage2) {
      setShowAttentionPage2(true);
      return;
    }

    // עמוד 3 – קודם PayAttention
    if (pageIndex === 2 && page3Unlocked && !showAttentionPage3) {
      setShowAttentionPage3(true);
      return;
    }

    // עמוד אחרון
    if (pageIndex === pages.length - 1) {
      onNext("AnimalAccidents");
      return;
    }

    setPageIndex((prev) => prev + 1);
  };

  /* ---------------- ניווט אחורה ---------------- */
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

  /* ---------------- אנימציית 1–2 בעמוד 2 ---------------- */
  useEffect(() => {
    if (pageIndex !== 1) return;

    let current = 1;
    let ticks = 0;

    const interval = setInterval(() => {
      current = current === 1 ? 2 : 1;
      setSec(current.toString());
      ticks++;

      if (ticks === 2) {
        setPage2Unlocked(true);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [pageIndex]);

  /* ---------------- טיפול בכרטיסים ---------------- */
  const handleCardFlip = () => {
    setFlippedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (pageIndex !== 2) return;

    if (flippedCount === reasons.length && reasons.length > 0) {
      setPage3Unlocked(true);
    }
  }, [flippedCount, pageIndex, reasons.length]);

  return (
    <div className="subject-container">
      <p className="title-subjects">{title}</p>

      {/* -------- עמוד 1 -------- */}
      {pageIndex === 0 && (
        <div className="page page1">
          <p className="sec-title-subjects">{pages[0].secTitle}</p>
          <ul className="distance-text">
            {[pages[0].text1, pages[0].text2].map(
              (text, i) => text && <li key={i}>{text}</li>
            )}
          </ul>
          <img src={distanceImg} className="distanceImg" alt="" />
        </div>
      )}

      {/* -------- עמוד 2 -------- */}
      {pageIndex === 1 && (
        <div className="page page2">
          <p className="sec-title-subjects">{pages[1].secTitle}</p>

          <div className="animaition-container">
            <img src={carsAnimaitions} className="carsAnimaitions" alt="" />
            <img src={lightPole} className="lightPole" alt="" />
            <p className="text-sec">
              {sec} {pages[1].text}
            </p>
          </div>

          {showAttentionPage2 && (
            <PayAttention text={importantTextPage2} />
          )}
        </div>
      )}

      {/* -------- עמוד 3 -------- */}
      {pageIndex === 2 && (
        <div className="page page3">
          <p className="sec-title-subjects">{pages[2].secTitle}</p>
          <p className="why-distance-text">{pages[2].text}</p>
          <p className="scroll-text">{pages[2].scroll}</p>
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

          {showAttentionPage3 && (
            <PayAttention text={importantTextPage3} />
          )}
        </div>
      )}

      {/* -------- ניווט -------- */}
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
