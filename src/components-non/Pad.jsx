import React from "react";

export default function Pad({ style, id, opacitic, handleClickie }) {
  return (
    <button
      style={{ ...style, opacity: opacitic ? 1 : 0.1 }}
      onClick={() => handleClickie(id)}
    >
      Button {id}
    </button>
  );
}
