import React, { useState } from "react";

function FlipCardTools({ x, y, width, height, children, flipText, onFlip }) {
  const [flipped, setFlipped] = useState(false);
  const [counted, setCounted] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);

    if (!counted) {
      setCounted(true);
      onFlip?.();
    }
  };

  return (
    <g onClick={handleClick} style={{ cursor: "pointer" }}>
      {/* צד קדמי */}
      <g
        style={{
          transition: "opacity 0.5s",
          opacity: flipped ? 0 : 1,
        }}
      >
        {children}
      </g>

      {/* צד אחורי */}
      <g
        style={{
          transition: "opacity 0.5s",
          opacity: flipped ? 1 : 0,
        }}
      >
        <rect x={x} y={y} width={width} height={height} rx="9" fill="#889BA6" />

        <foreignObject x={x} y={y} width={width} height={height}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "10px",
              boxSizing: "border-box",
              wordWrap: "break-word",
              overflow: "hidden",
            }}
          >
            {flipText}
          </div>
        </foreignObject>
      </g>
    </g>
  );
}

export default FlipCardTools;
