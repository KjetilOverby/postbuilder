import React from "react";
import PostOppsettComponent from "../components/postoppsett/PostOppsettComponent";

const postoppsett = ({ postInfo }: any) => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-900 grid">
        <PostOppsettComponent postInfo={postInfo} />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default postoppsett;
