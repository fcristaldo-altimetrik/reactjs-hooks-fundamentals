import React, { useState } from "react";

export const Field = ({ id, defaultValue, label, onFocus }) => {
  const [value, setValue] = useState(defaultValue || "");
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onFocus={onFocus}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </div>
  );
};
