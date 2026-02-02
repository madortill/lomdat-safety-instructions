import React, { createContext, useContext, useState } from "react";
import myData from "../data/myData.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [currentJSON, setCurrentJSON] = useState("he"); // ברירת מחדל: עברית

  const switchJSON = (key) => {
    setCurrentJSON(key);
  };

  return (
    <DataContext.Provider
      value={{
        data: myData[currentJSON],
        switchJSON,
        currentJSON
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
