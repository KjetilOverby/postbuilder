import React, { useState, useEffect } from "react";
import SkurlisteComponent from "../startpage/SkurlisteComponent";
import InputComponent from "./InputComponent";
import InputTable from "./InputTable";
import axios from "axios";
import ListSort from "./ListSort";
import { v4 as uuidv4, v4 } from "uuid";

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
  const [fieldID, setFieldID] = useState();
  const [progress, setProgress] = useState();
  const [updateMode, setUpdateMode] = useState<boolean>();
  const [chosen, setChosen] = useState("");
  const [dragDropOpen, setDragDropOpen] = useState(false);
  const [list, setList] = useState<any>([]);
  const [listFinished, setListFinished] = useState([]);

  const saveChanges = async () => {
    deleteAllList();
    setTimeout(() => {
      saveAllList();
      setTimeout(() => {
        setDragDropOpen(false);
        setUpdate(!update);
      }, 300);
    }, 300);
  };

  useEffect(() => {
    setListFinished(
      list.map(function (item: any) {
        delete item._id;
        return item;
      })
    );
  }, [list]);

  const saveAllList = async () => {
    api.post("/api/skurlister/insertListMany", listFinished).catch((error) => {
      console.error("Error inserting documents:", error);
    });
  };
  const deleteAllList = () => {
    api.post("/api/skurlister/deleteAllList", {});
  };

  const [disabled, setDisabled] = useState({
    text: "disabledText",
    status: true,
  });

  const [buffer1, setBuffer1] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/api/skurlister/fieldBuffer");
        setBuffer1(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

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
  const cancelHandler = () => {
    setListeBuffer(false);
    setEditMode("");
    setUpdateMode(false);
  };

  const copyHandler = () => {
    setListInputData(skurlisteInfo);
    setEditMode("Kopi til ny post");
    setUpdateMode(false);
    setListeBuffer(false);
  };

  const resetListHandler = () => {
    setListInputData({
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
    setEditMode("");
    setListeBuffer(false);
    setDisabled({ text: "disabledText", status: true });
  };

  const editHandler = () => {
    setEditMode(
      `Rediger klasse: ${skurlisteInfo.klasse}, antall: ${skurlisteInfo.ant}, m3: ${skurlisteInfo.m3}`
    );
    setUpdateMode(true);
    setListInputData(skurlisteInfo);
  };

  const updateFieldHandler = async () => {
    const response = await api
      .patch(`/api/skurlister/updateField?ids=${fieldID}`, {
        treslag: listInputData.treslag,
        klasse: listInputData.klasse,
        klgr: listInputData.klgr,
        klType: listInputData.klType,
        ant: listInputData.ant,
        m3: listInputData.m3,
        status: listInputData.status,
        post: listInputData.post,
        breddePost: listInputData.breddePost,
        xLog: listInputData.xLog,
        prosent: listInputData.prosent,
        anm: listInputData.anm,
        anm2: listInputData.anm2,
        vs66: listInputData.vs66,
        vs66Br: listInputData.vs66Br,
        vs66Xtra: listInputData.vs66xtra,
        vs66XtraBr: listInputData.vs66XtraBr,
        blad: listInputData.sagblad,
        mkvBord: listInputData.mkvBord,
        mkvBr: listInputData.mkvBr,
        date: new Date(),
        progress: progress,
      })
      .then(() => {
        setUpdateMode(false);
        setUpdate(!update);
        setListeBuffer(false);
        setEditMode("");
      });
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

  useEffect(() => {
    if (
      listInputData.post &&
      listInputData.breddePost &&
      listInputData.prosent &&
      listInputData.klasse
    ) {
      setDisabled({ text: "", status: false });
    }
  }, [listInputData]);

  const updateProgressFinished = async () => {
    const response = await api
      .patch(`/api/skurlister/updateField?ids=${fieldID}`, {
        progress: "finished",
      })
      .then(() => {
        setUpdate(!update);
        setListeBuffer(false);
      });
  };

  const updateProgressRunning = async () => {
    const response = await api
      .patch(`/api/skurlister/updateField?ids=${fieldID}`, {
        progress: "running",
      })
      .then(() => {
        setUpdate(!update);
        setListeBuffer(false);
      });
  };

  const updateProgressNeutreal = async () => {
    const response = await api
      .patch(`/api/skurlister/updateField?ids=${fieldID}`, {
        progress: "",
      })
      .then(() => {
        setUpdate(!update);
        setListeBuffer(false);
      });
  };

  const deleteFieldHandler = async () => {
    try {
      const response = await api
        .delete(`/api/skurlister/deleteField/?del=${fieldID}`)

        .then((res) => {
          res.headers;
          setUpdate(!update);
          setListeBuffer(false);
          setEditMode("");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const createFieldHandler = async () => {
    if (
      !listInputData.post.includes("1x") &&
      !listInputData.post.includes("2x") &&
      !listInputData.post.includes("3x") &&
      !listInputData.post.includes("4x") &&
      !listInputData.post.includes("5x") &&
      !listInputData.post.includes("6x")
    ) {
      alert("Postuttak må begynne med 1-6x, bruk liten x");
    } else {
      try {
        const response = await api
          .post(`/api/skurlister/createField?ids=${fieldID}`, {
            treslag: listInputData.treslag,
            klasse: listInputData.klasse,
            klType: listInputData.klType,
            ant: listInputData.ant,
            m3: listInputData.m3,
            status: listInputData.status,

            post: listInputData.post,
            breddePost: listInputData.breddePost,
            xLog: listInputData.xLog,
            prosent: listInputData.prosent,
            anm: listInputData.anm,
            anm2: listInputData.anm2,
            vs66: listInputData.vs66,
            vs66Xtra: listInputData.vs66Xtra,
            vs66Br: listInputData.vs66Br,
            vs66XtraBr: listInputData.vs66XtraBr,
            blad: sagblad,
            mkvBord: listInputData.mkvBord,
            mkvBr: listInputData.mkvBr,
            date: new Date(),
            id: uuidv4(),
          })
          .then(() => {
            setDisabled({ text: "disabledText", status: true });
            setListInputData({ ...listInputData, klasse: "", ant: "", m3: "" });
            setUpdate(!update);
            setListeBuffer(false);
          });
      } catch (error: any) {
        console.log(error.response.body);
      }
    }
  };

  const createFieldBufferHandler = async () => {
    try {
      const response = await api
        .post(`/api/skurlister/createFieldBuffer`, {
          treslag: skurlisteInfo.treslag,
          klasse: skurlisteInfo.klasse,
          klType: skurlisteInfo.klType,
          ant: skurlisteInfo.ant,
          m3: skurlisteInfo.m3,
          status: skurlisteInfo.status,

          post: skurlisteInfo.post,
          breddePost: skurlisteInfo.breddePost,
          xLog: skurlisteInfo.xLog,
          prosent: skurlisteInfo.prosent,
          anm: skurlisteInfo.anm,
          anm2: skurlisteInfo.anm2,
          vs66: skurlisteInfo.vs66,
          vs66Xtra: skurlisteInfo.vs66Xtra,
          vs66Br: skurlisteInfo.vs66Br,
          vs66XtraBr: skurlisteInfo.vs66XtraBr,
          blad: sagblad,
          mkvBord: skurlisteInfo.mkvBord,
          mkvBr: skurlisteInfo.mkvBr,
          date: new Date(),
        })
        .then(() => {
          setUpdate(!update);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFieldBufferHandler = async () => {
    try {
      const response = await api
        .delete(`/api/skurlister/deleteFieldBuffer/?del=${fieldID}`)

        .then((res) => {
          setUpdate(!update);
          setListeBuffer(false);
          setEditMode("");
        });
    } catch (error) {
      console.log(error);
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
            disabled={disabled}
            updateFieldHandler={updateFieldHandler}
            updateMode={updateMode}
          />
          <div className="mt-5">
            <h1 className="lister-text">Bufrede klasser</h1>
            {buffer1 &&
              buffer1.map((item: any) => {
                const getBufferHandler = () => {
                  setSkurlisteInfo(item);
                  setListeBuffer(true);
                  setChosen("buffer");
                  setFieldID(item._id);
                };
                return (
                  <div
                    key={item._id}
                    onClick={getBufferHandler}
                    className="buffer-item flex mb-3 p-2 rounded-md hover:cursor-pointer hover:bg-slate-600 text-slate-100"
                  >
                    <p className="mr-2">{item.treslag}</p>
                    <p className="mr-2">{item.klasse}</p>
                    <p className="mr-2">
                      {item.post}x{item.breddePost}-{item.prosent}
                    </p>
                    <p className="mr-2">ant: {item.ant}</p>
                    <p className="mr-2">m3: {item.m3}</p>
                    {item.anm && <p className="mr-2">anm: {item.anm}</p>}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="list-container">
          <p className="text-red-400">{editMode}</p>

          <InputTable listInputData={listInputData} sagblad={sagblad} />
          <div>
            <div>
              <button
                className="btn"
                onClick={() => setDragDropOpen(!dragDropOpen)}
              >
                {dragDropOpen ? "Avbryt" : "Sorter"}
              </button>
              {dragDropOpen && (
                <button onClick={saveChanges} className="btn">
                  Lagre Endringer
                </button>
              )}
            </div>
            <h1 className="lister-text">Skurplan</h1>
            {dragDropOpen ? (
              <ListSort skurliste={skurliste} setList={setList} list={list} />
            ) : (
              <SkurlisteComponent
                listeBuffer={true}
                setListeBuffer={setListeBuffer}
                skurliste={skurliste}
                setSkurlisteInfo={setSkurlisteInfo}
                setFieldID={setFieldID}
                setChosen={setChosen}
              />
            )}
          </div>
          {ListeBuffer && (
            <div className="edit-container">
              <p className="mb-5">Valgt post fra {chosen}</p>
              <InputTable listInputData={skurlisteInfo} />

              <div className="grid grid-cols-8">
                {chosen === "skurliste" ? (
                  <form className="grid place-items-center grid-cols-3 w-20 mb-3">
                    <div
                      onClick={updateProgressNeutreal}
                      className="w-5 h-5 bg-white grid place-content-center rounded-full"
                    ></div>
                    <div
                      onClick={updateProgressRunning}
                      className="w-5 h-5 bg-green-500 grid place-content-center rounded-full"
                    ></div>
                    <div
                      onClick={updateProgressFinished}
                      className="w-5 h-5 bg-red-400 grid place-content-center rounded-full"
                    ></div>
                  </form>
                ) : (
                  ""
                )}
                {chosen === "skurliste" ? (
                  <button onClick={editHandler}>Rediger</button>
                ) : (
                  ""
                )}

                <button onClick={copyHandler}>Kopier</button>
                {chosen === "buffer" ? (
                  <button onClick={deleteFieldBufferHandler}>
                    Slett fra buffer
                  </button>
                ) : (
                  <button onClick={deleteFieldHandler}>
                    Slett fra skurliste
                  </button>
                )}

                <button onClick={cancelHandler}>Avbryt</button>
                {chosen === "skurliste" ? (
                  <button onClick={createFieldBufferHandler}>Til buffer</button>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>
        {`
          button {
            color: var(--primary-text);
          }
          .btn {
            border: 1px solid var(--text);
            padding: 5px;
            width: 10rem;
            border-radius: 5px;
            margin-right: 1rem;
            margin-bottom: 1rem;
            transition: 0.5s;
          }
          .btn:hover {
            background: var(--hover);
          }
          .buffer-item {
            background: var(--hover);
          }
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
            background: var(--table-bg);
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
          .lister-text {
            color: var(--primary-text);
          }
        `}
      </style>
    </>
  );
};

export default ListerMainPage;
