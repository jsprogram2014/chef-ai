import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  const [data, setData] = React.useState();

  function signUp(formData) {
    setData((prev) => formData.get("email"));
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>
        <p>{data}</p>
      </form>
    </section>
  );
}
