import React, { useState, useEffect } from "react";
import LeftSidepanelEdit from "../postoppsett/LeftSidepanelEdit";
import RingPanelComponent from "../postoppsett/RingPanelComponent";
import ringlist from "../../data/ringList";
import { RiH1 } from "react-icons/ri";

interface calcProps {
  inputValue: Number;
}

const CalculatorMainComponent = () => {
  const [inputValue, setInputValue] = useState<any>();
  const [ringListValue, setRingListValue] = useState<any>();
  const [ringListValue2, setRingListValue2] = useState<any>(0);
  const [ringListValue3, setRingListValue3] = useState<any>(0);
  const [xValue, setXvalue] = useState<any>();
  const [shimsNumber, setShimsNumber] = useState(1);
  const [shims1, setShims1] = useState<any>(0);

  const [raw, setRaw] = useState(true);

  useEffect(() => {
    if (raw) {
      setXvalue(Number(inputValue) + 1.4);
    } else {
      setXvalue(inputValue);
    }
  }, [inputValue, raw]);

  useEffect(() => {
    if (raw) {
      setShims1((inputValue - ringListValue + 1.4).toFixed(1));
    } else {
      setShims1((inputValue - ringListValue).toFixed(1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringListValue]);

  useEffect(() => {
    setShims1((inputValue - ringListValue + 1.4).toFixed(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringListValue2]);

  console.log(shimsNumber);

  return (
    <>
      <div className="main-container">
        <div className="side-panel-container">
          <div className="selector-container">
            <p onClick={() => setRaw(!raw)}>{raw ? "Ring" : "Råmål"}</p>
          </div>
          <input onChange={(e) => setInputValue(e.target.value)} />
          <div>
            <button onClick={() => setShimsNumber(shimsNumber + 1)}>
              New Ring
            </button>
          </div>
          <div className="side-panel">
            <RingPanelComponent
              setRingPanelNumber={setRingListValue}
              setRingPanelNumber2={setRingListValue2}
              setRingPanelNumber3={setRingListValue3}
              list={ringlist}
              shimsNumber={shimsNumber}
            />
          </div>
        </div>
        <div className="content-container">
          <div>
            <h1 className="header">{raw ? "Råmål" : "Ring"}</h1>
            {inputValue && (
              <div>
                {raw && <h4>Råmål: {inputValue}</h4>}
                <h4>X-verdi: {Number(inputValue) > 1.4 ? xValue : null}</h4>
              </div>
            )}
            <hr />
            {/*    {ringListValue && (
                <div>
                  <h4>Ring: {ringListValue}</h4>
                </div>
              )}
              {ringListValue2 > 0 && (
                <h1>Shims2: {ringListValue2 - ringListValue3}</h1>
              )}
              <h4>Skims: {shims1 - ringListValue2}</h4>
              {ringListValue3 > 0 && <h1>Shims3: {ringListValue3}</h1>} */}
            {ringListValue && <h1>Ring: {ringListValue}</h1>}
            {ringListValue > 0 && <h1>*: {shims1 - ringListValue2}</h1>}
          </div>
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
