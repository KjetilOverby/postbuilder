import React from "react";
import PostOppsett from "../../components/postoppsett/PostOppsettComponent";

const CreatePostContainer = ({ postInfo }: any) => {
  return (
    <>
      <div className="">
        <PostOppsett postInfo={postInfo} />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default CreatePostContainer;
