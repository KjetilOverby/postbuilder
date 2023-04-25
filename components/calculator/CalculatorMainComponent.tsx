import React, { useState, useEffect } from "react";
import LeftSidepanelEdit from "../postoppsett/LeftSidepanelEdit";
import RingPanelComponent from "../postoppsett/RingPanelComponent";
import ringlist from "../../data/ringList";

interface calcProps {
  inputValue: Number;
}

const CalculatorMainComponent = () => {
  const [inputValue, setInputValue] = useState<any>();
  const [ringListValue, setRingListValue] = useState<any>();
  const [xValue, setXvalue] = useState<any>();
  const [shims1, setShims1] = useState<any>(0);
  const [shims2, setShims2] = useState<any>(0);

  const [raw, setRaw] = useState(true);

  useEffect(() => {
    setXvalue(Number(inputValue) + 1.4);
  }, [inputValue]);

  useEffect(() => {
    setShims1((inputValue - ringListValue + 1.4).toFixed(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringListValue]);
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
            <RingPanelComponent
              setRingPanelNumber={setRingListValue}
              list={ringlist}
            />
          </div>
        </div>
        <div className="content-container">
          {raw && (
            <div>
              <h1 className="header">Råmål</h1>
              {inputValue && (
                <div>
                  <h4>Råmål: {inputValue}</h4>
                  <h4>X-verdi: {Number(inputValue) > 1.4 ? xValue : null}</h4>
                </div>
              )}
              <hr />
              {ringListValue && (
                <div>
                  <h4>Ring: {ringListValue}</h4>
                  <h4>Skims: {shims1 - shims2}</h4>
                  {shims2 > 0 && <h4>Skims: {shims2 && shims2}</h4>}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .content-container {
            grid-area: content;
            display: flex;
            justify-content: center;
            margin-top: 5rem;
          }
          .header {
            font-size: 1.5rem;
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
