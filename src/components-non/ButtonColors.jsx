import React from "react";
import colorArray from "../other-assets/colors";
import Pad from "./Pad";

export default function ButtonColors() {
  const [pads, setPads] = React.useState(colorArray);
  const arrayColor = pads.map((item, index) => (
    <Pad
      key={item.id}
      id={item.id}
      style={{
        backgroundColor: item.color,
        width: "100px",
        height: "100px",
      }}
      opacitic={item.on}
      handleClickie={handleClick}
    />
  ));

  function handleClick(id) {
    setPads((prev) =>
      prev.map((item) => (item.id === id ? { ...item, on: !item.on } : item)),
    );
  }

  function turnAllOff() {
    console.log("cwfedf");
    setPads((prevState) => {
      return prevState.map((items, index) => {
        // console.log("messi");
        return { ...items, on: false };
      });
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {arrayColor}
      <button onClick={turnAllOff}>Turn all OFF</button>
    </div>
  );
}
