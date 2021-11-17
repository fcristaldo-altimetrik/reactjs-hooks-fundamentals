import React from "react";

const initialState = {
  name: "Facundo",
  setName: () => {},
};
export const Context = React.createContext(initialState);
