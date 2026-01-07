import React, { useState } from "react";
import "../css/Question.css";

function Question({ question, onCorrect }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

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
      <h1 className="title-questionMultiple">מה לקוי בהתנהגות המפקד?</h1>

      <div className="div-mulQ">
        {[1, 2, 3, 4].map((id) => (
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
        ))}
      </div>
    </div>
  );
}

export default Question;
