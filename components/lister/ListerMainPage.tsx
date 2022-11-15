import React, { useState, useEffect } from "react";
import SkurlisteComponent from "../startpage/SkurlisteComponent";
import InputComponent from "./InputComponent";
import InputTable from "./InputTable";
import axios from "axios";


const api = axios.create({
  baseURL: process.env.api,
});

const ListerMainPage = ({skurliste, setSkurlisteInfo, skurlisteInfo, setUpdate, update}:any) => {
  const [ListeBuffer, setListeBuffer] = useState(false)
  const [editMode, setEditMode] = useState('')
  
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

  const copyHandler = () => {
    setListInputData(skurlisteInfo)
    setEditMode('Kopi til ny post')
  
  }
  const resetListHandler = () => {
    setListInputData('')
    setEditMode('')
    setListeBuffer(false)
    
  }

  const editHandler = () => {
    setEditMode(`Rediger klasse: ${skurlisteInfo.klasse}, antall: ${skurlisteInfo.ant}, m3: ${skurlisteInfo.m3}`)
  }

  const createFieldHandler = () => {

    api
    .post(`/api/skurlister/createField`, {
      treslag: listInputData.treslag,
      klasse: listInputData.klasse,
      kltype: listInputData.klType,
      ant: listInputData.ant,
      m3: listInputData.m3,
      status:listInputData.status,

     post: listInputData.post,
     breddePost: listInputData.breddePost,
     prosent: listInputData.prosent
    })
    .then(function (response) {
     console.log(response);
     setUpdate(!update)
     
    });
  }
  


  
  return (
    <>

      <div className="lister-container">
        <div>
          <InputComponent listInputData={listInputData} setListInputData={setListInputData} resetListHandler={resetListHandler} createFieldHandler={createFieldHandler} />
         
        </div>
        <div className="list-container">
          <p className="text-red-400">{editMode}</p>
          <InputTable listInputData={listInputData} />
          <div>
            <SkurlisteComponent setListeBuffer={setListeBuffer} skurliste={skurliste} setSkurlisteInfo={setSkurlisteInfo} />
          </div>
          {ListeBuffer && (
          <div className="edit-container">
            <p className="mb-5">Valgt post</p>
          <InputTable listInputData={skurlisteInfo} />
         

          <div className="grid grid-cols-4">
            <button onClick={editHandler}>Rediger</button>
            <button onClick={copyHandler}>Kopier</button>
            <button>Slett</button>
            <button onClick={() => setListeBuffer(false)}>Avbryt</button>
          </div>

         
          </div>
            )}
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
