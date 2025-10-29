import React from "react";
import Counter from "./Counter";
import ShowHideParagraph from "./ShowHideParagraph";
import UserInputTracker from "./UserInputTracker";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <div>
      <div>
        <Counter />
      </div>

      <div style={{ marginTop: "20px" }}>
        <ShowHideParagraph />
      </div>

      <div style={{ marginTop: "20px" }}>
        <UserInputTracker />
      </div>
       <div style={{ marginTop: "20px" }}>
      <ThemeToggle />
    </div>
    </div>
  );
}

export default App;






