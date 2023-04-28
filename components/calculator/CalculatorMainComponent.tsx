import React, { useState, useEffect } from "react";
import LeftSidepanelEdit from "../postoppsett/LeftSidepanelEdit";
import RingPanelComponent from "../postoppsett/RingPanelComponent";
import ringlist from "../../data/ringList";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { BiReset } from "react-icons/bi";
import { FaHandPointRight } from "react-icons/fa";

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
      setXvalue((Number(inputValue) + 1.4).toFixed(1));
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
  }, [ringListValue, inputValue, raw]);

  const shimsNumberAdd = () => {
    setShimsNumber(shimsNumber + 1);
  };
  const shimsNumberMinus = () => {
    setShimsNumber(shimsNumber - 1);
  };

  useEffect(() => {
    if (shimsNumber === 1) {
      setRingListValue2(0);
    } else if (shimsNumber === 2) {
      setRingListValue3(0);
    }
  }, [shimsNumber]);

  const resetValues = () => {
    setRingListValue(0);
    setRingListValue2(0);
    setRingListValue3(0);
    setInputValue("");
    setShimsNumber(1);
  };
  return (
    <>
      <div className="main-container">
        <div className="side-panel-container">
          <div className="selector-container">
            <button onClick={() => setRaw(!raw)}>
              {raw ? "Ring" : "Råmål"}
            </button>
          </div>
          <h1>Ring: {shimsNumber}</h1>
          <p>Skriv en verdi</p>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Verdi"
          />
          <div>
            <button onClick={shimsNumberAdd}>
              <IoIosAddCircleOutline />
            </button>
            <button onClick={shimsNumberMinus}>
              <FiMinusCircle />
            </button>
            <button onClick={resetValues}>
              <BiReset />
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
          <div className="calc-container">
            <h1 className="header">{raw ? "Råmål" : "Ring"}</h1>
            {inputValue && (
              <div>
                {raw && <h4>Råmål: {inputValue}</h4>}
                <h4>X-verdi: {Number(inputValue) > 1.4 ? xValue : null}</h4>
              </div>
            )}
            {ringListValue && (
              <h1 className="ringnumber-header">Ring: {shimsNumber}</h1>
            )}

            {ringListValue > 0 && <h1 className="values">{ringListValue}</h1>}

            {ringListValue2 > 0 && <h1 className="values">{ringListValue2}</h1>}

            {ringListValue3 > 0 && <h1 className="values">{ringListValue3}</h1>}

            {ringListValue > 0 && (
              <h1 className="values">
                {(shims1 - ringListValue2 - ringListValue3).toFixed(1)}
              </h1>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          button {
            background: var(--primary);
            padding: 0.5rem;
            border-radius: 5px;
            margin: 1rem 1rem 1rem 0;
          }

          .calc-container {
            width: 20%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .icon-value-container {
            position: relative;
          }
          input {
            background: var(--primary);
            padding: 0.2rem;
            border-radius: 5px;
            width: 4rem;
          }
          .content-container {
            grid-area: content;
            display: flex;
            justify-content: center;
            margin-top: 5rem;
          }
          .header {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          .main-container {
            display: grid;
            grid-template-columns: 18rem 1fr;
            grid-template-areas: "side content";
            background: var(--primary);
            color: var(--primary-text);
          }
          .ringnumber-header {
            margin-bottom: 3rem;
          }
          .side-panel {
            width: 15rem;
            grid-area: sidebar;
          }
          .side-panel-container {
            background: var(--hover);
            width: 18rem;
            min-height: 100vh;
            padding: 1rem;
          }
          .selector-container {
            display: flex;
            justify-content: space-around;
          }
          .values {
            background: var(--table-bg);
            padding: 0.2rem;
            width: 10rem;
            display: grid;
            place-items: center;
            margin: 0.3rem 0;
            border-radius: 10px;
            font-size: 2.4rem;
          }
        `}
      </style>
    </>
  );
};

export default CalculatorMainComponent;
