import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const counterStyle = {
    backgroundColor: "rgba(135, 206, 235, 0.5)", // Sky blue color with transparency
    backdropFilter: "blur(10px)", // Glassy effect
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
    textAlign: "center",
    maxWidth: "200px",
    margin: "auto",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
  };

  const countStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    margin: "20px 0",
  };

  return (
    <div style={counterStyle}>
      <p style={countStyle}>{count}</p>
      <button onClick={increment} style={buttonStyle}>
        +
      </button>
      <button onClick={decrement} style={buttonStyle}>
        -
      </button>
    </div>
  );
};

export default Counter;
