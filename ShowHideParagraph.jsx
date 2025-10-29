import React, { useState } from "react";

function ShowHideParagraph() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Paragraph
      </button>

      {isVisible && (
        <p>
        This is some hidden text!
        </p>
      )}
    </div>
  );
}

export default ShowHideParagraph;
