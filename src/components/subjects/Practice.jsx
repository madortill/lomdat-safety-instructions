import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";
import "../../style/Question.css";
import Question from "../../components/Question";
import CarExercise from "../../components/CarExercise";

function Practice({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);

  const questions = data.Questions;
  const titlePractice = data.subjMap[9].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

  // כולל עמוד ריק נוסף
  const totalPages = questions.length + 1;

  const nextPage = () =>
    setPageIndex((prev) => Math.min(prev + 1, totalPages - 1));

  const prevPage = () =>
    setPageIndex((prev) => Math.max(prev - 1, 0));

  if (!questions || !questions.length) {
    return <div>טוען שאלות...</div>;
  }

  return (
    <div className="subject-container">
      <p className="title-subjects">{titlePractice}</p>

      {/* עמודי שאלות */}
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={`page page-${index}`}
          style={{ display: pageIndex === index ? "block" : "none" }}
        >
          <Question
            question={q}
            onCorrect={nextPage} // אם זו השאלה האחרונה → יעבור לעמוד הריק
          />
        </div>
      ))}

      {/* עמוד ריק אחרי השאלה האחרונה */}
      {pageIndex === questions.length && (
        <div className="page page-end"
        >
         <CarExercise className="carSvg" />
        </div>
      )}

      {/* ניווט */}
      <div className="nav-buttons">
        <button
          className="nav-button1"
          onClick={prevPage}
          disabled={pageIndex === 0}
        >
          {backBtn}
        </button>

        <button
          className="nav-button2"
          onClick={
            pageIndex === totalPages - 1
              ? () => onNext("Map")
              : nextPage
          }
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default Practice;
