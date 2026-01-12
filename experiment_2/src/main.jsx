import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SinglePageApp from "./components/Spa.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SinglePageApp />
  </StrictMode>
);
