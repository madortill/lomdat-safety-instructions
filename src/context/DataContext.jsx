import React, { createContext, useContext, useRef, useState } from "react";
import myData from "../data/myData.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // 🌍 שפה – כמו אצלך
  const [currentJSON, setCurrentJSON] = useState("he");

  // 🔊 קריינות (עברית בלבד)
  const [isNarrationOn, setIsNarrationOn] = useState(true);
  const audioRef = useRef(null);

  // שינוי שפה – כמו שהיה
  const switchJSON = (key) => {
    setCurrentJSON(key);

    // אם יוצאים מעברית → מכבים קריינות
    if (key !== "he") {
      setIsNarrationOn(false);
      stopAudio();
    }
  };

  // הדלקה / כיבוי קריינות (רק בעברית)
  const toggleNarration = () => {
    if (currentJSON !== "he") return; // 🔒 אין קריינות באנגלית
    setIsNarrationOn((prev) => !prev);
    stopAudio();
  };

  // ▶️ ניגון אודיו (רק בעברית)
  const playAudio = (src) => {
    if (!isNarrationOn || currentJSON !== "he" || !src) return;

    stopAudio();

    const audio = new Audio(src);
    audioRef.current = audio;
    audio.play();
  };

  // ⏹️ עצירת אודיו
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <DataContext.Provider
      value={{
        data: myData[currentJSON],
        currentJSON,
        switchJSON,

        // קריינות
        isNarrationOn,
        toggleNarration,
        playAudio,
        stopAudio,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
