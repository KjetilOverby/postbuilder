import React, { useEffect } from "react";
import PostOppsett from "../../components/postoppsett/PostOppsettComponent";
import CreatePostOppsett from "./CreatePostOppsett";

const CreatePostContainer = ({
  postCopy,
  setPostCopy,
  update,
  setUpdate,
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
        />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default CreatePostContainer;
