import React, { useState } from "react";
import { getAll } from "../../utils/fetch";

export const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await getAll();
    console.log(data.users);
    setUsers(data.users);
  };

  return (
    <>
      <h1>To show all users click the button</h1>
      <button onClick={() => getUsers()}>SHOW ALL USERS</button>
      {users.length > 0
        ? users.map((user, index) => (
            <p key={index}>
              {user.id}. {user.username}: {user.email}
            </p>
          ))
        : null}
    </>
  );
};

export default AllUsers;
