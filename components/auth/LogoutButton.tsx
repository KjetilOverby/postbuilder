import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogout } from "react-icons/ai";

const Logout = (): any => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <p
        className="logButton text-sm hover:cursor-pointer"
        onClick={() => logout()}
      >
        <AiOutlineLogout style={{ fontSize: "1rem", color: "white" }} />
      </p>
    )
  );
};

export default Logout;
