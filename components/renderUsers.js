import React, { useState, useEffect } from "react";
import User from "./user";

export default function RenderUsers({ userName }) {
  // useState for users
  const [users, setUsers] = useState([]);

  // fetching gitHub
  const userData = async () => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setUsers(data);
  };

  // useffect
  useEffect(() => {
    userData();
  }, []);

  return <User users={users} />;
}
