import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainSection />
  </StrictMode>,
);
