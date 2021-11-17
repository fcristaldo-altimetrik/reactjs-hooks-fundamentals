import React, { useState } from "react";

export const Field = ({ id, defaultValue, label, onBlur }) => {
  const [value, setValue] = useState(defaultValue || "");

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onBlur={onBlur}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </div>
  );
};
