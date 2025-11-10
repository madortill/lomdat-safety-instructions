import React, { useState } from "react";
import SubjMap from "./SubjMap";
import Introduction from "../components/subjects/Introduction";
import Roadside from "../components/subjects/Roadside";
import "../style/home.css";

function Home() {
  const [showMap, setShowMap] = useState(true);
  const [currentSubject, setCurrentSubject] = useState("introduction");
  const [unlockedSubjects, setUnlockedSubjects] = useState(["introduction"]);
  const [highlightedSubject, setHighlightedSubject] = useState("introduction");

  const subjectsOrder = ["introduction", "roadside", "lesson2", "lesson3"];

  // מעבר לנושא הבא
  const handleNext = () => {
    const currentIndex = subjectsOrder.indexOf(currentSubject);
    const nextSubject = subjectsOrder[currentIndex + 1];

    if (nextSubject) {
      // מוסיף את הנושא הבא לרשימת הנושאים הפתוחים
      setUnlockedSubjects((prev) => [...new Set([...prev, nextSubject])]);
      // מציב את הנושא הבא להדגשה (אנימציה)
      setHighlightedSubject(nextSubject);
      // חוזר למפה
      setShowMap(true);
      // מעדכן נושא נוכחי
      setCurrentSubject(nextSubject);
    }
  };

  const handleSelectSubject = (subjectId) => {
    setCurrentSubject(subjectId);
    setShowMap(false);
    setHighlightedSubject(subjectId);
  };

  return (
    <div className="home-container">
      <button className="toggle-map-btn" onClick={() => setShowMap(!showMap)}>
        {showMap ? "לסגירת המפה" : "למפת הנושאים"}
      </button>

      {showMap && (
        <SubjMap
          onSelectSubject={handleSelectSubject}
          unlockedSubjects={unlockedSubjects}
          highlightedSubject={highlightedSubject}
        />
      )}

      {!showMap && (
        <>
          {currentSubject === "introduction" && (
            <Introduction onNext={handleNext} />
          )}
          {currentSubject === "roadside" && (
            <Roadside onNext={handleNext} />
          )}
          {/* בהמשך אפשר להוסיף כאן עוד נושאים */}
        </>
      )}
    </div>
  );
}

export default Home;
