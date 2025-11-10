import React from "react";
import progressCar from "../assets/images/subjMap/progressCar.png";
import "../style/subjMap.css";
import myData from "../data/myData.json";

const images = import.meta.glob("../assets/images/subjMap/subjects/*.png", {
  eager: true,
  import: "default",
});

function SubjMap({ onSelectSubject, unlockedSubjects, highlightedSubject }) {
  const mapTitle = myData.subjMap[0].text;
  const microcopyMap = myData.subjMap[1].text;
  const subjects = myData.subjMap.slice(3);

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
                className={`subjects ${
                  isUnlocked ? "active" : "disabled"
                } ${isHighlighted ? "pop-animation" : ""}`}
                onClick={() => {
                  if (isUnlocked) onSelectSubject(item.id);
                }}
                style={{ cursor: isUnlocked ? "pointer" : "not-allowed" }}
              >
                <img
                  src={imgSrc}
                  className={`subject ${item.id}`}
                  alt={item.text}
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
