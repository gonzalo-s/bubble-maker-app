import React from "react";
import "./bubbles.css";
const Bubbles = ({ bubble }) => {
  const style = {
    backgroundColor: bubble.color,
    width: bubble.size,
    height: bubble.size,
  };

  return <div className="bubble" style={style}></div>;
};

export default Bubbles;
