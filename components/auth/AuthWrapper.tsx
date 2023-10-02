import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NotAuth from "../reusable components/NotAuth";

interface AuthProps {
  children: JSX.Element | JSX.Element[];
}

const AuthWrapper = ({ children }: AuthProps) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {user ? user.sub === process.env.USER_SUB && children : <NotAuth />}
    </div>
  );
};

export default AuthWrapper;
