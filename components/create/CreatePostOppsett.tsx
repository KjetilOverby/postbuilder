import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import useComponentDidMount from "../customHooks/UseComponentDidMount";
import dateFormat from "dateformat";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiAddToQueue, BiBookAdd } from "react-icons/bi";
import { ContextAppData } from "../../data/context/ContextAppData";
import { log } from "console";

const CreatePostOppsett = ({
  postInfo,
  skurlisteInfo,
  update,
  setUpdate,
  setPostInfo,
  updatePostHandler,
  rawOpen,
  setRawOpen,
  utfyllingBakOpen,
  setUtfyllingBakOpen,
  utfyllingForanOpen,
  setUtfyllingForanOpen,
  ringType,
  editBlink,
  utfyllingForanOpenHandler,
  utfyllingBakOpenHandler,
  rawOpenHandler,
  setRingType,
}: any) => {
  const { openEdit, setOpenEdit } = useContext(ContextAppData);
  const router = useRouter();

  const [localStargeItem, setLocalStargeItem] = useState<any>();
  const [parsedPost, setParsedPost] = useState<any>();
  const [rawRingsCalc, setRawRingsCalc] = useState<any>();
  const [bladesCalc, setBladesCalc] = useState<any>();
  const [bladStamme, setBladStamme] = useState<any>();
  const [antallBlades, setAntallBlades] = useState<any>();
  const [postCalc, setPostCalc] = useState<any>();
  const [vigg, setVigg] = useState<any>();
  const [utfyllingForan, setUtfyllingForan] = useState<any>();
  const [utfyllingBak, setUtfyllingBak] = useState<any>();

  const isComponentMounted = useComponentDidMount();

  const [updatePostCalc, setUpdatePostCalc] = useState(false);
  const [updateUtfylling, setUpdateUtfylling] = useState(false);

  const [ringID, setRingID] = useState();

  const [cancelEditPost, setCancelEditPost] = useState();

  useEffect(() => {
    if (postInfo) {
      setVigg(postInfo.rawInput.length * 1.4);
    }
  }, [postInfo, update]);

  useEffect(() => {
    if (postInfo) {
      setAntallBlades(postInfo.rawInput.length + 1);
    }
  }, [postInfo, update]);

  useEffect(() => {
    if (postInfo) {
      setBladStamme(postInfo.blades.bladStamme);
    }
  }, [postInfo, update]);

  useEffect(() => {
    if (postInfo) {
      setRawRingsCalc(
        postInfo.rawInput.reduce(
          (num: number, { input }: any) => Number(num) + Number(input),
          0
        )
      );
    }
  }, [postInfo, update]);

  const [startRingsCalc, setStartRingsCalc] = useState();
  const [startRingsMinusRawinput, setStartRingsMinusRwinput] = useState();

  useEffect(() => {
    if (postInfo) {
      setStartRingsCalc(
        postInfo.startRings.reduce(
          (num: number, { input }: any) => Number(num) + Number(input),
          0
        )
      );
    }
  }, [postInfo, update]);

  const [endRingsCalc, setEndRingsCalc] = useState();

  useEffect(() => {
    if (postInfo) {
      setEndRingsCalc(
        postInfo.endRings.reduce(
          (num: number, { input }: any) => Number(num) + Number(input),
          0
        )
      );
    }
  }, [postInfo, update]);

  /* useEffect(() => {
  setStartRingsMinusRwinput(utfyllingForan - startRingsCalc)
  }); */

  useEffect(() => {
    if (postInfo) {
      setBladesCalc(antallBlades * bladStamme + vigg);
      setUpdatePostCalc(!updatePostCalc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bladStamme, ringID, update]);

  useEffect(() => {
    if (bladesCalc) {
      setPostCalc(Number(bladesCalc) + Number(rawRingsCalc));
      setUpdateUtfylling(!updateUtfylling);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePostCalc, update]);

  useEffect(() => {
    if (bladesCalc) {
      setUtfyllingForan(200 - postCalc / 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateUtfylling, update]);
  useEffect(() => {
    if (bladesCalc) {
      setUtfyllingBak(217.2 - postCalc / 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateUtfylling, update]);

  // *********************** Delete from postinfo *************************

  // const testHeader = () => {
  //   setPostInfo({ ...postInfo, header: "this is!" });
  // };

  useEffect(() => {
    if (postInfo) {
      if (ringType === "startRings") {
        const newList = postInfo.startRings.filter(
          (item: any) => item._id !== ringID
        );
        setPostInfo({ ...postInfo, startRings: newList });
      } else if (ringType === "endRings") {
        const newList = postInfo.endRings.filter(
          (item: any) => item._id !== ringID
        );
        setPostInfo({ ...postInfo, endRings: newList });
      } else if (ringType === "rawInput") {
        const newList = postInfo.rawInput.filter(
          (item: any) => item._id !== ringID
        );
        setPostInfo({ ...postInfo, rawInput: newList });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringID]);

  const openEditHandler = () => {
    setOpenEdit(true);
    setCancelEditPost(postInfo);
  };

  const cancelEditMode = () => {
    setOpenEdit(false);
    setPostInfo(cancelEditPost);
    //setEditBlink({ startRings: "" });
  };

  const [ringPanelNumber, setRingPanelNumber] = useState();

  useEffect(() => {
    if (ringPanelNumber && ringType === "startRings") {
      setPostInfo({
        ...postInfo,
        startRings: [...postInfo.startRings, { input: ringPanelNumber }],
      });
    } else if (ringPanelNumber && ringType === "endRings") {
      setPostInfo({
        ...postInfo,
        endRings: [...postInfo.endRings, { input: ringPanelNumber }],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringType, ringPanelNumber]);

  return (
    <>
      {/* <OpenEditComponent openEdit={openEdit}>
        <LeftSidepanelEdit cancel={cancelEditMode} editModeStartRings={editModeStartRings} editModeEndRings={editModeEndringsHandler} editModeRawInput={editModeRawinputHandler} editBlink={editBlink} setRingPanelNumber={setRingPanelNumber} setUpdate={setUpdate} update={update} setPostInfo={setPostInfo} postInfo={postInfo}
        updatePostHandler={updatePostHandler}
    
        />
      </OpenEditComponent> */}

      <div className="">
        <div className="grid place-items-center h-screen">
          <div className="absolute postoppsettHeader">
            <h1 className="post-header text-xl  md:text-1xl lg:text-4xl font-thin">
              {postInfo && postInfo.header}{" "}
            </h1>
            <p className="text-slate-600 text-xs italic">
              Post opprettet:{" "}
              {postInfo && postInfo.date
                ? dateFormat(postInfo.date, "dd.mm.yyyy, HH:MM")
                : "ukjent"}
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div className="flex items-center animate-container">
              <div className="flex relative fillrings-container">
                {/*  <p style={{position: 'absolute', top: '15rem', fontSize: '2rem', color: 'orange'}}>{startRingsMinusRawinput && startRingsMinusRawinput.toFixed(2)}</p> */}
                {postInfo &&
                  postInfo.startRings.map((item: any) => {
                    const startRingsHandler = () => {
                      setRingID(item._id);
                      setRingType("startRings");
                      setUpdate(!update);
                    };
                    return (
                      <>
                        <div
                          onClick={
                            openEdit ? utfyllingForanOpenHandler : undefined
                          }
                          className={`outerRingContainer fillringcontainer ${editBlink.startRings}`}>
                          <>
                            {editBlink.startRings === "editModeStartRings" && (
                              <RiDeleteBinLine
                                onClick={startRingsHandler}
                                style={{
                                  position: "absolute",
                                  bottom: "8rem",
                                  fontSize: "1.5rem",
                                  color: "indianred",
                                }}
                              />
                            )}
                          </>

                          <div
                            key={item._id}
                            className="ringcomponent fillrings">
                            {item.input}
                          </div>
                        </div>
                      </>
                    );
                  })}

                {/* ********************** under line front ************************ */}
                <div className="calculate-line all-length-line">
                  <div
                    className={`fill-calculate-box ${
                      startRingsCalc && utfyllingForan - startRingsCalc == 0
                        ? "fill-ok"
                        : "fill-not-ok"
                    }`}>
                    <h4>
                      Sum: {Number(startRingsCalc && startRingsCalc).toFixed(2)}
                    </h4>
                    <h4>
                      Diff:{" "}
                      {startRingsCalc &&
                        Number(utfyllingForan - startRingsCalc).toFixed(2)}
                    </h4>
                  </div>

                  <p className="postcalc-number">
                    {utfyllingForan && utfyllingForan.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex relative">
                {postInfo &&
                  postInfo.rawInput.map((item: any) => {
                    const rawInputHandler = () => {
                      setRingID(item._id);
                      setRingType("rawInput");
                    };
                    return (
                      <>
                        <div
                          onClick={openEdit ? rawOpenHandler : undefined}
                          className={`outerRingContainer centerringcontainer ${editBlink.rawInput}`}>
                          <>
                            {editBlink.rawInput === "editModeRawInput" && (
                              <RiDeleteBinLine
                                onClick={rawInputHandler}
                                style={{
                                  position: "absolute",
                                  bottom: "8rem",
                                  fontSize: "1.5rem",
                                  color: "indianred",
                                }}
                              />
                            )}
                          </>

                          <p className="absolute rawInput">{item.input}</p>
                          <div
                            key={item._id}
                            className="ringcomponent rawrings">
                            <BiAddToQueue
                              style={{
                                position: "absolute",
                                top: "8rem",
                                fontSize: "1.5rem",
                                color: "green",
                              }}
                            />

                            {(item.input && item.input + 1.4).toFixed(1)}
                          </div>
                          {item.ring && (
                            <div className="shims-container">
                              <p className="shims shims1">{item.ring}</p>
                              <p className="shims shims2">
                                {(
                                  item.input +
                                  1.4 -
                                  item.ring -
                                  Number(
                                    item.shims2 != undefined && item.shims2
                                  )
                                ).toFixed(1)}
                              </p>
                              <p className="shims shims3">
                                {item.shims2 != undefined &&
                                  item.shims2 -
                                    Number(
                                      item.shims3 != undefined && item.shims3
                                    )}
                              </p>
                              <p className="shims">
                                {item.shims3 &&
                                  (item.shims2 - item.shims3).toFixed(1)}
                              </p>
                            </div>
                          )}
                          <div className="sawBlade bg-slate-500">
                            <p className="bladstamme">
                              {postInfo.blades.bladStamme.toFixed(1)}
                            </p>
                            <p className="sagsnitt">
                              {postInfo &&
                                (postInfo.blades.bladStamme + 1.4).toFixed(1)}
                            </p>
                          </div>
                        </div>

                        {/* ********************** under line center ************************ */}
                        <div className="calculate-line all-length-line">
                          <p className="postcalc-number">
                            {postCalc && postCalc.toFixed(2)}
                          </p>
                        </div>
                      </>
                    );
                  })}
              </div>
              <div className="relative">
                <div className="sawBlade2 bg-slate-500">
                  <p className="bladstamme">
                    {postInfo && postInfo.blades.bladStamme.toFixed(1)}
                  </p>
                  <p className="sagsnitt">
                    {postInfo && (postInfo.blades.bladStamme + 1.4).toFixed(1)}
                  </p>
                </div>
              </div>

              <div className="flex relative fillrings-container">
                {postInfo &&
                  postInfo.endRings.map((item: any) => {
                    const endRingsHandler = () => {
                      setRingID(item._id);
                      setRingType("endRings");
                    };
                    return (
                      <>
                        <div
                          onClick={
                            openEdit ? utfyllingBakOpenHandler : undefined
                          }
                          className={`outerRingContainer ${editBlink.endRings}`}>
                          <>
                            {editBlink.endRings === "editModeEndRings" && (
                              <RiDeleteBinLine
                                onClick={endRingsHandler}
                                style={{
                                  position: "absolute",
                                  bottom: "8rem",
                                  fontSize: "1.5rem",
                                  color: "indianred",
                                  zIndex: "1000",
                                }}
                              />
                            )}
                          </>

                          <div
                            key={item._id}
                            className="ringcomponent fillrings">
                            {item.input}
                          </div>
                        </div>
                      </>
                    );
                  })}

                {/* ********************** under line end ************************ */}
                <div className="calculate-line all-length-line">
                  <div
                    className={`fill-calculate-box fill-bak-box ${
                      endRingsCalc && utfyllingBak - endRingsCalc == 0
                        ? "fill-ok"
                        : "fill-not-ok"
                    }`}>
                    <h4>
                      Sum: {Number(endRingsCalc && endRingsCalc).toFixed(2)}
                    </h4>
                    <h4>
                      Diff:{" "}
                      {endRingsCalc &&
                        Number(utfyllingBak - endRingsCalc).toFixed(2)}
                    </h4>
                  </div>
                  <p className="postcalc-number">
                    {utfyllingBak && utfyllingBak.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*   <div
            onClick={openEditHandler}
            className="icon-container"
          >
            <FaUserEdit
              style={{
                fontSize: "2rem",
                color: "grey",
              }}
            />
          </div> */}
        </div>
      </div>
      <style jsx>
        {`
          .postoppsettHeader {
            transform: translateX(-50%);
            left: 50%;
            top: 5rem;
            font-size: 2rem;
          }
          .post-header {
            color: var(--center);
          }
          .animate-container {
            animation: fadeIn 1.2s;
          }
          .ringcomponent {
            border: 1px solid grey;
            height: 11rem;
            width: 5rem;
            display: grid;
            place-items: center;
            border-radius: 5px;
            color: #333;
            font-size: 1.5rem;
          }
          .fill-ok {
            background: seagreen;
            padding: 0.5rem;
            border-radius: 5px;
          }
          .fill-not-ok {
            background: red;
            padding: 0.5rem;
            border-radius: 5px;
          }
          .fill-bak-box {
            right: 0;
          }
          .fill-calculate-box {
            position: absolute;
            bottom: 6rem;
            color: white;
          }
          .fillrings {
            background-image: linear-gradient(to top, #3fd2c7 0%, #99ddff 100%);
            background: var(--outer2);
            color: var(--outer-text2);
          }
          .fillrings-container {
            min-width: 10rem;
          }
          .rawrings {
            background-image: linear-gradient(45deg, #de9e48 0%, #e1e2e2 100%);
            background: var(--center2);
            color: var(--center-text2);
          }
          .outerRingContainer {
            height: 11.4rem;
            width: 5.4rem;
            border: 1px solid grey;
            display: grid;
            place-items: center;
            margin-right: 4px;
            border-radius: 5px;
            position: relative;
          }
          .sawBlade {
            position: absolute;
            height: 30rem;
            width: 0.3rem;
            left: -5px;
            border: 0.5px solid lightgrey;
          }
          .sawBlade2 {
            height: 30rem;
            width: 0.3rem;
            position: absolute;
            left: -4px;
            top: -15rem;
            border: 0.5px solid lightgrey;
            z-index: 10;
          }
          .rawInput {
            top: -24px;
            font-size: 0.8rem;
            color: lightgrey;
          }
          .shims-container {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            bottom: -85px;
            height: 5rem;
            font-size: 0.5rem;
          }
          .shims {
            color: black;
            font-size: 0.8rem;
            color: lightgrey;
          }
          .bladstamme {
            position: absolute;
            bottom: -18px;
            font-size: 0.8rem;
            right: -8px;
            color: lightgrey;
          }
          .sagsnitt {
            position: absolute;
            top: -18px;
            font-size: 0.8rem;
            right: -8px;
            color: lightgrey;
          }
          .icon-container {
            position: absolute;
            left: 15px;
            bottom: 15px;
            z-index: 100;
          }
          .icon-container:hover {
            cursor: pointer;
          }

          // underlines

          .all-length-line {
            width: 100%;
            height: 2px;
            background: white;
            position: absolute;
            top: 24rem;
          }
          .calculate-line {
            width: 100%;
            height: 2px;
            background: white;
            position: absolute;
          }
          .calculate-line::before {
            content: "";
            width: 1px;
            height: 15px;
            background: white;
            position: absolute;
            top: -7px;
            padding: 0 2px;
          }
          .calculate-line::after {
            content: "";
            width: 1px;
            height: 15px;
            background: white;
            position: absolute;
            top: -7px;
            right: 0px;
            padding: 0 2px;
          }
          .postcalc-number {
            position: absolute;
            color: white;
            left: 50%;
            top: -30px;
            font-weight: 100;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes rubberBand {
            0% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
            30% {
              -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
            }
            40% {
              -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
            }
            50% {
              -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
            }
            65% {
              -webkit-transform: scale3d(0.95, 1.05, 1);
              transform: scale3d(0.95, 1.05, 1);
            }
            75% {
              -webkit-transform: scale3d(1.05, 0.95, 1);
              transform: scale3d(1.05, 0.95, 1);
            }
            100% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }
          @media only screen and (max-width: 1000px) {
            .ringcomponent {
              height: 6rem;
              width: 2.8rem;

              font-size: 0.8rem;
            }

            .outerRingContainer {
              height: 6.5rem;
              width: 3.3rem;
              margin-right: 5px;
            }
            .sawBlade {
              height: 15rem;
              width: 0.2rem;
              left: -5px;
            }
            .sawBlade2 {
              height: 15rem;
              width: 0.2rem;
              top: -7.5rem;
            }
            .postoppsettHeader {
              top: 15px;
            }
            .shims {
              font-size: 10px;
            }
            .rawInput {
              font-size: 10px;
              color: lightgrey;
              top: -15px;
            }
            .bladstamme {
              font-size: 10px;
              bottom: -15px;
              left: -5px;
            }
            .sagsnitt {
              font-size: 10px;
              top: -14px;
              left: -5px;
            }
          }
          @media only screen and (max-width: 656px) {
            .postoppsettHeader {
              top: 150px;
            }
            .ringcomponent {
              height: 4rem;
              width: 2rem;

              font-size: 0.8rem;
            }

            .outerRingContainer {
              height: 4rem;
              width: 2rem;
              border: none;
              margin-right: 1px;
            }
            .sawBlade {
              height: 10rem;
              width: 0.1rem;
              left: -2px;
            }
            .sawBlade2 {
              height: 10rem;
              width: 0.1rem;
              top: -5rem;
              left: -2px;
            }
            .shims {
              font-size: 7px;
            }
            .rawInput {
              font-size: 7px;
              color: lightgrey;
              top: -15px;
            }
            .bladstamme {
              font-size: 7px;
              bottom: -12px;
              left: -5px;
            }
            .sagsnitt {
              font-size: 7px;
              top: -10px;
              left: -5px;
            }
          }
          .editModeStartRings {
            background: orange;
          }
          .editModeEndRings {
            background: orange;
          }
          .editModeRawInput {
            background: orange;
          }
        `}
      </style>
    </>
  );
};

export default CreatePostOppsett;
