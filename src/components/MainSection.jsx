import "../css/main-section.css";

export default function MainSection() {
  const ingredients = ["tomato", "coriander", "turmeric"];
  const ingredientList = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  function handleClick() {
    console.log("whats good my ni");
  }

  function handleSubmit(event) {
    console.log("submitted data");
    event.preventDefault();
  }
  return (
    <div className="main-section">
      {/* <button onClick={handleClick}>Enter the Ingredients</button> */}

      <form onSubmit={handleSubmit}>
        <input type="text-box" tter="e.g tomato" />
        <button>Enter the Ingredients</button>
      </form>

      <ul>{ingredientList}</ul>
    </div>
  );
}
