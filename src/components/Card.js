import React, { useContext } from "react";
import { Context } from "../Context";

export const Card = () => {
  const { name } = useContext(Context);
  return (
    <div>
      <p>Hi, {name}</p>
    </div>
  );
};
