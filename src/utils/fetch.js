//

// import SignUp from "../components/SignUp/SignUp";

// SIGN UP
export const signupuUser = async (username, email, password) => {
  const response = await fetch("http://localhost:5002/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("signup", data);
  return data;
};

// LOG IN
export const login = async (username, password) => {
  console.log("click");
  const response = await fetch("http://localhost:5002/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const userData = await response.json();
  console.log(userData);
  return userData;
};

// GET ALL USERS

export const getAll = async () => {
  console.log("click");
  const response = await fetch("http://localhost:5002/users/getUsers", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};

export default { signupuUser, login, getAll };
