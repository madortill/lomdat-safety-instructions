import React, { useState, useEffect } from "react";
import { useData } from "../context/DataContext.jsx";
import "../style/rocks.css";
import PayAttention from "../components/PayAttention";
import rock1 from "../assets/images/rocks/rock1.png";
import rock2 from "../assets/images/rocks/rock2.png";
import rock3 from "../assets/images/rocks/rock3.png";
import rock4 from "../assets/images/rocks/rock4.png";
import rock5 from "../assets/images/rocks/rock5.png";
import vi from "../assets/images/rocks/vi.png";

function Rocks({ onAllRocksClicked }) {
  const { data } = useData();
  const rock1Text = data.roadside[6].highlight1;
  const rock2Text = data.roadside[6].highlight2;
  const rock3Text = data.roadside[6].highlight3;
  const rock4Text = data.roadside[6].highlight4;
  const rock5Text = data.roadside[6].highlight5;

  const importantText = data.payAttention[0].roadside; 
  // או intro לפי מה שיש לך בג׳יסון

  const [selectedRock, setSelectedRock] = useState(null);
  const [clickedRocks, setClickedRocks] = useState([]);
  const [showAttention, setShowAttention] = useState(false);

  const handleRockClick = (rockNumber) => {
    setSelectedRock(rockNumber);

    if (!clickedRocks.includes(rockNumber)) {
      const updated = [...clickedRocks, rockNumber];
      setClickedRocks(updated);

      // אם כל האבנים נלחצו →
      if (updated.length === 5) {
        setShowAttention(true);

        // טיימר של 10 שניות
        setTimeout(() => {
          setShowAttention(false);
          onAllRocksClicked && onAllRocksClicked();
        }, 6000);
      }
    }
  };

  return (
    <>
      {/* האבנים הקטנות */}
      <div className="all-rocks">
        <div className="container-rock1" onClick={() => handleRockClick(1)}>
          <img
            src={rock1}
            className={`rock rock1 ${selectedRock === 1 ? "selected" : ""}`}
            alt="rock1"
          />
          {clickedRocks.includes(1) && <img src={vi} className="vi1" alt="vi" />}
        </div>

        <div className="container-rock2" onClick={() => handleRockClick(2)}>
          <img
            src={rock2}
            className={`rock rock2 ${selectedRock === 2 ? "selected" : ""}`}
            alt="rock2"
          />
          {clickedRocks.includes(2) && <img src={vi} className="vi2" alt="vi" />}
        </div>

        <div className="container-rock3" onClick={() => handleRockClick(3)}>
          <img
            src={rock3}
            className={`rock rock3 ${selectedRock === 3 ? "selected" : ""}`}
            alt="rock3"
          />
          {clickedRocks.includes(3) && <img src={vi} className="vi3" alt="vi" />}
        </div>

        <div className="container-rock4" onClick={() => handleRockClick(4)}>
          <img
            src={rock4}
            className={`rock rock4 ${selectedRock === 4 ? "selected" : ""}`}
            alt="rock4"
          />
          {clickedRocks.includes(4) && <img src={vi} className="vi4" alt="vi" />}
        </div>

        <div className="container-rock5" onClick={() => handleRockClick(5)}>
          <img
            src={rock5}
            className={`rock rock5 ${selectedRock === 5 ? "selected" : ""}`}
            alt="rock5"
          />
          {clickedRocks.includes(5) && <img src={vi} className="vi5" alt="vi" />}
        </div>
      </div>

      {/* האבנים הגדולות */}
      <div className="middle-rocks">
        {selectedRock === 1 && (
          <div className="big-rock1">
            <p className="text-rocks text-rock1">{rock1Text}</p>
          </div>
        )}
        {selectedRock === 2 && (
          <div className="big-rock2">
            <p className="text-rocks text-rock2">{rock2Text}</p>
          </div>
        )}
        {selectedRock === 3 && (
          <div className="big-rock3">
            <p className="text-rocks text-rock3">{rock3Text}</p>
          </div>
        )}
        {selectedRock === 4 && (
          <div className="big-rock4">
            <p className="text-rocks text-rock4">{rock4Text}</p>
          </div>
        )}
        {selectedRock === 5 && (
          <div className="big-rock5">
            <p className="text-rocks text-rock5">{rock5Text}</p>
          </div>
        )}
      </div>

      {/* מופיע רק אחרי שכל האבנים נפתחו */}
      {showAttention && <PayAttention text={importantText} />}
    </>
  );
}

export default Rocks;
