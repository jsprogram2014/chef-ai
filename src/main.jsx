import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Ingredients from "./components/Ingredients.jsx";
import Header from "./components/Header.jsx";
import Contacter from "./components/Contacter.jsx";
import Random from "./components/Random.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Ingredients />
    {/* <Contacter />

    <Random /> */}
  </StrictMode>,
);
