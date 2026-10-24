import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import Contacter from "./components/Contacter.jsx";
import FormNew from "./components/FormNew.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainSection />
    <Contacter />
    <FormNew />
  </StrictMode>,
);
