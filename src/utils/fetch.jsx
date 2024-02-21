const fetch = require("node-fetch");

const getUser = async () => {
  const response = await fetch("http://localhost:5002/users./login", {
    method: "Post",
    body: {
      userName: "a",
      password: "aa",
    },
  });
  const userData = await response.json();
  console.log(userData);
};

export default getUser;
