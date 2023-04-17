import React, { useState } from "react";

const RingPanelComponent = ({
  list,
  setRingPanelNumber,
  setUpdate,
  update,
  postInfo,
  setPostInfo,
}: any) => {
  return (
    <>
      <p className="values">Små ringer</p>
      <div className="ringlist-container">
        {list.small.map((item: any) => {
          const ringPanelNumberHandler = () => {
            setRingPanelNumber(item);
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
          return (
            <div
              key={item._id}
              onClick={() => setRingPanelNumber(item)}
              className="ringvalue-container">
              <p className="values">{item}</p>
            </div>
          );
        })}
      </div>
      <p className="values">Skims</p>
      <div className="ringlist-container">
        {list.shims.map((item: any) => {
          return (
            <div
              key={item._id}
              onClick={() => setRingPanelNumber(item)}
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
