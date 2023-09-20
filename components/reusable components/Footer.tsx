import React, { useContext } from "react";
import { ContextAppData } from "../../data/context/ContextAppData";
import { useAuth0 } from "@auth0/auth0-react";
import darkModeColor from "../../styles/darkMode";

const Footer = () => {
  const { user, isAuthenticated } = useAuth0<any>();
  const { chosenThemeColor, chosenThemeFont, darkMode } =
    useContext(ContextAppData);
  return (
    <>
      <div className="main-container">
        <p className="text">Bruker: {user ? user.name : "Ikke innlogget"}</p>
        <p className="text">
          Font:{" "}
          {chosenThemeFont === '"Abel"' ||
          chosenThemeFont === '"Krub"' ||
          chosenThemeFont === '"Chakra Petch"' ||
          chosenThemeFont === '"Exo"' ||
          chosenThemeFont === '"Fjalla One"' ||
          chosenThemeFont === '"Orbitron"' ||
          chosenThemeFont === '"Red Hat Display"' ||
          chosenThemeFont === '"Roboto"' ||
          chosenThemeFont === '"Saira Condensed"' ||
          chosenThemeFont === '"Space Grotesk"' ||
          chosenThemeFont === '"Unica One"' ||
          chosenThemeFont === '"Poiret One"' ||
          chosenThemeFont === '"Electrolize"' ||
          chosenThemeFont === '"Armata"' ||
          chosenThemeFont === '"Fira Code"' ||
          chosenThemeFont === '"Maitree"' ||
          chosenThemeFont === '"Nixie One"' ||
          chosenThemeFont === '"Buda"' ||
          chosenThemeFont === '"Mina"'
            ? chosenThemeFont
            : "Standard"}
        </p>
        <p className="text">
          Fargetema:{" "}
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
          chosenThemeColor === '"Quick silver"' ||
          chosenThemeColor === '"Green pearl"' ||
          chosenThemeColor === '"Sahara night"'
            ? chosenThemeColor
            : "Standard"}
        </p>

        <p className="text">Copyright © 2016-2023 POSTARKIV</p>
      </div>
      <style jsx>
        {`
          .main-container {
            height: 6rem;
            background: ${darkMode
              ? darkModeColor.headerColor
              : "rgb(0, 138, 138)"};
            grid-area: footer;
            display: grid;
            place-items: center;
            padding: 1rem 0;
            margin-top: 2rem;
          }
          .text {
            color: ${darkMode ? darkModeColor.text : "rgb(224, 242, 241)"};
            font-size: 0.7rem;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
