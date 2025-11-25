import React from "react";
import progressCar from "../assets/images/subjMap/progressCar.png";
import "../style/subjMap.css";
import { useData } from "../context/DataContext.jsx"; // קונטקסט

// טעינת תמונות הנושאים דינמית
const images = import.meta.glob("../assets/images/subjMap/subjects/*.png", {
  eager: true,
  import: "default",
});

function SubjMap({ onSelectSubject, unlockedSubjects, highlightedSubject }) {
  const { data } = useData(); // כאן מקבלים את ה-JSON הנוכחי

  const mapTitle = data.subjMap[0].text;
  const microcopyMap = data.subjMap[1].text;

  // כל הנושאים
  const subjects = data.subjMap.slice(3);

  return (
    <>
      <div className="map-title-container">
        <p className="map-title">{mapTitle}</p>
        <p className="map-sec-title">{microcopyMap}</p>
      </div>

      <div className="container-map">
        <img src={progressCar} alt="progressCar" className="progressCar" />

        <div className="subjects-wrapper">
          {subjects.map((item) => {
            const isUnlocked = unlockedSubjects.includes(item.id);
            const isHighlighted = item.id === highlightedSubject;

            const imgSrc =
              images[`../assets/images/subjMap/subjects/${item.img}.png`];

            return (
              <div
                key={item.id}
                className={`subjects ${isUnlocked ? "active" : "disabled"}`}
                style={{
                  opacity: isUnlocked ? 1 : 0.5,
                  transition: "opacity 0.3s",
                  cursor: "default",
                }}
              >
                <img
                  src={imgSrc}
                  className={`subject ${item.id} ${isHighlighted ? "pop-animation" : ""}`}
                  alt={item.text}
                  onClick={() => {
                    if (isUnlocked && onSelectSubject) {
                      onSelectSubject(item.id);
                    }
                  }}
                  style={{
                    cursor: isUnlocked ? "pointer" : "not-allowed",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SubjMap;
