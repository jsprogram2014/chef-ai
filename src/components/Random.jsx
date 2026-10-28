import React from "react";

export default function App() {
  const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"]);

  /**
   * Challenge:
   * If there are 0 unread messages, display a paragraph that says "You
   * have no unread messages". (So, the logic will be the opposite of
   * what we have for the h1)
   */

  function removeMessages() {
    setUnreadMessages((prev) => {
      if (prev.length > 0) {
        let newArray = [...prev];
        newArray.pop();
        return newArray;
      } else return prev;
    });
  }
  return (
    <div>
      {unreadMessages.length > 0 ? (
        <h1>You have {unreadMessages.length} unread messages!</h1>
      ) : (
        <h1>You have no unread messages</h1>
      )}
      <button onClick={removeMessages}>Remove Unread Messages</button>
    </div>
  );
}
