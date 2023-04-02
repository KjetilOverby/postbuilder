import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (): any => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const loginHandler = () => {
    loginWithRedirect();
  };
  return (
    !isAuthenticated && (
      <p
        className="logButton text-sm hover:cursor-pointer"
        onClick={loginHandler}
      >
        SIGN IN
      </p>
    )
  );
};

export default LoginButton;
