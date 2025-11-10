import React from "react";
import "../../style/roadside.css";
import { useData } from "../../context/DataContext.jsx"; // קונטקסט של הנתונים

function Roadside({ onNext }) {
  const { data } = useData(); // ה-JSON הנוכחי לפי השפה

  const titleRoadside = data.subjMap[4].text;
  const contentRoadside = data.roadside; // כאן אפשר להוסיף את כל הטקסטים של Roadside לפי ה-JSON

  return (
    <div className="roadside-container">
      <p className="title-subjects">{titleRoadside}</p>

      {contentRoadside &&
        contentRoadside.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}

      {onNext && (
        <button className="next-btn-roadside" onClick={onNext}>
          הבא
        </button>
      )}
    </div>
  );
}

export default Roadside;
