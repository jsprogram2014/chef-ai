import "../css/main-section.css";
import React from "react";
import reactsvg from "../assets/react.svg";

export default function MainSection() {
  var ingredientsList = ["tomato", "coriander", "turmeric"];
  let [isIngredients, setIsIngredients] = React.useState(ingredientsList);

  const ingredientListHtml = isIngredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  function addIngredient(formData) {
    setIsIngredients((prev) => [...prev, formData.get("ingredient")]);
  }
  return (
    <div className="main-section">
      {/* <button onClick={handleClick}>Enter the Ingredients</button> */}

      <form action={addIngredient}>
        <input
          name="ingredient"
          type="text-box"
          defaultValue="tomato"
          placeholder="e.g tomato
        "
        />
        {/* <button>Enter the Ingredients</button> */}
        <button aria-label="messi">
          <img src={reactsvg}></img>
        </button>
      </form>

      <ul>{ingredientListHtml}</ul>
    </div>
  );
}
