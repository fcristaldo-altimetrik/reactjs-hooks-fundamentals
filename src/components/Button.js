import React, { useCallback } from "react";

export const Button = () => {
  const handleClick = useCallback(() => {
    alert("clicked!");
  }, []);

  return <button onClick={handleClick}>Click me</button>;
};
