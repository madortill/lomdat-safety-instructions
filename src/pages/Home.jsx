import React, { useState, useEffect } from "react";
import SubjMap from "./SubjMap";
import Introduction from "../components/subjects/Introduction";
import Roadside from "../components/subjects/Roadside";
import "../style/home.css";
import { useData } from "../context/DataContext.jsx"; // קונטקסט

function Home() {
  const { data } = useData(); // כאן מקבלים את ה-JSON הנוכחי

  const subjectsOrder = ["introduction", "roadside", "lesson2", "lesson3"];
  const openMapText = data.subjMap[2]["text-open"];
  const closeMapText = data.subjMap[2]["text-close"];

  const [showMap, setShowMap] = useState(true);
  const [currentSubject, setCurrentSubject] = useState("introduction");
  const [unlockedSubjects, setUnlockedSubjects] = useState(["introduction"]);
  const [highlightedSubject, setHighlightedSubject] = useState("introduction");

  // כאשר נלחץ "הבא" בתוך נושא
  const handleNext = () => {
    const currentIndex = subjectsOrder.indexOf(currentSubject);
    const nextIndex = currentIndex + 1;
    const nextSubject = subjectsOrder[nextIndex];

    if (nextSubject) {
      // מוסיף את הנושא הבא לרשימת הנושאים הפתוחים
      setUnlockedSubjects((prev) => [...new Set([...prev, nextSubject])]);

      // מעדכן את הנושא הבא להדגשה
      setHighlightedSubject(nextSubject);

      // חוזר למפה
      setShowMap(true);

      // עדכון נושא נוכחי
      setCurrentSubject(nextSubject);
    }
  };

  // כאשר נבחר נושא מהמפה
  const handleSelectSubject = (subjectId) => {
    setCurrentSubject(subjectId);
    setShowMap(false);
    // לא מעדכנים highlightedSubject כדי שהנושא הבא עדיין ידליק אנימציה
  };

  // וודא שהנושא הראשון תמיד מואר מהכניסה
  useEffect(() => {
    setHighlightedSubject("introduction");
  }, []);

  return (
    <div className="home-container">
      <button className="toggle-map-btn" onClick={() => setShowMap(!showMap)}>
        {showMap ? closeMapText : openMapText}
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
          {currentSubject === "roadside" && <Roadside onNext={handleNext} />}
          {/* כאן אפשר להוסיף עוד נושאים */}
        </>
      )}
    </div>
  );
}

export default Home;
