import React from "react";
import PostOppsettComponent from "../components/postoppsett/PostOppsettComponent";

const postoppsett = ({ postInfo }: any) => {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 grid">
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
