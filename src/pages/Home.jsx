import React, { useState, useEffect } from "react";
import SubjMap from "./SubjMap";
import Introduction from "../components/subjects/Introduction";
import Roadside from "../components/subjects/Roadside";
import "../style/home.css";
import { useData } from "../context/DataContext.jsx";

function Home() {
  const { data } = useData();

  const subjectsOrder = ["introduction", "roadside", "lesson2", "lesson3"];
  const openMapText = data.subjMap[2]["text-open"];
  const closeMapText = data.subjMap[2]["text-close"];

  const [showMap, setShowMap] = useState(true);
  const [currentSubject, setCurrentSubject] = useState(null);
  const [unlockedSubjects, setUnlockedSubjects] = useState(["introduction"]);
  const [highlightedSubject, setHighlightedSubject] = useState("introduction");
  const [hasEnteredFirstSubject, setHasEnteredFirstSubject] = useState(false);
  const [isOverlayMap, setIsOverlayMap] = useState(false);

  // מניעת גלילה כשעוברליי פתוח
  useEffect(() => {
    if (isOverlayMap) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOverlayMap]);

  const handleNext = () => {
    const currentIndex = subjectsOrder.indexOf(currentSubject);
    const nextIndex = currentIndex + 1;
    const nextSubject = subjectsOrder[nextIndex];

    if (nextSubject) {
      setUnlockedSubjects((prev) => [...new Set([...prev, nextSubject])]);
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
  };

  const toggleOverlayMap = () => {
    // כשפותחים עוברליי, ודא שהמפה הרגילה מוסתרת (showMap false)
    setIsOverlayMap((prev) => {
      const next = !prev;
      if (next) setShowMap(false);
      return next;
    });
  };

  useEffect(() => {
    setHighlightedSubject("introduction");
  }, []);

  return (
    <div className="home-container">
      {/* כפתור פתיחה/סגירה – רק אחרי שנכנסו פעם ראשונה לנושא */}
      {hasEnteredFirstSubject && currentSubject && (
        <button className="toggle-map-btn" onClick={toggleOverlayMap}>
          {isOverlayMap ? closeMapText : openMapText}
        </button>
      )}

      {/* מפה רגילה (עמוד פתיחה או אחרי סיום נושא) */}
      {showMap && !isOverlayMap && (
        <div className="regular-map-container">
          <SubjMap
            onSelectSubject={handleSelectSubject}
            unlockedSubjects={unlockedSubjects}
            highlightedSubject={highlightedSubject}
          />
        </div>
      )}

      {/* תוכן הנושא עטוף ככה שיהיה מתחת ל-overlay */}
      <div className="subject-content" aria-hidden={isOverlayMap ? "true" : "false"}>
        {currentSubject === "introduction" && (
          <Introduction onNext={handleNext} />
        )}
        {currentSubject === "roadside" && <Roadside onNext={handleNext} />}
      </div>

      {/* overlay — תמיד ב־DOM אחרי התוכן, z-index גבוה מאוד */}
      {isOverlayMap && (
        <div className="map-overlay">
          <div className="overlay-background" onClick={toggleOverlayMap}></div>

          <div className="overlay-content" role="dialog" aria-modal="true">
            {/* כאן נעזוב את הכותרות/התיאורים החיצוניים של ה־SubjMap –
                אם ל־SubjMap יש props לשלוט במה להציג (כותרות וכו'), העבירי prop מתאים, למשל compactMode */}
            <div className="overlay-subjmap">
              <SubjMap
                onSelectSubject={(id) => {
                  // אם בוחרים נושא מתוך ה-overlay: נסגור אותו ונפתח את הנושא
                  setCurrentSubject(id);
                  setIsOverlayMap(false);
                  setHasEnteredFirstSubject(true);
                }}
                unlockedSubjects={unlockedSubjects}
                highlightedSubject={highlightedSubject}
                overlayMode={true} // אם תרצי לשלוט בתוך SubjMap על מה להסתיר (כותרות)
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
