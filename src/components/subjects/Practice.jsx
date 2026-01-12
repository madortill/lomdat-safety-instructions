import React, { useState } from "react";
// import "../../style/practice.css";
import { useData } from "../../context/DataContext.jsx";
import Question from "../../components/Question";

function Practice({ onNext }) {
  const { data } = useData();
  const [pageIndex, setPageIndex] = useState(0);

  const questions = data.Questions;
  const titlePractice = data.subjMap[9].text; // או האינדקס הרלוונטי
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;

  const nextPage = () =>
    setPageIndex((prev) => Math.min(prev + 1, questions.length - 1));

  const prevPage = () =>
    setPageIndex((prev) => Math.max(prev - 1, 0));

  // הגנה – אם הדאטה עוד לא מוכן
  if (!questions || !questions.length) {
    return <div>טוען שאלות...</div>;
  }

  return (
    <div className="subject-container">
      {/* כותרת ראשית */}
      <p className="title-subjects">{titlePractice}</p>

      {/* עמודים – כל עמוד שאלה */}
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={`page page-${index}`}
          style={{ display: pageIndex === index ? "block" : "none" }}
        >
          <Question
            question={q}
            onCorrect={nextPage}
          />
        </div>
      ))}

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
            pageIndex === questions.length - 1
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
