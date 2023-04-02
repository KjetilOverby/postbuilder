import React, { useContext } from "react";
import { ContextAppData } from "../../data/context/ContextAppData";

const Footer = () => {
  const { chosenThemeColor } = useContext(ContextAppData);
  return (
    <>
      <div className="main-container">
        <p className="text">
          © POSTARKIV 2016-2023. Fargetema:{" "}
          {chosenThemeColor === '"Cadet"' ||
          chosenThemeColor === '"Steelblue"' ||
          chosenThemeColor === '"Tomato"' ||
          chosenThemeColor === '"Futuristic"' ||
          chosenThemeColor === '"Innovative"' ||
          chosenThemeColor === '"Dodger"' ||
          chosenThemeColor === '"Dusk"' ||
          chosenThemeColor === '"Dark blue"' ||
          chosenThemeColor === '"Anwar"' ||
          chosenThemeColor === '"Dark bronze"' ||
          chosenThemeColor === '"Pink darkness"' ||
          chosenThemeColor === '"Green darkness"' ||
          chosenThemeColor === '"Quick silver"'
            ? chosenThemeColor
            : "Standard"}
        </p>
      </div>
      <style jsx>
        {`
          .main-container {
            height: 3rem;
            background: var(--table-bg);
            grid-area: footer;
            padding: 0 15rem;
            display: grid;
            place-items: center;
          }
          .text {
            color: var(--primary-text);
            font-size: 0.7rem;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
