import React, { useState } from "react";
import TabellComponent from "./TabellComponent";
import rawList from "../../data/rawList";
import TabellModal from "./TabellModal";
import darkModeColor from "../../styles/darkMode";

const TabellMain = ({ darkMode }) => {
  const [rawVal, setRawVal] = useState();
  const [openModal, setOpenModal] = useState(false);
  console.log(rawVal);
  return (
    <>
      <div className="container">
        <div className="tabell-container">
          {openModal && <TabellModal />}
          <h1 className="header">Tykkelser</h1>
          <TabellComponent list={rawList.tykkelser} setRawVal={setRawVal} />
          <p className="f">* Faste ringer</p>
          <p className="text">Råmål 25mm sidebord gran 27.2</p>
        </div>
        <div className="tabell-container">
          <h1 className="header">Bredder sentrum</h1>
          <TabellComponent list={rawList.sentrumsBredder} />
        </div>
        <div className="tabell-container">
          <h1 className="header">Bredder sidebord</h1>
          <TabellComponent list={rawList.sideBredder} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-wrap: wrap;
          }
          .header {
            font-size: 1.5rem;
            color: ${darkMode ? darkModeColor.text : "rgb(0, 138, 138)"};
          }
          .tabell-container {
            margin-right: 2rem;
            margin-bottom: 2rem;
            position: relative;
          }
          .text {
            color: indianred;
          }

          .f {
            color: slategrey;
          }
          @media only screen and (max-width: 1000px) {
          }
        `}
      </style>
    </>
  );
};

export default TabellMain;
