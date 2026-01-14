import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";
import "../../style/Question.css";
import Question from "../../components/Question";
import CarExercise from "../../components/CarExercise";

function Practice() {
  const { data } = useData();
  const navigate = useNavigate();

  const [pageIndex, setPageIndex] = useState(0);
  const [answeredCorrect, setAnsweredCorrect] = useState({});
  const [clickedPoints, setClickedPoints] = useState(0);
  const [showNextDiv, setShowNextDiv] = useState(false);

  const questions = data.Questions;
  const pages = data.practice;
  const titlePractice = data.subjMap[10].text;
  const nextBtn = data.buttons[0].text;
  const backBtn = data.buttons[1].text;
  const moveOnDiv = data.practice[1].moveOnText;
  const toEndBtn = data.practice[1].ans1;
  const stayBtn = data.practice[1].ans2;

  const totalPages = questions.length + 1;

  const nextPage = () => {
    setPageIndex((prev) => {
      const next = Math.min(prev + 1, totalPages - 1);
      if (next === questions.length) setClickedPoints(0);
      return next;
    });
  };

  const prevPage = () => setPageIndex((prev) => Math.max(prev - 1, 0));

  const handlePointClick = () =>
    setClickedPoints((prev) => Math.min(prev + 1, 3));

  const handleNextClick = () => setShowNextDiv(true);

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
            onCorrect={() =>
              setAnsweredCorrect((prev) => ({ ...prev, [index]: true }))
            }
          />
        </div>
      ))}

      {/* עמוד אחרון */}
      {pageIndex === questions.length && (
        <div className="page page-end">
          <p className="sec-title-subjects">{pages[0].secTitle}</p>
          <CarExercise onPointClick={handlePointClick} />
        </div>
      )}

      {/* overlay */}
      {showNextDiv && (
        <div className="overlay">
          <div className="container-next">
            <p>{moveOnDiv}</p>
            <div className="container-next-buttons">
              <button onClick={() => setShowNextDiv(false)}>{stayBtn}</button>
              <button
                onClick={() => {
                  // שליפת נתונים מ-localStorage
                  const name = localStorage.getItem("name") || "";
                  const personalNumber =
                    localStorage.getItem("personalNumber") || "";
                  navigate("/End", { state: { name, personalNumber } });
                }}
              >
                {toEndBtn}
              </button>
            </div>
          </div>
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
          disabled={
            (pageIndex < questions.length && !answeredCorrect[pageIndex]) ||
            (pageIndex === questions.length && clickedPoints < 3)
          }
          onClick={pageIndex === totalPages - 1 ? handleNextClick : nextPage}
        >
          {nextBtn}
        </button>
      </div>
    </div>
  );
}

export default Practice;
