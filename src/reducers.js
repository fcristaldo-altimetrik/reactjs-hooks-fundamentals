import { combineReducers } from "redux";

export const counter = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return 1;
  }
};
export default combineReducers({ count: counter });
