import React, { useContext } from "react";
import { ContextAppData } from "../../data/context/ContextAppData";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { user, isAuthenticated } = useAuth0<any>();
  const { chosenThemeColor } = useContext(ContextAppData);
  return (
    <>
      <div className="main-container">
        <p className="text">Copyright © 2016-2023 POSTARKIV</p>
        <p className="text">Bruker: {user ? user.name : "Ikke innlogget"}</p>

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
          chosenThemeColor === '"Green pearl"'
            ? chosenThemeColor
            : "Standard"}
        </p>
      </div>
      <style jsx>
        {`
          .main-container {
            height: 5rem;
            background: var(--table-bg);
            grid-area: footer;
            display: grid;
            place-items: center;
            padding: 1rem 0;
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
