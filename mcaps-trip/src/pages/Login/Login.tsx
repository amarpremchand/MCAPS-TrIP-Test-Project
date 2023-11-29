import React from "react";
import { useMsal } from "@azure/msal-react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { instance } = useMsal();
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Choose between loginPopup and loginRedirect based on your application's UX
      await instance.loginPopup();
      // After successful login, redirect the user to the Home page
      history.push("/");
    } catch (error) {
      // Handle errors that occur during the login process
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Welcome to My Application</h1>
      <button
        onClick={handleLogin}
        style={{ cursor: "pointer", padding: "10px 20px", fontSize: "16px" }}
      >
        Sign In with Microsoft
      </button>
    </div>
  );
};

export default Login;
