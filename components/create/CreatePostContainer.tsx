import React, { useEffect } from "react";
import PostOppsett from "../../components/postoppsett/PostOppsettComponent";
import CreatePostOppsett from "./CreatePostOppsett";

const CreatePostContainer = ({
  postCopy,
  setPostCopy,
  update,
  setUpdate,
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
  setRawInputShimsData,
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
  return (
    <>
      <div className="">
        {/* <PostOppsett postInfo={postCopy} /> */}
        <CreatePostOppsett
          setPostInfo={setPostCopy}
          postInfo={postCopy}
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
          utfyllingForanOpenHandler2={utfyllingForanOpenHandler2}
          utfyllingBakOpenHandler={utfyllingBakOpenHandler}
          utfyllingBakOpenHandler2={utfyllingBakOpenHandler2}
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
          setRawInputShimsData={setRawInputShimsData}
          originStartRings={originStartRings}
          originEndRings={originEndRings}
          startRingsCalc2={startRingsCalc2}
          setStartRingsCalc2={setStartRingsCalc2}
          utfyllingForanOpen2={utfyllingForanOpen2}
          endRingsCalc2={endRingsCalc2}
          setEndRingsCalc2={setEndRingsCalc2}
          utfyllingBakOpen2={utfyllingBakOpen2}
        />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default CreatePostContainer;
