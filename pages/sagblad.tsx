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
          }
        `}
      </style>
    </>
  );
};

export default sagblad;
