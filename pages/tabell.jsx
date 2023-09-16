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
            style={{ color: "var(--text)", fontSize: "3rem" }}
          />
        </Link>
        <TabellMain />
      </div>
      <style jsx>
        {`
          .container {
            padding: 2rem 15rem;
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
