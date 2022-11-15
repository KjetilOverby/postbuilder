import React, { useState, useEffect } from "react";
import SkurlisteComponent from "../startpage/SkurlisteComponent";
import InputComponent from "./InputComponent";
import InputTable from "./InputTable";

const ListerMainPage = ({skurliste, setSkurlisteInfo, skurlisteInfo}:any) => {
  const [listInputData, setListInputData] = useState<any>({
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
    vs66Br: '',
    vs66Xtra: "",
    vs66XtraBr: "",
    blad: "",
    mkvBord: "",
    mkvBr: "",
  });

 
  return (
    <>

      <div className="lister-container">
        <div>
          <InputComponent setListInputData={setListInputData} />
        </div>
        <div className="list-container">
          <InputTable listInputData={listInputData} />
          <div>
            <SkurlisteComponent skurliste={skurliste} setSkurlisteInfo={setSkurlisteInfo} />
          </div>
          <div className="edit-container">
            <p className="mb-5">Valgt post</p>
          <InputTable listInputData={skurlisteInfo} />
          <div className="grid grid-cols-4">
            <button>Rediger</button>
            <button>Kopier</button>
            <button>Slett</button>
            <button>Avbryt</button>
          </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .lister-container {
            display: grid;
            grid-template-columns: 35rem 1fr;
            grid-gap: 25px;
           
          }
          list-container {
            position: relative;
            background: green
          }
          .edit-container {
            
            background: lightgrey;
           padding: 1rem;
            widht: 100%;
            left: 0
            
          }
        `}
      </style>
    </>
  );
};

export default ListerMainPage;
