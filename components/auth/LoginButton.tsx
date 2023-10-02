import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogin } from "react-icons/ai";

const LoginButton = (): any => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const loginHandler = () => {
    loginWithRedirect();
  };
  return (
    !isAuthenticated && (
      <p
        className="logButton text-sm hover:cursor-pointer"
        onClick={loginHandler}>
        <AiOutlineLogin style={{ fontSize: "1.2rem", color: "white" }} />
      </p>
    )
  );
};

export default LoginButton;
