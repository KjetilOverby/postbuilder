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
          utfyllingBakOpenHandler={utfyllingBakOpenHandler}
          rawOpenHandler={rawOpenHandler}
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
        />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default CreatePostContainer;
