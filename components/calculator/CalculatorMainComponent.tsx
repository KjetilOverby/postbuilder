import React, { useState } from "react";
import LeftSidepanelEdit from "../postoppsett/LeftSidepanelEdit";
import RingPanelComponent from "../postoppsett/RingPanelComponent";
import ringlist from "../../data/ringList";

const CalculatorMainComponent = () => {
  const [inputValue, setInputValue] = useState<string>();
  return (
    <>
      <div className="main-container">
        <div className="side-panel-container">
          <div className="selector-container">
            <p>Råmål</p>
            <p>Ring</p>
          </div>
          <input onChange={(e) => setInputValue(e.target.value)} />
          <div className="side-panel">
            <RingPanelComponent list={ringlist} />
          </div>
        </div>
        <div className="content-container">
          <p>{inputValue}</p>
        </div>
      </div>
      <style jsx>
        {`
          .content-container {
            grid-area: content;
          }
          .main-container {
            display: grid;
            grid-template-columns: 18rem 1fr;
            grid-template-areas: "side content";
          }
          .side-panel {
            width: 15rem;
            grid-area: sidebar;
          }
          .side-panel-container {
            background: var(--outer);
            width: 18rem;
            min-height: 100vh;
            padding: 1rem;
          }
          .selector-container {
            display: flex;
            justify-content: space-around;
          }
        `}
      </style>
    </>
  );
};

export default CalculatorMainComponent;
