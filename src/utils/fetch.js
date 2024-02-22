//

// import SignUp from "../components/SignUp/SignUp";

//
export const signupuUser = async (username, email, password) => {
  const response = await fetch("http://localhost:5002/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Allow-Control-Allow-Origin": "http://localhost:5002",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("signup", data);
};

export default signupuUser;

// const getUser = async (user, password1) => {
//   console.log("click");
//   const response = await fetch("http://localhost:5001/users/login", {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       "Allow-Control-Allow-Origin": "http://localhost:5001",
//     },
//     body: JSON.stringify({
//       userName: user,
//       password: password1,
//     }),
//   });

//   const userData = await response.json();
//   console.log(userData);
//   return userData;
// };
