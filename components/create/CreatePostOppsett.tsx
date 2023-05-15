import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import useComponentDidMount from "../customHooks/UseComponentDidMount";
import dateFormat from "dateformat";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiAddToQueue, BiBookAdd } from "react-icons/bi";
import { ContextAppData } from "../../data/context/ContextAppData";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItemRings } from "./SortableItemRings";

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
  shimsOpenHandler,
  setRingType,
  detailsOpen,
  startRingsCalc,
  setStartRingsCalc,
  utfyllingForan,
  setUtfyllingForan,
  utfyllingBak,
  setUtfyllingBak,
  endRingsCalc,
  setEndRingsCalc,
  setRawRingID,
  utfyllingBakOpenHandler2,
  utfyllingForanOpenHandler2,
  originStartRings,
  originEndRings,
  startRingsCalc2,
  setStartRingsCalc2,
  utfyllingForanOpen2,
  endRingsCalc2,
  setEndRingsCalc2,
  utfyllingBakOpen2,
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

  const isComponentMounted = useComponentDidMount();

  const [updatePostCalc, setUpdatePostCalc] = useState(false);
  const [updateUtfylling, setUpdateUtfylling] = useState(false);

  const [ringID, setRingID] = useState();
  const [ringID2, setRingID2] = useState();

  const [startRingsMinusRawinput, setStartRingsMinusRwinput] = useState();

  const [rings, setRings] = useState<any>([]);
  const [endRings, setEndRings] = useState<any>([]);

  useEffect(() => {
    if (postInfo) {
      setRings(postInfo.startRings.map((item: any) => item));
    }
  }, [postInfo]);
  useEffect(() => {
    if (postInfo) {
      setEndRings(postInfo.endRings.map((item: any) => item));
    }
  }, [postInfo]);

  console.log(endRings);

  // ******************************************************

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

  useEffect(() => {
    if (postInfo) {
      setStartRingsCalc(
        postInfo.startRings.reduce(
          (num: number, { input }: any) => Number(num) + Number(input),
          0
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postInfo, update]);

  useEffect(() => {
    if (postInfo) {
      setStartRingsCalc2(
        postInfo.startRings2.reduce(
          (num: number, { input }: any) => Number(num) + Number(input),
          0
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postInfo, update]);

  useEffect(() => {
    if (postInfo) {
      setEndRingsCalc(
        postInfo.endRings.reduce(
          (num: number, { input }: any) => Number(num) + Number(input),
          0
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postInfo, update]);

  useEffect(() => {
    if (postInfo) {
      setEndRingsCalc2(
        postInfo.endRings2.reduce(
          (num: number, { input }: any) => Number(num) + Number(input),
          0
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      } else if (ringType === "endRings2") {
        const newList = postInfo.endRings2.filter(
          (item: any) => item._id !== ringID
        );
        setPostInfo({ ...postInfo, endRings2: newList });
      } else if (ringType === "startRings2") {
        const newList = postInfo.startRings2.filter(
          (item: any) => item._id !== ringID
        );
        setPostInfo({ ...postInfo, startRings2: newList });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringID]);

  useEffect(() => {
    if (postInfo) {
      if (ringType === "startRings") {
        const newList = postInfo.startRings.filter(
          (item: any) => item.id !== ringID2
        );
        setPostInfo({ ...postInfo, startRings: newList });
      } else if (ringType === "endRings") {
        const newList = postInfo.endRings.filter(
          (item: any) => item.id !== ringID2
        );
        setPostInfo({ ...postInfo, endRings: newList });
      } else if (ringType === "rawInput") {
        const newList = postInfo.rawInput.filter(
          (item: any) => item.id !== ringID2
        );
        setPostInfo({ ...postInfo, rawInput: newList });
      } else if (ringType === "endRings2") {
        const newList = postInfo.endRings2.filter(
          (item: any) => item.id !== ringID2
        );
        setPostInfo({ ...postInfo, endRings2: newList });
      } else if (ringType === "startRings2") {
        const newList = postInfo.startRings2.filter(
          (item: any) => item.id !== ringID2
        );
        setPostInfo({ ...postInfo, startRings2: newList });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringID2]);

  const bladStammeFixed =
    Number(postInfo && postInfo.blades.bladStamme) + Number(1.4);
  const [updateDrag, setUpdateDrag] = useState(true);

  function handleDragEnd(event: any) {
    console.log("DragEnd Called!");
    const { active, over } = event;
    if (active.id !== over.id) {
      setRings((items: any) => {
        const oldIndex = items.findIndex((item: any) => item.id === active.id);
        const newIndex = items.findIndex((item: any) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setUpdateDrag(!updateDrag);
  }
  function handleDragEndEndRings(event: any) {
    console.log("DragEndEndrings Called!");
    const { active, over } = event;
    if (active.id !== over.id) {
      setEndRings((items: any) => {
        const oldIndex = items.findIndex((item: any) => item.id === active.id);
        const newIndex = items.findIndex((item: any) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setUpdateDrag(!updateDrag);
  }

  useEffect(() => {
    setPostInfo({ ...postInfo, startRings: rings });
  }, [updateDrag]);

  return (
    <>
      <div className="">
        <div className="grid place-items-center h-screen">
          <div className="absolute postoppsettHeader">
            <h1 className="origin-header text-xl  md:text-1xl lg:text-2xl font-thin">
              {postInfo && postInfo.header}{" "}
            </h1>
            <p className="origin-header text-xs italic">
              Post opprettet:{" "}
              {postInfo && postInfo.date
                ? dateFormat(postInfo.date, "dd.mm.yyyy, HH:MM")
                : "ukjent"}
            </p>
            <p className="origin-header text-xs italic">
              Sist oppdatert:{" "}
              {postInfo && postInfo.editDate
                ? dateFormat(postInfo.editDate, "dd.mm.yyyy, HH:MM")
                : "ukjent"}
            </p>
            <div className={`${detailsOpen ? "mark" : ""}`}>
              <h1 className="post-header">
                {postInfo && postInfo.rawInput.length}x
                {postInfo && postInfo.planker}
                {postInfo && postInfo.prosent}
                {postInfo && bladStammeFixed.toFixed(1)}
                {postInfo && postInfo.spes}
              </h1>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="flex items-center animate-container">
              <div className="flex relative fillrings-container">
                <DndContext
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}>
                  <div className="startRingsDraggableContainer">
                    <SortableContext
                      strategy={horizontalListSortingStrategy}
                      items={rings}>
                      {rings &&
                        rings.map((ring: any) => {
                          const startRingsHandler = () => {
                            setRingID(ring._id);
                            setRingID2(ring.id);
                            setRingType("startRings");
                            setUpdate(!update);
                          };
                          return (
                            <div className="sort-container">
                              <p
                                className="deleteX"
                                onClick={startRingsHandler}>
                                X
                              </p>
                              <SortableItemRings
                                key={ring.id ? ring.id : ring._id}
                                id={ring.id ? ring.id : ring._id}
                                ring={ring.input}
                              />
                            </div>
                          );
                        })}
                    </SortableContext>
                  </div>
                </DndContext>

                {/*     {postInfo &&
                  originStartRings &&
                  postInfo.startRings.map((item: any) => {
                    const startRingsHandler = () => {
                      setRingID(item._id);
                      setRingID2(item.id);
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
                  })} */}

                {/* ********************** Alternative ************************ */}

                {postInfo &&
                  !originStartRings &&
                  postInfo.startRings2.map((item: any) => {
                    const startRingsHandler = () => {
                      setRingID(item._id);
                      setRingID2(item.id);
                      setRingType("startRings2");
                      setUpdate(!update);
                    };
                    return (
                      <>
                        <div
                          onClick={
                            openEdit ? utfyllingForanOpenHandler2 : undefined
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
                                  color: "yellow",
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
                  {(startRingsCalc &&
                    utfyllingForan - startRingsCalc2 < 0.05 &&
                    utfyllingForan - startRingsCalc2 > -0.05) ||
                  startRingsCalc2 === 0 ? (
                    <div></div>
                  ) : (
                    <div className="utfylling2-red utfylling2">
                      Alt. utfylling
                    </div>
                  )}
                  <div
                    className={`fill-calculate-box ${
                      startRingsCalc &&
                      utfyllingForan - startRingsCalc < 0.05 &&
                      utfyllingForan - startRingsCalc > -0.05
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
                  {utfyllingForanOpen2 && (
                    <div
                      className={`fill-calculate-box ${
                        startRingsCalc &&
                        utfyllingForan - startRingsCalc2 < 0.05 &&
                        utfyllingForan - startRingsCalc2 > -0.05
                          ? "fill-ok"
                          : "fill-not-ok"
                      }`}>
                      <h4>
                        Sum:{" "}
                        {Number(startRingsCalc2 && startRingsCalc2).toFixed(2)}
                      </h4>
                      <h4>
                        Diff:{" "}
                        {startRingsCalc2 &&
                          Number(utfyllingForan - startRingsCalc2).toFixed(2)}
                      </h4>
                    </div>
                  )}

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
                      setRingID2(item.id);
                      setRingType("rawInput");
                      setUpdate(!update);
                    };

                    const openRawInputShimsHandler = () => {
                      setRawRingID(item.input);
                      shimsOpenHandler();
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

                          <p
                            className={`absolute rawInput ${
                              rawOpen ? "mark" : ""
                            }`}>
                            {item.input}
                          </p>
                          <div
                            key={item._id}
                            className="ringcomponent rawrings">
                            {editBlink.rawInput === "editModeRawInput" && (
                              <BiAddToQueue
                                onClick={openRawInputShimsHandler}
                                className="add-btn"
                                style={{
                                  position: "absolute",
                                  top: "18rem",
                                  fontSize: "1.5rem",
                                  color: "green",
                                  zIndex: "10000",
                                }}
                              />
                            )}

                            {/* {(item.input && item.input + 1.4).toFixed(1)} */}
                            {item.input &&
                              (Number(item.input) + Number(1.4)).toFixed(1)}
                          </div>
                          {item.ring && (
                            <div className="shims-container">
                              <p className="shims shims1">{item.ring}</p>
                              <p className="shims shims2">
                                {(
                                  Number(item.input) +
                                  Number(1.4) -
                                  Number(item.ring) -
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
                          <div
                            className={`sawBlade bg-slate-500 ${
                              detailsOpen ? "sawblade-mark" : ""
                            }`}>
                            <p
                              className={`bladstamme ${
                                detailsOpen ? "mark" : ""
                              }`}>
                              {postInfo && postInfo.blades.bladStamme}
                            </p>
                            <p
                              className={`sagsnitt ${
                                detailsOpen ? "mark" : ""
                              }`}>
                              {postInfo && bladStammeFixed.toFixed(1)}
                            </p>
                          </div>
                        </div>

                        {/* ********************** under line center ************************ */}
                        {/* <div className="calculate-line all-length-line">
                          <p className="postcalc-number">
                            {postCalc && postCalc.toFixed(2)}
                          </p>
                        </div> */}
                      </>
                    );
                  })}
              </div>
              <div className="relative">
                <div
                  className={`sawBlade2 bg-slate-500 ${
                    detailsOpen ? "sawblade-mark" : ""
                  }`}>
                  <p className={`bladstamme ${detailsOpen ? "mark" : ""}`}>
                    {postInfo && postInfo.blades.bladStamme}
                  </p>
                  <p className={`sagsnitt ${detailsOpen ? "mark" : ""}`}>
                    {postInfo && bladStammeFixed.toFixed(1)}
                  </p>
                </div>
              </div>

              <div className="flex relative fillrings-container">
                <DndContext
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEndEndRings}>
                  <div className="startRingsDraggableContainer">
                    <SortableContext
                      strategy={horizontalListSortingStrategy}
                      items={endRings}>
                      {endRings &&
                        endRings.map((endRing: any) => {
                          const endRingsHandler = () => {
                            setRingID(endRing._id);
                            setRingID2(endRing.id);
                            setRingType("endRings");
                            setUpdate(!update);
                          };
                          return (
                            <div className="sort-container">
                              <p className="deleteX" onClick={endRingsHandler}>
                                X
                              </p>
                              <SortableItemRings
                                key={endRing.id ? endRing.id : endRing._id}
                                id={endRing.id ? endRing.id : endRing._id}
                                ring={endRing.input}
                              />
                            </div>
                          );
                        })}
                    </SortableContext>
                  </div>
                </DndContext>
                {/*   {postInfo &&
                  originEndRings &&
                  postInfo.endRings.map((item: any) => {
                    const endRingsHandler = () => {
                      setRingID(item._id);
                      setRingID2(item.id);
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
                  })} */}
                {/* ********************** Alternative EndRings ************************ */}

                {postInfo &&
                  !originEndRings &&
                  postInfo.endRings2.map((item: any) => {
                    const endRingsHandler2 = () => {
                      setRingID(item._id);
                      setRingID2(item.id);
                      setRingType("endRings2");
                    };
                    return (
                      <>
                        <div
                          onClick={
                            openEdit ? utfyllingBakOpenHandler2 : undefined
                          }
                          className={`outerRingContainer ${editBlink.endRings}`}>
                          <>
                            {editBlink.endRings === "editModeEndRings" && (
                              <RiDeleteBinLine
                                onClick={endRingsHandler2}
                                style={{
                                  position: "absolute",
                                  bottom: "8rem",
                                  fontSize: "1.5rem",
                                  color: "yellow",
                                  zIndex: "11000",
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
                  {(endRingsCalc &&
                    utfyllingBak - endRingsCalc2 < 0.05 &&
                    utfyllingBak - endRingsCalc2 > -0.05) ||
                  endRingsCalc2 === 0 ? (
                    <div></div>
                  ) : (
                    <div className="utfylling2-red utfylling2">
                      Alt. utfylling
                    </div>
                  )}
                  <div
                    className={`fill-calculate-box fill-bak-box ${
                      endRingsCalc &&
                      utfyllingBak - endRingsCalc < 0.05 &&
                      utfyllingBak - endRingsCalc > -0.05
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

                  {utfyllingBakOpen2 && (
                    <div
                      className={`fill-calculate-box fill-bak-box ${
                        endRingsCalc2 &&
                        utfyllingBak - endRingsCalc2 < 0.05 &&
                        utfyllingBak - endRingsCalc2 > -0.05
                          ? "fill-ok"
                          : "fill-not-ok"
                      }`}>
                      <h4>
                        Sum: {Number(endRingsCalc2 && endRingsCalc2).toFixed(2)}
                      </h4>
                      <h4>
                        Diff:{" "}
                        {endRingsCalc &&
                          Number(utfyllingBak - endRingsCalc2).toFixed(2)}
                      </h4>
                    </div>
                  )}

                  <p className="postcalc-number">
                    {utfyllingBak && utfyllingBak.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sort-container {
            position: relative;
          }
          .startRingsDraggableContainer {
            display: flex;
          }
          .deleteX {
            position: absolute;
            background: indianred;
            color: white;
            border-radius: 50%;
            padding: 1px;
            left: 5px;
            top: 5px;
            width: 1rem;
            height: 1rem;
            display: grid;
            place-items: center;
            font-size: 0.6rem;
          }
          .deleteX:hover {
            cursor: pointer;
          }
          .utfylling2-red {
            background: red;
            color: white;
          }
          .utfylling2 {
            width: 7rem;
            margin-top: 1rem;
            padding: 0.5rem;
            border-radius: 10px;
          }
          .add-btn:hover {
            cursor: pointer;
          }
          .origin-header {
            color: var(--primary-text);
          }
          .mark {
            border: 2px solid var(--mark);
            border-radius: 5px;
          }
          .postoppsettHeader {
            transform: translateX(-50%);
            left: 50%;
            top: 5rem;
            font-size: 2rem;
          }
          .post-header {
            color: var(--primary-text);
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
            background: var(--outer2);
            color: var(--outer-text2);
          }
          .fillrings-container {
            min-width: 10rem;
          }
          .rawrings {
            background: var(--center2);
            color: var(--center-text2);
            display: flex;
            justify-content: center;
          }
          .outerRingContainer {
            height: 11.4rem;
            width: 5.4rem;
            border: 1px solid var(--mark);
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
            border: 0.5px solid var(--outer);
          }

          .sawBlade2 {
            height: 30rem;
            width: 0.3rem;
            position: absolute;
            left: -4px;
            top: -15rem;
            border: 0.5px solid var(--outer);
            z-index: 10;
          }
          .sawblade-mark {
            border: 1px solid var(--mark);
          }
          .rawInput {
            top: -24px;
            font-size: 0.8rem;
            color: var(--primary-text);
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
            color: var(--primary-text);
          }
          .bladstamme {
            position: absolute;
            bottom: -18px;
            font-size: 0.8rem;
            right: -8px;
            color: var(--primary-text);
          }
          .sagsnitt {
            position: absolute;
            top: -18px;
            font-size: 0.8rem;
            right: -8px;
            color: var(--primary-text);
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
            position: absolute;
            top: 24rem;
          }
          .calculate-line {
            width: 100%;
            height: 2px;
            background: var(--mark);
            position: absolute;
          }
          .calculate-line::before {
            content: "";
            width: 1px;
            height: 15px;
            background: var(--mark);
            position: absolute;
            top: -7px;
            padding: 0 2px;
          }
          .calculate-line::after {
            content: "";
            width: 1px;
            height: 15px;
            background: var(--center2);
            position: absolute;
            top: -7px;
            right: 0px;
            padding: 0 2px;
          }
          .postcalc-number {
            position: absolute;
            color: var(--primary-text);
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
