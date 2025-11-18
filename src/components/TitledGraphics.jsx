import React, { useState } from "react";
import { useData } from "../context/DataContext.jsx";
import "../style/TitledGraphics.css";

function TitledGraphics() {
  const { data } = useData();
  const [currGraphicSubj, setcurrGraphicSubj] = useState("roadside")

  const graphicText1 = data.titledGraphics[0][currGraphicSubj][0].text1;
  const graphicText2 = data.titledGraphics[0][currGraphicSubj][0].text2;
  const graphicText3 = data.titledGraphics[0][currGraphicSubj][0].text3;

  return (
    <div className="container-graphics">
      <div className="graphic1">
        <div className="div-text-graphic1">
          <p className="text-graphics">{graphicText1}</p>
        </div>
      </div>
      <div className="graphic2">
        <div className="div-text-graphic2">
          <p className="text-graphics">{graphicText2}</p>
        </div>
      </div>
      <div className="graphic3">
        <p className="div-text-graphic3">
          <p className="text-graphics">{graphicText3}</p>
        </p>
      </div>
    </div>
  );
}

export default TitledGraphics;
