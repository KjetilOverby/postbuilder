import React from "react";
import TabellMain from "../components/tabell/TabellMain";
import HeadComponent from "../components/reusable components/HeadComponent";
import Link from "next/link";
import { TbArrowBigLeftLine } from "react-icons/tb";

const tabell = () => {
  return (
    <>
      <div className="container">
        <HeadComponent />
        <Link href="/">
          <TbArrowBigLeftLine
            style={{ color: "rgb(0, 138, 138)", fontSize: "3rem" }}
          />
        </Link>
        <TabellMain />
      </div>
      <style jsx>
        {`
          .container {
            padding: 2rem 15rem;
            background: white;
            min-width: 100vw;
          }
          @media only screen and (max-width: 756px) {
            .container {
              padding: 2rem 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default tabell;
