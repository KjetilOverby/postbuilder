import React from "react";
import ListerMainPage from "../components/lister/ListerMainPage";

const CreateList = () => {
  return (
    <>
      <div className="p-10">
        <ListerMainPage />
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

export default CreateList;
