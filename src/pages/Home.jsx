// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import SubjMap from "./SubjMap";
import Instractions from "../components/subjects/Instractions";

// ← הוספתי את כל ה‐imports החדשים
import Introduction from "../components/subjects/Introduction";
import Roadside from "../components/subjects/Roadside";
import KeepingDistance from "../components/subjects/KeepingDistance";
import AnimalAccidents from "../components/subjects/AnimalAccidents";
import ChangingWheel from "../components/subjects/ChangingWheel";
import FireDrill from "../components/subjects/FireDrill";
import FlippingDrill from "../components/subjects/FlippingDrill";
import Practice from "../components/subjects/Practice";

import "../style/home.css";
import { useData } from "../context/DataContext.jsx";

function Home() {
  const { data } = useData();

  // סדר כל הנושאים במפה — כולל כולם
  const subjectsOrder = [
    "introduction",
    "roadside",
    "keepingDistance",
    "animalAccidents",
    "changingWheel",
    "fireDrill",
    "flippingDrill",
    "practice",
  ];

  // טקסטים לפתיחה/סגירה
  const openMapText = data.subjMap[2]["text-open"];
  const closeMapText = data.subjMap[2]["text-close"];

  const [closeInst, setCloseInst] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [currentSubject, setCurrentSubject] = useState("");
  const [unlockedSubjects, setUnlockedSubjects] = useState(["practice"]);
  const [highlightedSubject, setHighlightedSubject] = useState("introduction");
  const [hasEnteredFirstSubject, setHasEnteredFirstSubject] = useState(false);
  const [isOverlayMap, setIsOverlayMap] = useState(false);

  useEffect(() => {
    if (isOverlayMap) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [isOverlayMap]);

  // עובר אוטומטית לנושא הבא ומסמן אותו כפתוח
  const handleNext = (finishedSubject) => {
    const finished = finishedSubject ?? currentSubject;
    const currentIndex = subjectsOrder.indexOf(finished);
    const nextIndex = currentIndex + 1;
    const nextSubject = subjectsOrder[nextIndex];

    if (nextSubject) {
      setUnlockedSubjects((prev) => {
        if (!prev.includes(nextSubject)) {
          return [...prev, nextSubject];
        }
        return prev;
      });

      setHighlightedSubject(nextSubject);
    }

    setCurrentSubject(null);
    setShowMap(true);
    setIsOverlayMap(false);
  };

  const handleSelectSubject = (subjectId) => {
    setCurrentSubject(subjectId);
    setShowMap(false);
    setIsOverlayMap(false);
    setHasEnteredFirstSubject(true);
    setHighlightedSubject(subjectId);
  };

  const toggleOverlayMap = () => {
    setIsOverlayMap((prev) => {
      const next = !prev;
      if (next) setShowMap(false);
      return next;
    });
  };

  // הדגשה ראשונית של הצעד הראשון
  useEffect(() => {
    setHighlightedSubject("introduction");
  }, []);

  return (
    <div className="home-container">
      { closeInst === false && (
        <div>
      <div className="map-overlay"></div>
        <Instractions setCloseInst={setCloseInst} />
        </div>
      )}
      {hasEnteredFirstSubject && currentSubject && (
        <button className="toggle-map-btn" onClick={toggleOverlayMap}>
          {isOverlayMap ? closeMapText : openMapText}
        </button>
      )}

      {/* מפה רגילה */}
      {showMap && !isOverlayMap && (
        <div className="regular-map-container">
          <SubjMap
            onSelectSubject={handleSelectSubject}
            unlockedSubjects={unlockedSubjects}
            highlightedSubject={highlightedSubject}
          />
        </div>
      )}

      {/* תוכן הנושא */}
      <div
        className="subject-content"
        aria-hidden={isOverlayMap ? "true" : "false"}
      >
        {currentSubject === "introduction" && (
          <Introduction className="page" onNext={() => handleNext("introduction")} />
        )}

        {currentSubject === "roadside" && (
          <Roadside onNext={() => handleNext("roadside")} />
        )}

        {currentSubject === "keepingDistance" && (
          <KeepingDistance onNext={() => handleNext("keepingDistance")} />
        )}

        {currentSubject === "animalAccidents" && (
          <AnimalAccidents onNext={() => handleNext("animalAccidents")} />
        )}

        {currentSubject === "changingWheel" && (
          <ChangingWheel onNext={() => handleNext("changingWheel")} />
        )}

        {currentSubject === "fireDrill" && (
          <FireDrill onNext={() => handleNext("fireDrill")} />
        )}

        {currentSubject === "flippingDrill" && (
          <FlippingDrill onNext={() => handleNext("flippingDrill")} />
        )}

        {currentSubject === "practice" && (
          <Practice onNext={() => handleNext("practice")} />
        )}
      </div>

      {/* Overlay map */}
      {isOverlayMap && (
        <div className="map-overlay">
          <div className="overlay-background" onClick={toggleOverlayMap}></div>
          <div className="overlay-content" role="dialog" aria-modal="true">
            <div className="overlay-subjmap">
              <SubjMap
                onSelectSubject={(id) => {
                  setCurrentSubject(id);
                  setHighlightedSubject(id);
                  setIsOverlayMap(false);
                  setHasEnteredFirstSubject(true);
                }}
                unlockedSubjects={unlockedSubjects}
                highlightedSubject={highlightedSubject}
                overlayMode={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
