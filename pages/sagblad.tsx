import React from "react";
import SagbladMainPage from "../components/sagblad/SagbladMainPage";
import HeaderComponent from "../components/reusable components/HeaderComponent";
import { TbArrowBigLeftLine } from "react-icons/tb";
import Link from "next/link";

const sagblad = () => {
  return (
    <>
      <div className="container">
        <Link href="/">
          <TbArrowBigLeftLine
            style={{ color: "rgb(0, 138, 138)", fontSize: "3rem" }}
          />
        </Link>
        <h1 className="header">SAGBLAD</h1>
        <SagbladMainPage />
      </div>
      <style jsx>
        {`
          .container {
            background: white;
            min-height: 100vh;
            min-width: 100vw;
            padding: 3rem 25rem;
          }
          .header {
            color: rgb(0, 138, 138);
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          @media only screen and (max-width: 2100px) {
            .container {
              padding: 1rem 10rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default sagblad;
