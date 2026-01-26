import React, { useState } from "react";
import { useData } from "../context/DataContext.jsx";
import "../style/TitledGraphics.css";

function TitledGraphics({ subject = "roadside" }) {
  const { data } = useData();

  const graphicText1 = data.titledGraphics[0][subject][0].text1;
  const graphicText2 = data.titledGraphics[0][subject][0].text2;
  const graphicText3 = data.titledGraphics[0][subject][0].text3;

  return (
    <div className="container-graphics">
      <div className={`graphic1 ${subject}-1`}>
        <div className="div-text-graphic1">
          <p className="text-graphics">{graphicText1}</p>
        </div>
      </div>
      <div className={`graphic2 ${subject}-2`}>
        <div className="div-text-graphic2">
          <p className="text-graphics">{graphicText2}</p>
        </div>
      </div>
      <div className={`graphic3 ${subject}-3`}>
        <div className="div-text-graphic3">
          <p className="text-graphics">{graphicText3}</p>
        </div>
      </div>
    </div>
  );
}

export default TitledGraphics;
