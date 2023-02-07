import React from "react";
import RingPanelComponent from "../postoppsett/RingPanelComponent";

const CreateShimsModal = ({
  newArray,
  filteredData,
  ringList,
  setShimsValue,
}: any) => {
  return (
    <>
      <div className="main-container">
        <div className="ringpanel-container">
          <RingPanelComponent
            list={ringList}
            setRingPanelNumber={setShimsValue}
          />
        </div>
        <div className="ring-container">
          <p className="text-slate-200">{filteredData[0].input}</p>
          {/* <p className="text-slate-300">{newArray && newArray[0].input}</p> */}
        </div>
      </div>
      <style jsx>
        {`
          .main-container {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            z-index: 1000;
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
            display: grid;
            place-items: center;
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
