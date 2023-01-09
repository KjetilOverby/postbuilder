import React from "react";
import ListerMainPage from "../components/lister/ListerMainPage";
import { BsBackspace } from "react-icons/bs";
import Link from "next/link";
import AuthWrapper from "../components/auth/AuthWrapper";

const CreateList = ({
  skurliste,
  setSkurlisteInfo,
  skurlisteInfo,
  setUpdate,
  update,
}: any) => {
  return (
    <>
      <AuthWrapper>
        <div className="p-10 lister-bg">
          <Link href="/">
            <BsBackspace style={{ fontSize: "1.8rem", marginBottom: "1rem", color: 'var(--primary-text)' }} />
          </Link>
          <h1 className="text-3xl mb-4 lister-text">Skurlistebehandling</h1>
          <ListerMainPage
            skurliste={skurliste}
            setSkurlisteInfo={setSkurlisteInfo}
            skurlisteInfo={skurlisteInfo}
            setUpdate={setUpdate}
            update={update}
          />
        </div>
      </AuthWrapper>
      <style jsx>
        {`
          .lister-bg {
            background: var(--primary);
            min-height: 100vh
          }
          .lister-text {
            color: var(--primary-text)
          }
        `}
      </style>
    </>
  );
};

export default CreateList;
