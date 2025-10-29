import React, { useState } from "react";
import progressCar from "../assets/images/subjMap/progressCar.png";
import "../style/SubjMap.css";
import myData from "../data/myData.json";

// טוען את כל תמונות הנושאים בצורה דינמית
const images = import.meta.glob("../assets/images/subjMap/subjects/*.png", {
  eager: true,
  import: "default",
});

function SubjMap({ onSelectSubject }) {
  const mapTitle = myData.subjMap[0].text;
  const microcopyMap = myData.subjMap[1].text;

  // נושאים שניתן ללחוץ עליהם (פתוחים)
  const [unlocked] = useState(["introduction"]);

  // מדלגים על 2 השורות הראשונות שהן טקסט בלבד
  const subjects = myData.subjMap.slice(2);

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
            const isUnlocked = unlocked.includes(item.id);
            const imgSrc = images[`../assets/images/subjMap/subjects/${item.img}.png`];

            return (
              <div
                key={item.id}
                className={`subjects ${isUnlocked ? "active" : "disabled"}`}
                // 💡 אם הנושא פתוח — לחיצה תפעיל את onSelectSubject
                onClick={() => {
                  if (isUnlocked && onSelectSubject) {
                    onSelectSubject(item.id);
                  }
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
