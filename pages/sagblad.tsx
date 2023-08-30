import React from "react";
import SagbladMainPage from "../components/sagblad/SagbladMainPage";
import HeaderComponent from "../components/reusable components/HeaderComponent";

const sagblad = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">SAGBLAD</h1>
        <SagbladMainPage />
      </div>
      <style jsx>
        {`
          .container {
            background: var(--primary);
            min-height: 100vh;
            min-width: 100vw;
            padding: 3rem 25rem;
          }
          .header {
            color: var(--primary-text);
            font-size: 3rem;
            margin-bottom: 3rem;
          }
          @media only screen and (max-width: 2100px) {
            .container {
              padding: 3rem 10rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default sagblad;
