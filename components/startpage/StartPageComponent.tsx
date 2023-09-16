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
        <div className="content-container">
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
            color: grey;
            margin-top: 7rem;
          }
          .content-container {
            grid-area: content;
            padding: 0 15rem;
          }
          @media only screen and (max-width: 1800px) {
            .content-container {
              padding: 0 8rem;
            }
          }
          @media only screen and (max-width: 1400px) {
            .content-container {
              padding: 0 4rem;
            }
          }
          @media only screen and (max-width: 1200px) {
            .content-container {
              padding: 0 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPageComponent;
