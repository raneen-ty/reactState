import React, { useState } from "react";

function UserInputTracker() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="typing...."
        value={inputValue}
        onChange={handleChange}
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default UserInputTracker;
