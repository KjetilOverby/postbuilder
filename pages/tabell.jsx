import React, { useContext } from "react";
import TabellMain from "../components/tabell/TabellMain";
import HeadComponent from "../components/reusable components/HeadComponent";
import Link from "next/link";
import { TbArrowBigLeftLine } from "react-icons/tb";
import { ContextAppData } from "../data/context/ContextAppData";
import darkModeColor from "../styles/darkMode";

const Tabell = () => {
  const { darkMode } = useContext(ContextAppData);
  return (
    <>
      <div className="container">
        <HeadComponent />
        <Link href="/">
          <TbArrowBigLeftLine
            style={{
              color: darkMode ? darkModeColor.text : "rgb(0, 138, 138)",
              fontSize: "3rem",
            }}
          />
        </Link>
        <TabellMain darkMode={darkMode} />
      </div>
      <style jsx>
        {`
          .container {
            padding: 2rem 15rem;
            background: ${darkMode ? darkModeColor.primary : "white"};
            min-width: 100vw;
            min-height: 100vh;
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

export default Tabell;
