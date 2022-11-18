import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

interface AuthProps {
  children: JSX.Element | JSX.Element[];
}

const AuthWrapper = ({ children }: AuthProps) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div>
        {user && user.sub === process.env.USER_SUB && children}{" "}
        {!user && (
          <div>
            <h1>Du er ikke innkogget!</h1> <LoginButton />
          </div>
        )}
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
