import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import { useRouter } from "next/router";

interface AuthProps {
  children: JSX.Element | JSX.Element[];
}

const AuthWrapper = ({ children }: AuthProps) => {
  const { user, isAuthenticated } = useAuth0();
  const homepage = "/";
  const router = useRouter();
  console.log(user);

  return (
    <div>
      {user && user.sub === process.env.USER_SUB && children}
      {/* {!user && router.pathname !== homepage && (
        <div>
          <h1>Du er ikke innkogget!</h1> <LoginButton />
        </div>
      )} */}
    </div>
  );
};

export default AuthWrapper;
