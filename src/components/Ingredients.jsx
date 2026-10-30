import "../css/ingredients.css";
import React from "react";
import reactsvg from "../assets/react.svg";
import Recipes from "../other-assets/recipes.md?raw";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Favourite from "../components-non/Favourite";
import GetARecipeButton from "./GetARecipebutton";
import IngredientsList from "./IngredientsList";

export default function MainSection() {
  let [isIngredients, setIsIngredients] = React.useState([]);
  let [recipeShown, setRecipeShown] = React.useState(false);
  let [isFavorite, setIsFavourite] = React.useState(false);

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
        <button>+ Enter the Ingredients</button>
      </form>

      <IngredientsList listOfIn={isIngredients} />

      {isIngredients.length > 3 && (
        <GetARecipeButton recipeRe={recipeRecieve} recipeSh={recipeShown} />
      )}

      {recipeShown && (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{Recipes}</ReactMarkdown>
      )}
    </div>
  );
}
