import React, { useState } from "react";
import "../style/Question.css";
import wheel1 from "../assets/images/practice/wheel1.png";
import wheel2 from "../assets/images/practice/wheel2.png";
import wheel3 from "../assets/images/practice/wheel3.png";
import wheel4 from "../assets/images/practice/wheel4.png";

function Question({ question, onCorrect }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const wheels = [wheel1, wheel2, wheel3, wheel4];
  // const [wheel, setWheel] = useState(wheel1)

  const handleClick = (id) => {
    if (locked) return;

    setSelected(id);

    if (id === question.correctAnswer) {
      setLocked(true);

      setTimeout(() => {
        setSelected(null);
        setLocked(false);
        onCorrect();
      }, 1000);
    }
  };

  return (
    <div id="american-questions">
      <p className="sec-title-subjects">{question.questionText}</p>

      <div className="div-mulQ">
        {[1, 2, 3, 4].map((id) => (
          <div className="buttons-container" key={id}>
            <img className="Wheel" src={wheels[id - 1]} alt={`wheel${id}`} />
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`pulse-button-hover
              ${
                selected === id
                  ? id === question.correctAnswer
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
            >
              {question[`ans${id}`]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
