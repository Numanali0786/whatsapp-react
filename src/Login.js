import React from "react";
// import "./Login.css";
// import { Button } from "@mui/material";
// import { auth, provider } from "./firebase";
// import { useDispatch, useSelector } from "react-redux";

// const Login = () => {
//   const { user } = useSelector((state) => state.userReducer);
//   console.log(user);
//   const dispatch = useDispatch();
//   const signIn = () => {
//     auth
//       .signInWithPopup(provider)
//       .then((result) => {
//         dispatch({ type: "SET_USER", user: result.user });
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="login">
//       <div className="login__container">
//         <h1>Sign In</h1>
//         <Button onClick={signIn}>signin with google</Button>
//       </div>
//     </div>
//   );
// };

/////////////////////////

import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const c = useSelector((state) => state.userReducer);
  console.log("c", c);
  const dispatch = useDispatch();
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const userDetails = jwt_decode(credentialResponse.credential);
        dispatch({ type: "SET_USER", user: userDetails });
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
export default Login;
