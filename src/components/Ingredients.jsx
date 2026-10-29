import "../css/ingredients.css";
import React from "react";
import reactsvg from "../assets/react.svg";
import Recipes from "../other-assets/recipes.md?raw";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Favourite from "./Favourite";

export default function MainSection() {
  let [isIngredients, setIsIngredients] = React.useState([]);
  let [recipeShown, setRecipeShown] = React.useState(false);
  let [isFavorite, setIsFavourite] = React.useState(false);

  const ingredientListHtml = isIngredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  function addIngredient(formData) {
    setIsIngredients((prev) => [...prev, formData.get("ingredient")]);
    toggleFavorite();
  }

  function recipeRecieve() {
    setRecipeShown(!recipeShown);
  }

  function toggleFavorite() {
    setIsFavourite(!isFavorite);
  }

  return (
    <div className="main-section">
      <Favourite isFilled={isFavorite} onClick={toggleFavorite} />
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

      {isIngredients.length > 3 && (
        <section className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={recipeRecieve}>
            {recipeShown ? "Remove the Recipe" : "Get a recipe"}
          </button>
        </section>
      )}

      {recipeShown && (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{Recipes}</ReactMarkdown>
      )}
    </div>
  );
}
