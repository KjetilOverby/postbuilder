import React, { useState, useEffect } from "react";
import SearchPostoppsett from "./SearchPostoppsett";
import { SearchProps } from "../../tsmodules/SearchProps";

const SearchFromListComponent = ({
  setPostInfo,
  skurlisteInfo,
  setSearchResultModal,
  poster,
  setFinalSkurlisteInfo,
  update,
  setUpdate,
}: SearchProps) => {
  const [searchString, setSearchString] = useState<string>();
  const [searchStringResult, setSearchStringResult] = useState();

  const showAllHandler = () => {
    setSearchString(`${skurlisteInfo.post}-${skurlisteInfo.prosent}%-`);
  };
  useEffect(() => {
    if (skurlisteInfo) {
      setSearchString(
        `${skurlisteInfo.post}-${skurlisteInfo.prosent}%-${skurlisteInfo.blad}`
      );
    }
  }, [skurlisteInfo]);
  useEffect(() => {
    if (poster) {
      setSearchStringResult(
        poster.filter((item: any) => item.header.includes(searchString))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  const closeModal = () => {
    setSearchResultModal(false);
  };

  return (
    <>
      <div className="">
        <div className="main-container absolute right-5 top-52 p-5 shadow-xl bounceIn">
          <button
            className="border pl-2 pr-2 mb-2 py-1 rounded-md mr-4 text-slate-50 text-xs bg-slate-600 hover:bg-slate-500 transition-all duration-300"
            onClick={closeModal}>
            Lukk
          </button>
          <button
            className="border pl-2 pr-2 mb-2 py-1 rounded-md text-slate-50 text-xs bg-slate-600 hover:bg-slate-500 transition-all duration-300"
            onClick={showAllHandler}>
            Vis alle
          </button>
          <SearchPostoppsett
            setSearchResultModal={setSearchResultModal}
            searchResult={searchStringResult}
            setPostInfo={setPostInfo}
            skurlisteInfo={skurlisteInfo}
            setFinalSkurlisteInfo={setFinalSkurlisteInfo}
            closeModal={closeModal}
            update={update}
            setUpdate={setUpdate}
          />
        </div>
      </div>
      <style jsx>
        {`
          .main-container {
            background: var(--table-bg);
            overflow: scroll;
            max-height: 70%;
            scrollbar-width: none;
          }
          .bounceIn {
            animation: bounceInRight 0.8s;
          }
          @-webkit-keyframes bounceInRight {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            0% {
              opacity: 0;
              -webkit-transform: translate3d(3000px, 0, 0);
              transform: translate3d(3000px, 0, 0);
            }
            60% {
              opacity: 1;
              -webkit-transform: translate3d(-25px, 0, 0);
              transform: translate3d(-25px, 0, 0);
            }
            75% {
              -webkit-transform: translate3d(10px, 0, 0);
              transform: translate3d(10px, 0, 0);
            }
            90% {
              -webkit-transform: translate3d(-5px, 0, 0);
              transform: translate3d(-5px, 0, 0);
            }
            100% {
              -webkit-transform: none;
              transform: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchFromListComponent;
