import React from "react";
import ListerMainPage from "../components/lister/ListerMainPage";
import { BsBackspace } from "react-icons/bs";
import Link from "next/link";

const CreateList = ({
  skurliste,
  setSkurlisteInfo,
  skurlisteInfo,
  setUpdate,
  update,
}: any) => {
  return (
    <>
      <div className="p-10">
        <Link href="/">
          <BsBackspace style={{ fontSize: "1.8rem", marginBottom: "1rem" }} />
        </Link>
        <h1 className="text-3xl mb-4">Skurlistebehandling</h1>
        <ListerMainPage
          skurliste={skurliste}
          setSkurlisteInfo={setSkurlisteInfo}
          skurlisteInfo={skurlisteInfo}
          setUpdate={setUpdate}
          update={update}
        />
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
