import React from "react";

export const AllUsers = (props) => {
  return (
    <>
      <h4>{props.users}</h4>
      <h5>{props.email}</h5>
    </>
  );
};

export default AllUsers;
