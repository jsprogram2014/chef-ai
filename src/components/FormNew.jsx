import React from "react";
import ReactDOM from "react-dom/client";
import "../css/form-new.css";

export default function App() {
  const [data, setData] = React.useState();

  function signUp(formData) {
    // setData(() => formData.get("checker1"));
    console.log(formData.getAll("checker1"));
    console.log(formData.getAll("optionse"));
  }

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue="joe@gmail.com"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          defaultValue="aasdasd"
        />
        <br />

        <fieldset style={{ display: "flex", flexDirection: "column" }}>
          <legend>Employ Status</legend>
          <label>
            <input type="radio" name="radios" value="radio1" />
            Radio 1
          </label>
          <label>
            <input type="radio" name="radios" value="radio2" />
            Radio 2
          </label>
          <label>
            <input
              type="radio"
              name="radios"
              defaultChecked={true}
              value="radio3"
            />
            Radio 3
          </label>
          <label>
            <input type="checkbox" name="checker1" value="checker1" />
            Checker 01
          </label>
          <label>
            <input type="checkbox" name="checker1" value="checker2" />
            Checker 02
          </label>
          <label>
            <input
              type="checkbox"
              name="checker1"
              defaultChecked={true}
              value="checker3"
            />
            Checker 03
          </label>
        </fieldset>

        <label htmlFor="optionse"></label>
        <select id="optionse" name="optionse" defaultValue="Orange">
          <option value="Red">Red </option>
          <option value="Orange">Orange </option>

          <option value="Grey">Grey </option>
          <option value="Blue">Blue </option>
          <option value="Violet">Violet </option>
        </select>

        <button>Submit</button>
        <p>{data}</p>
      </form>
    </section>
  );
}
