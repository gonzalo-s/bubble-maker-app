import React, { useEffect, useState } from "react";
import Bubble from "./Bubble";
import "./bubbles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addBubble,
  resetBubble,
  substractBubble,
} from "../actions/bubblesActions";

const BubbleMaker = () => {
  const [color, setColor] = useState("black");
  const [sliderValue, setSliderValue] = useState(90);
  const dispatch = useDispatch();
  const bubblesArr = useSelector((store) => store.bubbles);

  const handleColorClick = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="bubbleMaker-wrapper">
        <div className="bubbleMaker-bubbles-wrapper">
          {bubblesArr.map((bubble) => {
            return <Bubble key={bubble.id} bubble={bubble} />;
          })}
        </div>
        <div className="bubbleMaker-buttons">
          <div className="bubbleMaker-color-buttons">
            <button
              className="color-button"
              style={{
                backgroundColor: color === "black" ? "black" : "",
                color: color === "black" ? "white" : "black",
              }}
              value="black"
              onClick={(e) => {
                handleColorClick(e);
              }}
            >
              Black
            </button>
            <button
              className="color-button"
              style={{
                backgroundColor: color === "green" ? "green" : "",
              }}
              value="green"
              onClick={(e) => {
                handleColorClick(e);
              }}
            >
              Green
            </button>
            <button
              className="color-button"
              style={{
                backgroundColor: color === "red" ? "red" : "",
              }}
              value="red"
              onClick={(e) => {
                handleColorClick(e);
              }}
            >
              Red
            </button>
          </div>
          <div className="bubbleMaker-quantity-buttons-reset">
            <div className="bubbleMaker-quantity-buttons">
              <button
                className="quantity-button"
                onClick={() => {
                  dispatch(substractBubble());
                }}
              >
                -
              </button>
              <button
                className="quantity-button"
                onClick={() => {
                  dispatch(addBubble(color, sliderValue + "px"));
                }}
              >
                +
              </button>
            </div>
            <button
              className="bubble-maker-reset-btn"
              onClick={() => dispatch(resetBubble())}
            >
              Reset
            </button>
            <div className="slidecontainer">
              size:{" "}
              <input
                type="range"
                min="50"
                max="120"
                value={sliderValue}
                className="slider"
                id="myRange"
                onChange={(e) => {
                  setSliderValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="circleSlider-wrapper">
            <div
              className="circleSlider"
              style={{
                width: sliderValue + "px",
                height: sliderValue + "px",
                backgroundColor: color,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BubbleMaker;
