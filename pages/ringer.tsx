import React from "react";
import RingerStartPage from "../components/ringer/RingerStartPage";
import { TbArrowBigLeftLine } from "react-icons/tb";
import Link from "next/link";

const ringer = () => {
  return (
    <>
      <div className="container">
        <Link href="/">
          <TbArrowBigLeftLine
            style={{ color: "rgb(0, 138, 138)", fontSize: "3rem" }}
          />
        </Link>
        <h1 className="header">Oversikt ringer</h1>
        <RingerStartPage />
      </div>
      <style jsx>
        {`
          .container {
            padding: 2rem 10rem;
            min-height: 100vh;
            min-width: 100vw;
            background: white;
          }
          .header {
            font-size: 1.5rem;
          }
          h1 {
            color: rgb(0, 138, 138);
          }
        `}
      </style>
    </>
  );
};

export default ringer;
