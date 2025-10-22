import React from "react";
import progressCar from "../assets/images/subjMap/progressCar.png";
import "../style/SubjMap.css";

function SubjMap() {
  return (
    <>
      <div className="map-title-container">
        <p className="map-title">מפת נושאים</p>
        <p className="map-sec-title">לחצו על הנושא הרצוי!</p>
      </div>
      <div className="container-map">
        <img src={progressCar} alt="progressCar" className="progressCar" />
      </div>
    </>
  );
}

export default SubjMap;
