import React, { useState } from "react";
import { useData } from "../context/DataContext.jsx";
import "../style/rocks.css";
import rock1 from "../assets/images/rocks/rock1.png";
import rock2 from "../assets/images/rocks/rock2.png";
import rock3 from "../assets/images/rocks/rock3.png";
import rock4 from "../assets/images/rocks/rock4.png";
import rock5 from "../assets/images/rocks/rock5.png";
import vi from "../assets/images/rocks/vi.png";

function Rocks({ onAllRocksClicked }) {
  const { data } = useData();

  const rockTexts = [
    data.roadside[6].highlight1,
    data.roadside[6].highlight2,
    data.roadside[6].highlight3,
    data.roadside[6].highlight4,
    data.roadside[6].highlight5,
  ];

  const rocks = [rock1, rock2, rock3, rock4, rock5];

  const [selectedRock, setSelectedRock] = useState(null);
  const [clickedRocks, setClickedRocks] = useState([]);

  const handleRockClick = (rockNumber) => {
    setSelectedRock(rockNumber);

    if (!clickedRocks.includes(rockNumber)) {
      const updated = [...clickedRocks, rockNumber];
      setClickedRocks(updated);

      if (updated.length === 5) {
        onAllRocksClicked && onAllRocksClicked();
      }
    }
  };

  return (
    <>
      {/* אבנים קטנות */}
      <div className="all-rocks">
        {rocks.map((rock, index) => {
          const rockNum = index + 1;
          return (
            <div
              key={rockNum}
              className={`container-rock${rockNum}`}
              onClick={() => handleRockClick(rockNum)}
            >
              <img
                src={rock}
                className={`rock rock${rockNum} ${
                  selectedRock === rockNum ? "selected" : ""
                }`}
                alt={`rock${rockNum}`}
              />
              {clickedRocks.includes(rockNum) && (
                <img src={vi} className={`vi${rockNum}`} alt="vi" />
              )}
            </div>
          );
        })}
      </div>

      {/* אבן גדולה */}
      <div className="middle-rocks">
        {selectedRock && (
          <div className={`big-rock${selectedRock}`}>
            <p className={`text-rocks text-rock${selectedRock}`}>
              {rockTexts[selectedRock - 1]}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Rocks;
