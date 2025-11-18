import { useState } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage";
import Home from "./pages/Home";
import bahad6icon from "./assets/images/bahad6icon.png";
import screen from "./assets/images/screen.svg";
import til from "./assets/images/til.svg";

function App() {
  // const location = useLocation();
  // const currentPath = location.pathname;
  const [page, setPage] = useState(1);
  const [unlocked, setUnlocked] = useState(["introduction"]);

  return (
    
    <div className="app">
      <div className="bahad-symbols">
        <img src={bahad6icon} alt="bahad6icon" className="bahad6" />
      </div>

      <img src={screen} alt="screen" className="bg-container" />
      <img src={til} alt="til" className="til-logo" />

      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
