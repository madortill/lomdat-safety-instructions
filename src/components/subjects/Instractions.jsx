import React, { useState } from "react";
import "../../style/home.css";
import Ximg from "../../assets/images/subjMap/Ximg.png";
import play from "../../assets/images/subjMap/play.png";
import pause from "../../assets/images/subjMap/pause.png";
import sound from "../../assets/images/subjMap/sound.png";
import noSound from "../../assets/images/subjMap/noSound.png";
import { useData } from "../../context/DataContext.jsx";

function Instractions({ setCloseInst }) {
  const { data, switchJSON, currentJSON } = useData();

  const allText = data.instractions;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  const openMapText = data.subjMap[2]["text-open"];

  const [soundHighlight, setSoundHighlight] = useState("");

  const highlightSound = (e) => {
    setSoundHighlight(e.target.id);
  };

  const toggleLanguage = () => {
    switchJSON(currentJSON === "he" ? "en" : "he");
  };

  return (
    <div>
      <div className="container-inst">
        <img
          className="X-img"
          src={Ximg}
          alt="Ximg"
          onClick={() => setCloseInst(true)}
        />

        <div className="text-container">
          <p className="inst-title">{allText[0].title}</p>
          <p className="text-inst">{allText[0].moveOn}</p>

          {/* כפתורי ניווט */}
          <div className="nav-buttons-img">
            <button className="back-button-img">{backBtn}</button>
            <button className="next-button-img">{nextBtn}</button>
          </div>

          <button className="back-button-img-anable">{backBtn}</button>
          <p className="text-inst text-unable-btn">{allText[0].unable}</p>

          {/* וידאו */}
          <p className="text-inst video-text">{allText[1].videos}</p>
          <div className="img-video">
            <div className="text-img-video">
              <img className="icon-video" src={play} alt="play" />
              <p className="text-inst text-icon-video">{allText[1].play}</p>
            </div>
            <div className="text-img-video">
              <img className="icon-video" src={pause} alt="pause" />
              <p className="text-inst text-icon-video">{allText[1].pause}</p>
            </div>
          </div>

          {/* החלפת שפה */}
          <p className="text-inst leng-text">
            <strong>{allText[2].boldLeng}</strong>
            {allText[2].leng}
          </p>

          <button className="change-leng-btn" onClick={toggleLanguage}>
            <p className="change-leng-text">
              {currentJSON === "he" ? "EN" : "עב"}
            </p>
          </button>

          {/* מפת נושאים */}
          <p className="text-inst map-text1">{allText[3].toMap}</p>
          <button className="map-btn">{openMapText}</button>
          <p className="text-inst map-text2">{allText[3].seeMap}</p>

          {/* קריינות */}
          <p className="text-inst">{allText[4].anytime}</p>
            </div>
          </div>

         
        </div>
  );
}

export default Instractions;
