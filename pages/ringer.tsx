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
            style={{ color: "var(--text)", fontSize: "3rem" }}
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
          }
          .header {
            font-size: 1.5rem;
          }
          h1 {
            color: var(--text);
          }
        `}
      </style>
    </>
  );
};

export default ringer;
