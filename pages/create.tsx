import React, { useContext, useEffect, useState } from "react";
import { ContextAppData } from "../data/context/ContextAppData";
import CreateHeader from "../components/create/CreateHeader";
import CreatePostContainer from "../components/create/CreatePostContainer";
import LeftSidepanelEdit from "../components/postoppsett/LeftSidepanelEdit";
import { v4 as uuidv4, v4 } from "uuid";

const Create = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { postInfo, update, setUpdate } = useContext(ContextAppData);

  const [postCopy, setPostCopy] = useState<any>();
  const [utfyllingForanOpen, setUtfyllingForanOpen] = useState(false);
  const [utfyllingBakOpen, setUtfyllingBakOpen] = useState(false);
  const [rawOpen, setRawOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [ringType, setRingType] = useState<string>("");
  const [editBlink, setEditBlink] = useState<any>({
    startRings: "",
    rawInput: "",
    endRings: "",
  });

  const [ringPanelNumber, setRingPanelNumber] = useState();
  const [ringPanelNumberBak, setRingPanelNumberBak] = useState();
  const [rawPanelValue, setRawPanelValue] = useState();

  const [sawbladeSelect, setSawbladeSelect] = useState();

  useEffect(() => {
    setPostCopy(postInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const utfyllingForanOpenHandler = () => {
    setRawOpen(false);
    setUtfyllingBakOpen(false);
    setUtfyllingForanOpen(true);
    setDetailsOpen(false);
    setEditBlink({ startRings: "editModeStartRings" });
    setRingType("startRings");
  };
  const utfyllingBakOpenHandler = () => {
    setRawOpen(false);
    setUtfyllingBakOpen(true);
    setUtfyllingForanOpen(false);
    setDetailsOpen(false);
    setEditBlink({ endRings: "editModeEndRings" });
    setRingType("endRings");
  };
  const rawOpenHandler = () => {
    setRawOpen(true);
    setUtfyllingBakOpen(false);
    setUtfyllingForanOpen(false);
    setDetailsOpen(false);
    setEditBlink({ rawInput: "editModeRawInput" });
    setRingType("rawInput");
  };
  const detailsOpenHandler = () => {
    setRawOpen(false);
    setUtfyllingBakOpen(false);
    setUtfyllingForanOpen(false);
    setDetailsOpen(true);
    setEditBlink({ rawInput: "" });
    setRingType("");
  };

  useEffect(() => {
    if (postCopy) {
      setPostCopy({
        ...postCopy,
        startRings: [
          ...postCopy.startRings,
          { input: ringPanelNumber, _id: v4() },
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
          { input: ringPanelNumberBak, _id: v4() },
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
        rawInput: [...postCopy.rawInput, { input: rawPanelValue, _id: v4() }],
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
  }, [sawbladeSelect]);

  return (
    <>
      <div className="create-container">
        <CreateHeader />
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
          setRingType={setRingType}
          detailsOpen={detailsOpen}
        />
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
