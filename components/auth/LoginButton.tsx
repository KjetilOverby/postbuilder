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
        className="text-orange-200 text-sm hover:cursor-pointer"
        onClick={loginHandler}
      >
        Sign in
      </p>
    )
  );
};

export default LoginButton;
