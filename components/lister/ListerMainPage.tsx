import React, { useState, useEffect } from "react";
import SkurlisteComponent from "../startpage/SkurlisteComponent";
import InputComponent from "./InputComponent";
import InputTable from "./InputTable";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.api,
});

const ListerMainPage = ({
  skurliste,
  setSkurlisteInfo,
  skurlisteInfo,
  setUpdate,
  update,
}: any) => {
  const [ListeBuffer, setListeBuffer] = useState(false);
  const [editMode, setEditMode] = useState("");
  const [sagblad, setSagblad] = useState<string>("");

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
    vs66Br: "",
    vs66Xtra: "",
    vs66XtraBr: "",
    blad: "",
    mkvBord: "",
    mkvBr: "",
    date: "",
  });

  const copyHandler = () => {
    setListInputData(skurlisteInfo);
    setEditMode("Kopi til ny post");
  };
  const resetListHandler = () => {
    setListInputData("");
    setEditMode("");
    setListeBuffer(false);
  };

  const editHandler = () => {
    setEditMode(
      `Rediger klasse: ${skurlisteInfo.klasse}, antall: ${skurlisteInfo.ant}, m3: ${skurlisteInfo.m3}`
    );
  };
  useEffect(() => {
    if (listInputData.breddePost > 50 && listInputData.breddePost <= 130) {
      setSagblad("4.0");
    } else if (
      listInputData.breddePost > 130 &&
      listInputData.breddePost <= 160
    ) {
      setSagblad("4.2");
    } else if (
      listInputData.breddePost > 160 &&
      listInputData.breddePost <= 175
    ) {
      setSagblad("4.4");
    } else if (listInputData.breddePost > 175) {
      setSagblad("4.6");
    }
  }, [listInputData]);

  const createFieldHandler = async () => {
    try {
      const response = await api
        .post(`/api/skurlister/createField`, {
          treslag: listInputData.treslag,
          klasse: listInputData.klasse,
          kltype: listInputData.klType,
          ant: listInputData.ant,
          m3: listInputData.m3,
          status: listInputData.status,

          post: listInputData.post,
          breddePost: listInputData.breddePost,
          xLog: listInputData.xLog,
          prosent: listInputData.prosent,
          anm: listInputData.anm,
          vs66: listInputData.vs66,
          vs66Xtra: listInputData.vs66Xtra,
          vs66Br: listInputData.vs66Br,
          vs66XtraBr: listInputData.vs66XtraBr,
          blad: sagblad,
          mkvBord: listInputData.mkvBord,
          mkvBr: listInputData.mkvBr,
          date: new Date(),
        })
        .then(() => {
          setUpdate(!update);
        });
    } catch (error: any) {
      console.log(error.response.body);
    }
  };

  return (
    <>
      <div className="lister-container">
        <div>
          <InputComponent
            listInputData={listInputData}
            setListInputData={setListInputData}
            resetListHandler={resetListHandler}
            createFieldHandler={createFieldHandler}
          />
        </div>
        <div className="list-container">
          <p className="text-red-400">{editMode}</p>

          <InputTable listInputData={listInputData} sagblad={sagblad} />
          <div>
            <h1>Skurplan</h1>
            <SkurlisteComponent
              listeBuffer={true}
              setListeBuffer={setListeBuffer}
              skurliste={skurliste}
              setSkurlisteInfo={setSkurlisteInfo}
            />
          </div>
          {ListeBuffer && (
            <div className="edit-container">
              <p className="mb-5">Valgt post fra skurplan</p>
              <InputTable listInputData={skurlisteInfo} />

              <div className="grid grid-cols-10">
                <form className="grid place-items-center grid-cols-3 w-20 mb-3">
                  <label className="w-5 h-5 bg-white grid place-content-center rounded-full">
                    <input name="progress" type="radio" />
                  </label>
                  <label className="w-5 h-5 bg-green-500 grid place-content-center rounded-full">
                    <input name="progress" type="radio" />
                  </label>
                  <label className="w-5 h-5 bg-red-400 grid place-content-center rounded-full">
                    <input name="progress" type="radio" />
                  </label>
                </form>
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
            background: green;
          }
          .edit-container {
            background: lightgrey;
            padding: 1rem;
            widht: 100%;
            left: 0;
          }
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: red;
          }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default ListerMainPage;
