import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </DataProvider>
  </StrictMode>
);
