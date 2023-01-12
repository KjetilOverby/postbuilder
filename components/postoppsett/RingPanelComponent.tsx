import React from "react";

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
      <p className="text-teal-100">Små ringer</p>
      <div className="ringlist-container">
        {list.small.map((item: any) => {
          const smallRingsHandler = () => {
            setPostInfo({
              ...postInfo,
              startRings: [...postInfo.startRings, { input: item }],
            });
            setUpdate(!update);
          };
          return (
            <div
              key={item._id}
              onClick={() => setRingPanelNumber(item)}
              className="ringvalue-container">
              <p className="text-teal-100">{item}</p>
            </div>
          );
        })}
      </div>
      <p className="text-teal-100">Store ringer</p>
      <div className="ringlist-container">
        {list.big.map((item: any) => {
          return (
            <div
              key={item._id}
              onClick={() => setRingPanelNumber(item)}
              className="ringvalue-container">
              <p className="text-teal-100">{item}</p>
            </div>
          );
        })}
      </div>
      <p className="text-teal-100">Skims</p>
      <div className="ringlist-container">
        {list.shims.map((item: any) => {
          return (
            <div
              key={item._id}
              onClick={() => setRingPanelNumber(item)}
              className="ringvalue-container">
              <p className="text-teal-100">{item}</p>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .ringlist-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
            grid-gap: 5px;
            margin: 1rem 0;
          }
          .ringvalue-container {
            border: 1px solid var(--table-bg);
            display: grid;
            place-items: center;
            width: 3rem;
            font-size: 0.8rem;
          }
          .ringvalue-container:hover {
            background: var(--table-bg);
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default RingPanelComponent;
