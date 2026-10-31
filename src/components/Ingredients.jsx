import "../css/ingredients.css";
import React from "react";
import reactsvg from "../assets/react.svg";
import Recipes from "../other-assets/recipes.md?raw";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Favourite from "../components-non/Favourite";
import GetARecipeButton from "./GetARecipebutton";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../ai/ai";
import AiResult from "./AiResult";

export default function Ingredients() {
  let [isIngredients, setIsIngredients] = React.useState([
    "tomato",
    "basil",
    "rice",
    "coconut",
  ]);
  let [recipeShown, setRecipeShown] = React.useState(false);
  let [resultClaude, setResultClaude] = React.useState("");
  function addIngredient(formData) {
    setIsIngredients((prev) => [...prev, formData.get("ingredient")]);
  }

  async function recipeRecieve() {
    if (!recipeShown) {
      const text = await getRecipeFromChefClaude(isIngredients);
      setResultClaude(text);
    }
    setRecipeShown(!recipeShown);
  }

  return (
    <div className="main-section">
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

      <>{recipeShown && <AiResult claudere={resultClaude} />}</>
      {/* {recipeShown && (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{Recipes}</ReactMarkdown>
        )} */}
    </div>
  );
}
