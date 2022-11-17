import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = (): any => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <p
        className="text-orange-200 text-sm hover:cursor-pointer"
        onClick={() => logout()}
      >
        Sign out
      </p>
    )
  );
};

export default Logout;
