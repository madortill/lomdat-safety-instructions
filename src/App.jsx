import { useState } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import { useData } from "./context/DataContext";
// import { useLocation } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage";
import Home from "./pages/Home";
import bahad6icon from "./assets/images/bahad6icon.png";
import screen from "./assets/images/screen.svg";
import til from "./assets/images/til.svg";
import EndScreen from "./pages/EndScreen";

function App() {
  const { isNarrationOn, toggleNarration } = useData();
  return (
    
    
    <div className="app">
      <div className="bahad-symbols">
        <img src={bahad6icon} alt="bahad6icon" className="bahad6" />
      </div>
      <button
        className={`narration-toggle floating ${isNarrationOn ? "on" : "off"}`}
        onClick={toggleNarration}
      >
        {isNarrationOn ? "🔊 קריינות" : "🔇 קריינות"}
      </button>

      <img src={screen} alt="screen" className="bg-container" />
      <img src={til} alt="til" className="til-logo" />
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/End" element={<EndScreen />} />

      </Routes>
    </div>
  );
}

export default App;
