import React, { useState, useEffect } from "react";

export default function fetchUser(userName) {
  // useState for user
  const [users, setUsers] = useState([]);

  // fetching gitHub
  const userData = async () => {
    if (userName) {
      try {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // useffect
  useEffect(() => {
    userData();
  }, []);

  return users;
  //return <User users={users} />;
}
