import React from "react";
import ListerMainPage from "../components/lister/ListerMainPage";

const CreateList = ({skurliste, setSkurlisteInfo, skurlisteInfo}:any) => {
  return (
    <>
      <div className="p-10">
        <ListerMainPage skurliste={skurliste} setSkurlisteInfo={setSkurlisteInfo} skurlisteInfo={skurlisteInfo}/>
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
