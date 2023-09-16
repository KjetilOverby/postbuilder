import React from "react";
import TabellComponent from "./TabellComponent";
import rawList from "../../data/rawList";

const TabellMain = () => {
  return (
    <>
      <div className="container">
        <div className="tabell-container">
          <h1 className="header">Tykkelser</h1>
          <TabellComponent list={rawList.tykkelser} />
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
            flex-wrap: wrap
          }
          .header {
            font-size: 1.5rem;
          }
          .tabell-container {
            margin-right: 2rem;
          .text {
            color: indianred
          }
          @media only screen and (max-width: 756px) {
        
}
        `}
      </style>
    </>
  );
};

export default TabellMain;
