import React, { useState } from "react";

function FireDrill({ onNext }) {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => setPageIndex((prev) => Math.min(prev + 1, 1));
  const prevPage = () => setPageIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="subject-container">
      {pageIndex === 0 && <div className="page1"><p>תוכן עמוד ראשון - שריפה ברכב</p></div>}
      {pageIndex === 1 && <div className="page2"><p>תוכן עמוד שני - דוגמאות ואיורים</p></div>}

      <div className="nav-buttons">
        <button className="nav-button1" onClick={prevPage} disabled={pageIndex === 0}>חזור</button>
        <button className="nav-button2" onClick={pageIndex === 1 ? () => onNext("FlippingDrill") : nextPage}>
          המשך
        </button>
      </div>
    </div>
  );
}

export default FireDrill;
