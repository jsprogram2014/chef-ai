export default function IngredientsList({ listOfIn }) {
  const ingredientListHtml = listOfIn.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <section>
      <h1>Ingredients on hand :</h1>
      <ul>{ingredientListHtml}</ul>
    </section>
  );
}
