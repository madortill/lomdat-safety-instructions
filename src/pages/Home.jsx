import React, { useState } from "react";
import SubjMap from "./SubjMap";
import Introduction from "../components/subjects/Introduction";

function Home() {
  const [showMap, setShowMap] = useState(true); // עכשיו המפה תוצג אוטומטית
  const [currentSubject, setCurrentSubject] = useState("introduction");

  const handleSelectSubject = (subjectId) => {
    setCurrentSubject(subjectId);
    setShowMap(false);
  };

  const toggleMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <div className="home-container">
      {/* כפתור פתיחת / סגירת מפה */}
      <button className="toggle-map-btn" onClick={toggleMap}>
        {showMap ? "סגור מפה" : "פתח מפה"}
      </button>

      {/* אם המפה פתוחה – מציגים אותה */}
      {showMap && <SubjMap onSelectSubject={handleSelectSubject} />}

      {/* אם המפה סגורה – מציגים את הנושא הנבחר */}
      {!showMap && (
        <>
          {currentSubject === "introduction" && <Introduction />}
        </>
      )}
    </div>
  );
}

export default Home;
