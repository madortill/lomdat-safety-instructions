import React, { createContext, useContext, useState } from "react";
import myData from "../data/myData.json"; // כאן יהיו כל השפות

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [currentJSON, setCurrentJSON] = useState("he"); // ברירת מחדל: עברית

  const switchJSON = (key) => setCurrentJSON(key); // לדוגמה "en" או "he"

  return (
    <DataContext.Provider value={{ data: myData[currentJSON], switchJSON }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext); // hook נוח לשימוש
