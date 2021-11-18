import { useRef } from "react";

export const SearchBar = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    if (!inputEl.current.value) {
      inputEl.current.focus();
    }
  };
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Search</button>
    </div>
  );
};
