import React, { useState, useEffect } from "react";
import InputComponent from "./InputComponent";
import InputTable from "./InputTable";

const ListerMainPage = () => {
  const [listInputData, setListInputData] = useState({
    treslag: "",
    klasse: "",
    klType: "",
    ant: 0,
    m3: 0,
    status: "",
    post: "",
    breddePost: "",
    xLog: "",
    prosent: "",
    anm: "",
    anm2: "",
    vs66: "",
    vs66Xtra: "",
    vs66XtraBr: "",
    blad: "",
    mkvBord: "",
    mkvBr: "",
  });

  // useEffect(() => {
  //   setListInputData({ treslag: "Furu", klasse: "20", klasseType: "Panel" });
  // }, []);

  return (
    <>
      <div className="lister-container">
        <div className="bg-green-500">
          <InputComponent setListInputData={setListInputData} />
        </div>
        <div>
          <InputTable listInputData={listInputData} />
        </div>
      </div>
      <style jsx>
        {`
          .lister-container {
            display: grid;
            grid-template-columns: 35rem 1fr;
            grid-gap: 5px;
          }
        `}
      </style>
    </>
  );
};

export default ListerMainPage;
