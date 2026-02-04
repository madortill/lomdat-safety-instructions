import React from "react";
import progressCar from "../assets/images/subjMap/progressCar.png";
import "../style/subjMap.css";
import { useData } from "../context/DataContext.jsx";

// טעינת תמונות הנושאים דינמית
const images = import.meta.glob(
  "../assets/images/subjMap/subjects/*.png",
  { eager: true, import: "default" }
);

function SubjMap({ onSelectSubject, unlockedSubjects, highlightedSubject }) {
  const { data } = useData();

  const mapTitle = data.subjMap[0].text;
  const microcopyMap = data.subjMap[1].text;

  // רשימת הנושאים (מדלגים על כותרות)
  const subjects = data.subjMap.slice(3);

  // 🎉 עידוד
  const encouragementArr = data.encouragement[0];
  const encouragementTexts = Object.values(encouragementArr);

  const completedCount = unlockedSubjects.length - 1;
  const showEncouragement = unlockedSubjects.length >= 2;

  const encouragementText = showEncouragement
    ? encouragementTexts[
        (completedCount - 1) % encouragementTexts.length
      ]
    : "";

  return (
    <>
      {/* כותרות */}
      <div className="map-title-container">
        <p className="map-title">{mapTitle}</p>
        <p className="map-sec-title">{microcopyMap}</p>
      </div>

      <div className="container-map">
        <img
          src={progressCar}
          alt="progress car"
          className="progressCar"
        />

        {/* נושאים */}
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
                style={{ opacity: isUnlocked ? 1 : 0.5 }}
              >
                <img
                  src={imgSrc}
                  alt={item.text}
                  className={`subject ${item.id} ${
                    isHighlighted ? "pop-animation" : ""
                  }`}
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

        {/* 🎯 עידוד */}
        {showEncouragement && (
          <p key={completedCount} className="encouragement">
            {encouragementText}
          </p>
        )}
      </div>
    </>
  );
}

export default SubjMap;
