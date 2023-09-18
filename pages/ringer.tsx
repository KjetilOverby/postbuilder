import React, { useContext } from "react";
import RingerStartPage from "../components/ringer/RingerStartPage";
import { TbArrowBigLeftLine } from "react-icons/tb";
import Link from "next/link";
import { ContextAppData } from "../data/context/ContextAppData";
import darkModeColor from "../styles/darkMode";

const ringer = () => {
  const { darkMode } = useContext(ContextAppData);
  return (
    <>
      <div className="container">
        <Link href="/">
          <TbArrowBigLeftLine
            style={{
              color: darkMode ? darkModeColor.text : "rgb(0, 138, 138)",
              fontSize: "3rem",
            }}
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
            background: ${darkMode ? darkModeColor.primary : "white"};
          }
          .header {
            font-size: 1.5rem;
            color: ${darkMode ? darkModeColor.text : ""};
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
