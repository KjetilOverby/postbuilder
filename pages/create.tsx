import React, { useContext, useEffect, useState } from "react";
import { ContextAppData } from "../data/context/ContextAppData";
import CreateHeader from "../components/create/CreateHeader";
import CreatePostContainer from "../components/create/CreatePostContainer";
import LeftSidepanelEdit from "../components/postoppsett/LeftSidepanelEdit";

const create = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { postInfo, update, setUpdate } = useContext(ContextAppData);

  const [postCopy, setPostCopy] = useState();

  useEffect(() => {
    setPostCopy(postInfo);
  }, []);

  return (
    <>
      <div className="create-container">
        <CreateHeader />
        <LeftSidepanelEdit
          setPostCopy={setPostCopy}
          postCopy={postCopy}
          setUpdate={setUpdate}
          update={update}
        />
        <CreatePostContainer
          postCopy={postCopy}
          setPostCopy={setPostCopy}
          setUpdate={setUpdate}
          update={update}
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

export default create;
