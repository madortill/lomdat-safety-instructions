import React, { useState } from "react";
import "../../style/home.css";
import Ximg from "../../assets/images/subjMap/Ximg.png";
import { useData } from "../../context/DataContext.jsx";
function Instractions() {
  const { data } = useData();
  const allText = data.instractions;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;


  return (
    <div>
      <div className="container-inst">
    <img className="X-img" src={Ximg} alt="Ximg" />
        <div className="text-container">
          <p className="inst-title">{allText[0].title}</p>
          <p className="text-inst">{allText[0].moveOn}</p>
          <div className="nav-buttons-img">
        <button
          className="back-button-img"
        >
         {backBtn}
        </button>

        <button
          className="next-button-img"
        >
          {nextBtn}
        </button>
      </div>
      <button
          className="back-button-img-anable"
        >
         {backBtn}
        </button>
          <p className="text-inst text-unable-btn">{allText[0].unable}</p>
          <p className="text-inst video-text">{allText[1].videos}</p>
          <p className="text-inst leng-text">
            <strong>{allText[2].boldLeng}</strong>
            {allText[2].leng}
          </p>
          <p className="text-inst">{allText[3].toMap}</p>
          <p className="text-inst">{allText[3].seeMap}</p>
          <p className="text-inst">
            <strong>{allText[4].boldNar}</strong>
            {allText[4].narration}
          </p>
          <p className="text-inst">{allText[4].anytime}</p>
        </div>
      </div>
    </div>
  );
}

export default Instractions;
