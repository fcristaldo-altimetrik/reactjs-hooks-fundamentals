import React, { useEffect, useState } from "react";
import { getUser } from "../services";

export const UserCard = ({ userId }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    // fetch information from API with userId
    getUser(userId).then((res) => {
      setUser(res);
    });
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};
