import React, { useState, useEffect } from "react";
import HeaderComponent from "../reusable components/HeaderComponent";
import SearchFromListComponent from "../reusable components/SearchFromListComponent";
import SearchPostoppsett from "../reusable components/SearchPostoppsett";
import SearchModal from "./SearchModal";
import SkurlisteComponent from "./SkurlisteComponent";
import { SkurlisteProps } from "../../tsmodules/posterModule";

const StartPageComponent = ({
  skurliste,
  setOpenSearchModal,
  setSkurlisteInfo,
  skurlisteInfo,
  poster,
  setPostInfo,
}: SkurlisteProps) => {
  const [searchString, setSearchString] = useState<string>();
  const [searchStringResult, setSearchStringResult] = useState();
  const [searchResultModal, setSearchResultModal] = useState<boolean>(false);
  
  
  
  return (
    <>
      <HeaderComponent
        open={setOpenSearchModal}
        setSkurlisteInfo={setSkurlisteInfo}
      />
      <div className="px-3 lg:px-60 pt-12">
        <h1 className="header text-2xl">Skurplan</h1>
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
          />
        )}
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default StartPageComponent;
