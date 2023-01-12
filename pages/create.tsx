import React, { useContext, useEffect } from "react";
import { ContextAppData } from "../data/context/ContextAppData";
import CreateHeader from "../components/create/CreateHeader";
import CreatePostContainer from "../components/create/CreatePostContainer";
import LeftSidepanelEdit from "../components/postoppsett/LeftSidepanelEdit";

const create = () => {
  const { postInfo, setPostInfo } = useContext(ContextAppData);

  return (
    <>
      <div className="create-container">
        <CreateHeader />
        <LeftSidepanelEdit />
        <CreatePostContainer postInfo={postInfo} />
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

export default create;
