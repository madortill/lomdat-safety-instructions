import React from "react";
import "../../style/introduction.css";
import myData from "../../data/myData.json";

function Introduction() {
  const titleIntro = myData.subjMap[3].text;
  const secTitleIntro = myData.introduction[0].text;

  return (
    <div className="intro-container">
      <p className="title-introduction">{titleIntro}</p>
      <div className="intro-page1"></div>
      <div className="intro-page2">
        <p className="sec-title-intro">{secTitleIntro}</p>
        <div className="sign-crash">
          <ul className="my-list">
            <li>deyged</li>
            <li>ghc</li>
            <li>dhdc</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
