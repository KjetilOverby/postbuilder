import React from "react";
import RingPanelComponent from "../postoppsett/RingPanelComponent";

const CreateShimsModal = ({
  newArray,
  filteredData,
  ringList,
  setShimsValue,
  setOpenShims,
  openShims,
}: any) => {
  return (
    <>
      <div className="main-container">
        {/* <div className="ringpanel-container">
          <RingPanelComponent
            list={ringList}
            setRingPanelNumber={setShimsValue}
            setUpdateShims={setUpdateShims}
            updateShims={updateShims}
          />
          <button
            onClick={() => setOpenShims(!openShims)}
            className="text-slate-200">
            Avbryt
          </button>
        </div> */}
        {/* <div className="ring-container">
          <p className="text-slate-200">{filteredData[0].input}</p>
          <p className="text-slate-300">
            {newArray && newArray[0] !== undefined && newArray[0].ring}
          </p>
        </div> */}
      </div>
      <style jsx>
        {`
          .main-container {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            z-index: 11000;
            background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
            display: grid;
            place-items: center;
            grid-template-columns: 1fr 1fr;
            padding; 0 60rem
          }
          .ring-container {
            border: 1px solid white;
            width: 3rem;
            height: 6rem;
            display: grid;
            place-items: center;
            border-radius: 5px;
          }
          .ringpanel-container {
            width: 10rem;
          }
        `}
      </style>
    </>
  );
};

export default CreateShimsModal;
