import "../css/main-section.css";
import React from "react";
import reactsvg from "../assets/react.svg";

export default function MainSection() {
  var ingredientsList = ["tomato", "coriander", "turmeric"];
  let [isIngredients, setIsIngredients] = React.useState(ingredientsList);

  const ingredientListHtml = isIngredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  function handleClick() {
    console.log("whats good my ni");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ingredientsi = formData.get("ingredient");
    console.log(ingredientsi);
    setIsIngredients((prev) => [...prev, ingredientsi]);
  }
  return (
    <div className="main-section">
      {/* <button onClick={handleClick}>Enter the Ingredients</button> */}

      <form onSubmit={handleSubmit}>
        <input
          name="ingredient"
          type="text-box"
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
