import React, { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false); 

  const toggleTheme = () => {
    setIsDark(!isDark); 
  };


  const themeStyle = {
    backgroundColor: isDark ? "#333" : "#f5f5f5",
    color: isDark ? "#f5f5f5" : "#333",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
  };

  return (
    <div style={themeStyle}>
      <h2>{isDark ? "Dark Theme" : "Light Theme"}</h2>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
