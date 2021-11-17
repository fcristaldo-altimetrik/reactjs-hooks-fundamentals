import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const countValue = useSelector((state) => state.count);
  return (
    <div>
      <p>Selected count value: {countValue}</p>
    </div>
  );
};
