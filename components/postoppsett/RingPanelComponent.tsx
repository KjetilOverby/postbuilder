import React, { useState } from "react";

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

  return (
    <>
      <p className="values">Små ringer</p>
      <div className="ringlist-container">
        {list.small.map((item: any) => {
          const ringPanelNumberHandler = () => {
            if (shimsNumber === 1) {
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
            if (shimsNumber === 1) {
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
      <p className="values">Skims</p>
      <div className="ringlist-container">
        {list.shims.map((item: any) => {
          const ringPanelNumberHandler = () => {
            if (shimsNumber === 1) {
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
            background: var(--primary);
            border-radius: 5px;
          }
          .ringvalue-container:hover {
            background: var(--table-bg);
            cursor: pointer;
          }
          .values {
            color: var(--primary-text);
          }
        `}
      </style>
    </>
  );
};

export default RingPanelComponent;
