import React, { useContext, useEffect, useState } from "react";
import { ContextAppData } from "../data/context/ContextAppData";
import CreateHeader from "../components/create/CreateHeader";
import CreatePostContainer from "../components/create/CreatePostContainer";
import LeftSidepanelEdit from "../components/postoppsett/LeftSidepanelEdit";
import { v4 as uuidv4, v4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/router";
import CreateShimsModal from "../components/create/CreateShimsModal";
import ringList from "../data/ringList";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../components/reusable components/Modal";
import { log } from "console";

const api = axios.create({
  baseURL: process.env.api,
});

const Create = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { postInfo, setPostInfo, update, setUpdate, postID } =
    useContext(ContextAppData);

  const router = useRouter();
  const { user, isAuthenticated } = useAuth0<any>();

  const [postCopy, setPostCopy] = useState<any>();
  const [utfyllingForanOpen, setUtfyllingForanOpen] = useState(false);
  const [utfyllingBakOpen, setUtfyllingBakOpen] = useState(false);
  const [rawOpen, setRawOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [shimsOpen, setShimsOpen] = useState(false);
  const [ringType, setRingType] = useState<string>("");
  const [editBlink, setEditBlink] = useState<any>({
    startRings: "",
    rawInput: "",
    endRings: "",
  });

  const [ringPanelNumber, setRingPanelNumber] = useState();
  const [ringPanelNumberBak, setRingPanelNumberBak] = useState();
  const [rawPanelValue, setRawPanelValue] = useState();
  const [shimsValue, setShimsValue] = useState();
  const [rawRingID, setRawRingID] = useState();

  const [sawbladeSelect, setSawbladeSelect] = useState<number>();
  const [prosentSelect, setProsentSelect] = useState();
  const [plankeInput, setPlankeInput] = useState();
  const [spesInput, setSpesInput] = useState();

  const [startRingsCalc, setStartRingsCalc] = useState<any>();
  const [utfyllingForan, setUtfyllingForan] = useState<any>();
  const [utfyllingBak, setUtfyllingBak] = useState<any>();
  const [endRingsCalc, setEndRingsCalc] = useState<any>();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditSaveModal, setOpenEditSaveModal] = useState(false);

  useEffect(() => {
    setPostCopy(postInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const utfyllingForanOpenHandler = () => {
    setRawOpen(false);
    setUtfyllingBakOpen(false);
    setUtfyllingForanOpen(true);
    setDetailsOpen(false);
    setShimsOpen(false);
    setEditBlink({ startRings: "editModeStartRings" });
    setRingType("startRings");
  };
  const utfyllingBakOpenHandler = () => {
    setRawOpen(false);
    setUtfyllingBakOpen(true);
    setUtfyllingForanOpen(false);
    setDetailsOpen(false);
    setShimsOpen(false);
    setEditBlink({ endRings: "editModeEndRings" });
    setRingType("endRings");
  };
  const rawOpenHandler = () => {
    setRawOpen(true);
    setUtfyllingBakOpen(false);
    setUtfyllingForanOpen(false);
    setDetailsOpen(false);
    setShimsOpen(false);
    setEditBlink({ rawInput: "editModeRawInput" });
    setRingType("rawInput");
  };
  const detailsOpenHandler = () => {
    setRawOpen(false);
    setUtfyllingBakOpen(false);
    setUtfyllingForanOpen(false);
    setDetailsOpen(true);
    setShimsOpen(false);
    setEditBlink({ rawInput: "" });
    setRingType("");
  };
  const shimsOpenHandler = () => {
    setUtfyllingBakOpen(false);
    setUtfyllingForanOpen(false);
    setDetailsOpen(false);
    setEditBlink({ rawInput: "editModeRawInput" });
    setRingType("rawInput");

    setTimeout(() => {
      setShimsOpen(true);
      setRawOpen(false);
    }, 100);
  };

  useEffect(() => {
    if (postCopy) {
      setPostCopy({
        ...postCopy,
        startRings: [
          ...postCopy.startRings,
          { input: ringPanelNumber, id: v4() },
        ],
      });
    }
    setUpdate(!update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringPanelNumber]);

  useEffect(() => {
    if (postCopy) {
      setPostCopy({
        ...postCopy,
        endRings: [
          ...postCopy.endRings,
          { input: ringPanelNumberBak, id: v4() },
        ],
      });
    }
    setUpdate(!update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ringPanelNumberBak]);

  useEffect(() => {
    if (postCopy) {
      setPostCopy({
        ...postCopy,
        rawInput: [...postCopy.rawInput, { input: rawPanelValue, id: v4() }],
      });
    }
    setUpdate(!update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawPanelValue]);

  useEffect(() => {
    if (postCopy) {
      setPostCopy({
        ...postCopy,
        blades: { bladStamme: sawbladeSelect },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sawbladeSelect]);

  useEffect(() => {
    if (postCopy) {
      setPostCopy({
        ...postCopy,
        prosent: prosentSelect,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prosentSelect]);

  useEffect(() => {
    if (postCopy) {
      setPostCopy({
        ...postCopy,
        planker: plankeInput,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plankeInput]);

  useEffect(() => {
    if (postCopy) {
      setPostCopy({
        ...postCopy,
        spes: spesInput,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spesInput]);

  const [filteredData, setFilterData] = useState<any>();
  const [newArray, setNewArray] = useState<any>([]);
  const [updateShims, setUpdateShims] = useState(false);

  useEffect(() => {
    if (postCopy) {
      setFilterData(
        postCopy.rawInput.filter((item: any) => item.input === rawRingID)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawRingID]);

  // useEffect(() => {
  //   if (filteredData) {
  //     filteredData.forEach((element: any) => {
  //       if (shimsValue) {
  //         newArray.push({ ...element, ring: shimsValue });
  //       }
  //     });
  //   }
  //   console.log(newArray);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [shimsValue, updateShims]);

  console.log(filteredData);

  //********  SAVE CREATED POSTS *************//

  const saveCreatedPostHandler = async () => {
    if (!postCopy.planker) {
      alert("Du må legge inn planketykkelse!");
    } else if (!postCopy.prosent) {
      alert("Du må legge inn prosent!");
    } else if (
      utfyllingForan - startRingsCalc > 0.05 ||
      utfyllingForan - startRingsCalc < -0.05
    ) {
      alert("Utfylling foran er ikke riktig");
    } else if (
      utfyllingBak - endRingsCalc > 0.05 ||
      utfyllingBak - endRingsCalc < -0.05
    ) {
      alert("Utfylling bak er ikke riktig");
    } else {
      const reponse = await api
        .post(
          `api/poster/save_created_post?user=${user.sub}`,
          {
            header: `${postCopy.rawInput.length}x${postCopy.planker}${
              postCopy.prosent
            }${(Number(postCopy.blades.bladStamme) + Number(1.4)).toFixed(1)}${
              postCopy.spes === undefined ? "" : postCopy.spes
            }`,
            startRings: postCopy.startRings,
            endRings: postCopy.endRings,
            rawInput: postCopy.rawInput,
            blades: postCopy.blades,
            prosent: postCopy.prosent,
            planker: postCopy.planker,
            spes: postCopy.spes,
            date: new Date(),
          },
          {
            headers: {
              Authorization: `auth`,
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          router.push("/");
          setUpdate(!update);
        });
    }
  };
  //********  EDIT && UPDATE POSTS *************//

  const auth = "4564";
  const saveEditedPostHandler = async () => {
    if (!postCopy.planker) {
      alert("Du må legge inn planketykkelse!");
    } else if (!postCopy.prosent) {
      alert("Du må legge inn prosent!");
    } else if (
      utfyllingForan - startRingsCalc > 0.05 ||
      utfyllingForan - startRingsCalc < -0.05
    ) {
      alert("Utfylling foran er ikke riktig");
    } else if (
      utfyllingBak - endRingsCalc > 0.05 ||
      utfyllingBak - endRingsCalc < -0.05
    ) {
      alert("Utfylling bak er ikke riktig");
    } else {
      const reponse = await api
        .patch(
          `api/poster/save_edited_post?ids=${postID}`,
          {
            header: `${postCopy.rawInput.length}x${postCopy.planker}${
              postCopy.prosent
            }${(Number(postCopy.blades.bladStamme) + Number(1.4)).toFixed(1)}${
              postCopy.spes === undefined ? "" : postCopy.spes
            }`,
            startRings: postCopy.startRings,
            endRings: postCopy.endRings,
            rawInput: postCopy.rawInput,
            blades: postCopy.blades,
            prosent: postCopy.prosent,
            planker: postCopy.planker,
            spes: postCopy.spes,
            editDate: new Date(),
            date: postCopy.date,
          },
          {
            headers: {
              Authorization: `Bearer ${auth}`,
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          router.push("/");
          setUpdate(!update);
        });
    }
  };

  //********** DELETE POSTS *************//

  const home = "/";

  const deletePostHandler = async () => {
    const response = await api
      .delete(`/api/poster/deletepost/?del=${postID}&user=${user.sub}`)
      .then((res) => {
        setOpenDeleteModal(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        setOpenDeleteModal(false);
        setUpdate(!update);
        router.push("/");
      });
  };

  const openDeleteModalHandler = () => {
    setOpenDeleteModal(true);
  };

  return (
    <>
      <div className="create-container">
        {openDeleteModal && (
          <Modal
            title="SLETT POST"
            actionBtnTitle="Slett"
            fn={deletePostHandler}
            cancelHandler={() => setOpenDeleteModal(false)}
            description={`Er du sikker på å slette: ${
              postCopy.rawInput.length
            }x${postCopy.planker}${postCopy.prosent}${(
              Number(postCopy.blades.bladStamme) + Number(1.4)
            ).toFixed(1)}${postCopy.spes === undefined ? "" : postCopy.spes}?`}
          />
        )}

        {openEditSaveModal && (
          <Modal
            title="OPPDATER POSTEN"
            description="ADVARSEL: Ved og oppdatere overskriver du opprinnelige data for denne posten."
            actionBtnTitle="OPPDATER"
            fn={saveEditedPostHandler}
            cancelHandler={() => setOpenEditSaveModal(false)}
          />
        )}
        <CreateHeader
          deleteHandler={setOpenDeleteModal}
          saveCreatedPostHandler={saveCreatedPostHandler}
          setOpenEditSaveModal={setOpenEditSaveModal}
        />
        <LeftSidepanelEdit
          setPostCopy={setPostCopy}
          postCopy={postCopy}
          setUpdate={setUpdate}
          update={update}
          utfyllingForanOpen={utfyllingForanOpen}
          setUtfyllingForanOpen={setUtfyllingForanOpen}
          utfyllingBakOpen={utfyllingBakOpen}
          setUtfyllingBakOpen={setUtfyllingBakOpen}
          rawOpen={rawOpen}
          setRawOpen={setRawOpen}
          utfyllingForanOpenHandler={utfyllingForanOpenHandler}
          utfyllingBakOpenHandler={utfyllingBakOpenHandler}
          rawOpenHandler={rawOpenHandler}
          setRingPanelNumber={setRingPanelNumber}
          setRingPanelNumberBak={setRingPanelNumberBak}
          setRawPanelValue={setRawPanelValue}
          detailsOpen={detailsOpen}
          setDetailsOpen={setDetailsOpen}
          detailsOpenHandler={detailsOpenHandler}
          setSawbladeSelect={setSawbladeSelect}
          sawbladeSelect={sawbladeSelect}
          setProsentSelect={setProsentSelect}
          setPlankeInput={setPlankeInput}
          setSpesInput={setSpesInput}
          shimsOpen={shimsOpen}
          setShimsValue={setShimsValue}
        />
        <CreatePostContainer
          postCopy={postCopy}
          setPostCopy={setPostCopy}
          setUpdate={setUpdate}
          update={update}
          utfyllingForanOpen={utfyllingForanOpen}
          setUtfyllingForanOpen={setUtfyllingForanOpen}
          utfyllingBakOpen={utfyllingBakOpen}
          setUtfyllingBakOpen={setUtfyllingBakOpen}
          rawOpen={rawOpen}
          setRawOpen={setRawOpen}
          ringType={ringType}
          editBlink={editBlink}
          utfyllingForanOpenHandler={utfyllingForanOpenHandler}
          utfyllingBakOpenHandler={utfyllingBakOpenHandler}
          rawOpenHandler={rawOpenHandler}
          shimsOpenHandler={shimsOpenHandler}
          setRingType={setRingType}
          detailsOpen={detailsOpen}
          startRingsCalc={startRingsCalc}
          setStartRingsCalc={setStartRingsCalc}
          utfyllingForan={utfyllingForan}
          setUtfyllingForan={setUtfyllingForan}
          utfyllingBak={utfyllingBak}
          setUtfyllingBak={setUtfyllingBak}
          endRingsCalc={endRingsCalc}
          setEndRingsCalc={setEndRingsCalc}
          setRawRingID={setRawRingID}
        />
        {shimsOpen && (
          <CreateShimsModal
            newArray={newArray}
            filteredData={filteredData}
            ringList={ringList}
            setShimsValue={setShimsValue}
            setOpenShims={setShimsOpen}
            openShims={shimsOpen}
            setUpdateShims={setUpdateShims}
            updateShims={updateShims}
          />
        )}
      </div>
      <style jsx>
        {`
          .create-container {
            background: var(--primary);
            min-height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default Create;
