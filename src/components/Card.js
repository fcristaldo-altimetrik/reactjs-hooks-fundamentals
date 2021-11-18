import React from "react";

const CardImplementation = ({ user }) => {
  console.log("render card", user);
  return (
    <div>
      <p>
        Name:<span>{user.name}</span>
      </p>
      <p>
        Email:<span>{user.email}</span>
      </p>
    </div>
  );
};
const compareFunction = (oldProps, newProps) => {
  const {
    user: { name, email },
  } = newProps;
  const {
    user: { name: oldName, email: oldEmail },
  } = oldProps;
  if (name === oldName && email === oldEmail) return true;
  return false;
};
export const Card = React.memo(CardImplementation, compareFunction);
