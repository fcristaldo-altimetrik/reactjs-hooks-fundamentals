import React from "react";
import { useDispatch } from "react-redux";

export const Buttons = () => {
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch({ type: "increment" });
  };
  const onDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      <p>Functional</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrement}>Increment</button>
      </div>
    </>
  );
};
