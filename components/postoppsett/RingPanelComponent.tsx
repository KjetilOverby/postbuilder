import React, { useContext, useState } from "react";
import { ContextAppData } from "../../data/context/ContextAppData";

const RingPanelComponent = ({
  list,
  setRingPanelNumber,
  setRingPanelNumber2,
  setRingPanelNumber3,
  shimsNumber,
  setUpdate,
  update,
  postInfo,
  setPostInfo,
}: any) => {
  const getPanelNumbers = () => {
    setRingPanelNumber;
  };

  const { editRingPanelValue } = useContext(ContextAppData);
  const [ring270, setRing270] = useState("ring270");

  return (
    <>
      <p className="values">Små ringer</p>
      <div className="ringlist-container">
        {list.small.map((item: any) => {
          const ringPanelNumberHandler = () => {
            if (shimsNumber === 1 || editRingPanelValue) {
              setRingPanelNumber(item);
            } else if (shimsNumber === 2) {
              setRingPanelNumber2(item);
            } else if (shimsNumber === 3) {
              setRingPanelNumber3(item);
            }
          };
          return (
            <div
              key={item._id}
              onClick={ringPanelNumberHandler}
              className="ringvalue-container">
              <p className="values">{item}</p>
            </div>
          );
        })}
      </div>
      <p className="values">Store ringer</p>
      <div className="ringlist-container">
        {list.big.map((item: any) => {
          const ringPanelNumberHandler = () => {
            if (shimsNumber === 1 || editRingPanelValue) {
              setRingPanelNumber(item);
            } else if (shimsNumber === 2) {
              setRingPanelNumber2(item);
            } else if (shimsNumber === 3) {
              setRingPanelNumber3(item);
            }
          };
          return (
            <div
              key={item._id}
              onClick={ringPanelNumberHandler}
              className={`ringvalue-container ${item === 2.2 ? ring270 : ""} ${
                item === 2.4 ? ring270 : ""
              } ${item === 34.6 ? ring270 : ""} ${item === 37 ? ring270 : ""} ${
                item === 37.5 ? ring270 : ""
              } ${item === 40.8 ? ring270 : ""} ${
                item === 44.9 ? ring270 : ""
              } ${item === 46.9 ? ring270 : ""} ${
                item === 53.1 ? ring270 : ""
              } ${item === 66.4 ? ring270 : ""}`}>
              <p className="values">{item}</p>
            </div>
          );
        })}
      </div>
      <p className="values">Skims</p>
      <div className="ringlist-container">
        {list.shims.map((item: any) => {
          const ringPanelNumberHandler = () => {
            if (shimsNumber === 1 || editRingPanelValue) {
              setRingPanelNumber(item);
            } else if (shimsNumber === 2) {
              setRingPanelNumber2(item);
            } else if (shimsNumber === 3) {
              setRingPanelNumber3(item);
            }
          };
          return (
            <div
              key={item._id}
              onClick={ringPanelNumberHandler}
              className={`ringvalue-container ${item === 0.3 ? ring270 : ""} ${
                item === 0.5 ? ring270 : ""
              } ${item === 1 ? ring270 : ""}`}>
              <p className="values">{item}</p>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .both {
            background: yellow;
          }
          .ringlist-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
            grid-gap: 5px;
            margin: 1rem 0;
          }
          .ringvalue-container {
            border: 1px solid var(--outer);
            display: grid;
            place-items: center;
            width: 3rem;
            font-size: 0.8rem;
            background: var(--main-to-right);
            border-radius: 5px;
          }
          .ringvalue-container:hover {
            background: var(--table-bg);
            cursor: pointer;
          }
          .values {
            color: var(--primary-text);
            font-size: 0.8rem;
            font-style: italic;
          }
          .ring270 {
            border: 1px solid var(--text2);
          }
        `}
      </style>
    </>
  );
};

export default RingPanelComponent;
