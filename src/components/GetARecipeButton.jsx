import "../css/ingredients.css";

export default function GetARecipeButton({ recipeRe, recipeSh }) {
  return (
    <section className="get-recipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={recipeRe}>
        {recipeSh ? "Remove the Recipe" : "Get a recipe"}
      </button>
    </section>
  );
}
