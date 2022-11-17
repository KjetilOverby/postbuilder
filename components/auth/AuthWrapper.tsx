import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthProps {
  children: JSX.Element | JSX.Element[];
}

const AuthWrapper = ({ children }: AuthProps) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="container">
        {user && user.sub === process.env.USER_SUB && children}
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default AuthWrapper;
