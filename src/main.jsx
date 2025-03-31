import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AlertsProvider from "./Context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AlertsProvider>
        <App />
      </AlertsProvider>
    </BrowserRouter>
  </StrictMode>
);
