import profile1 from "../images/profile-1.svg";
import profile2 from "../images/profile-2.svg";
import React from "react";

export default function Contact() {
  const [contact, setContact] = React.useState({ isGreeting: false });

  function handleImage() {
    setContact((prev) => ({ ...prev, isGreeting: !prev.isGreeting }));
  }

  return (
    <>
      <img
        src={contact.isGreeting ? profile1 : profile2}
        onClick={handleImage}
      />
    </>
  );
}
