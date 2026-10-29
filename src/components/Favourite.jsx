import React from "react";
import starFilled from "../images/star-green.svg";
import starEmpty from "../images/star-red.svg";

export default function Favourite(props) {
  /**
   * Challenge: Move the star image into its own component (Star)
   * - It should receive a prop called `isFilled` that it
   *   ... (lines 27–33 cut off in the screenshot)
   */

  return (
    <div>
      <button onClick={props.onClick}>
        <img src={props.isFilled ? starEmpty : starFilled} />
      </button>
    </div>
  );
}
