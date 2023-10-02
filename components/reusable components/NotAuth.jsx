import React from "react";
import LoginButton from "../auth/LoginButton";
import { usePathname } from "next/navigation";

const NotAuth = () => {
  const pathName = usePathname();
  return (
    <>
      {pathName === "/lister" && (
        <>
          <div className="container">
            <div>
              <div className="header-container">
                <h1>Session Timeout</h1>
                <p className="text">You`re been timed out due to inactivity.</p>
              </div>
              <p className="text">Logg inn</p>
              <div className="login-container">
                <LoginButton />
              </div>
            </div>
          </div>
        </>
      )}
      {pathName === "/create" && (
        <>
          <div className="container">
            <div>
              <div className="header-container">
                <h1>Session Timeout</h1>
                <p className="text">You`re been timed out due to inactivity.</p>
              </div>
              <p className="text">Logg inn</p>
              <div className="login-container">
                <LoginButton />
              </div>
            </div>
          </div>
        </>
      )}
      <style jsx>
        {`
          .container {
            background: #1f2833;
            min-height: 100vh;
            min-width: 100vw;
            display: grid;
            place-items: center;
          }
          .header-container {
            margin-bottom: 3rem;
          }
          .login-container {
            width: 28px;
          }
          .text {
            color: #45a29e;
          }
          h1 {
            font-size: 2rem;
            color: #66fcf1;
          }
        `}
      </style>
    </>
  );
};

export default NotAuth;
