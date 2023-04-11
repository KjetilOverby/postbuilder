import React from "react";
import HeaderComponent from "../reusable components/HeaderComponent";
import SearchFromListComponent from "../reusable components/SearchFromListComponent";
import SkurlisteComponent from "./SkurlisteComponent";
import { SkurlisteProps } from "../../tsmodules/posterModule";
import Footer from "../reusable components/Footer";

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
  setOpenDot,
}: SkurlisteProps) => {
  return (
    <>
      <div className="pagelayout-container">
        <HeaderComponent
          open={setOpenSearchModal}
          setSkurlisteInfo={setSkurlisteInfo}
        />
        <div className="content-container px-3 lg:px-60 pt-12">
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
              setFinalSkurlisteInfo={setFinalSkurlisteInfo}
              update={false}
              setOpenDot={setOpenDot}
              setUpdate={function (value: React.SetStateAction<boolean>): void {
                throw new Error("Function not implemented.");
              }}
            />
          )}
        </div>
        <Footer />
      </div>
      <style jsx>
        {`
          .sk-header {
            color: var(--primary-text);
            margin-top: 7rem;
          }
          .content-container {
            grid-area: content;
            background: var(--primary);
          }
        `}
      </style>
    </>
  );
};

export default StartPageComponent;
