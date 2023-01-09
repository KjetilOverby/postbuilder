import React, { useState, useEffect } from "react";
import HeaderComponent from "../reusable components/HeaderComponent";
import SearchFromListComponent from "../reusable components/SearchFromListComponent";
import SearchPostoppsett from "../reusable components/SearchPostoppsett";
import SearchModal from "./SearchModal";
import SkurlisteComponent from "./SkurlisteComponent";
import { SkurlisteProps } from "../../tsmodules/posterModule";
import AuthWrapper from "../auth/AuthWrapper";

const StartPageComponent = ({
  skurliste,
  setOpenSearchModal,
  setSkurlisteInfo,
  skurlisteInfo,
  poster,
  setPostInfo,
  searchResultModal,
  setSearchResultModal,
  setFinalSkurlisteInfo,
}: SkurlisteProps) => {
  return (
    <>
      <HeaderComponent
        open={setOpenSearchModal}
        setSkurlisteInfo={setSkurlisteInfo}
      />
      <div className="px-3 lg:px-60 pt-12">
        <h1 className="sk-header header text-2xl">Skurplan</h1>

        <SkurlisteComponent
          skurliste={skurliste}
          setSkurlisteInfo={setSkurlisteInfo}
          setSearchResultModal={setSearchResultModal}
          searchTrigger={true}
        />

        {searchResultModal && (
          <SearchFromListComponent
            setPostInfo={setPostInfo}
            setSearchResultModal={setSearchResultModal}
            skurlisteInfo={skurlisteInfo}
            poster={poster}
            setSkurlisteInfo={setSkurlisteInfo}
            setFinalSkurlisteInfo={setFinalSkurlisteInfo} update={false} setUpdate={function (value: React.SetStateAction<boolean>): void {
              throw new Error("Function not implemented.");
            } }          />
        )}
      </div>
      <style jsx>
        {`
      .sk-header {
        color: var(--primary-text)
          }
         
      `}</style>
    </>
  );
};

export default StartPageComponent;
