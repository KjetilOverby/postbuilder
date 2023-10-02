import React, { useState, useEffect, useContext } from "react";
import SearchPostoppsett from "./SearchPostoppsett";
import { SearchProps } from "../../tsmodules/SearchProps";
import { ContextAppData } from "../../data/context/ContextAppData";

const SearchFromListComponent = ({
  setPostInfo,
  skurlisteInfo,
  setSearchResultModal,
  poster,
  setFinalSkurlisteInfo,
  update,
  setUpdate,
  setOpenDot,
}: SearchProps) => {
  const [searchString, setSearchString] = useState<string>();
  const [searchStringResult, setSearchStringResult] = useState();
  const { darkMode } = useContext(ContextAppData);
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
    setOpenDot(false);
  };

  return (
    <>
      <div className="">
        <div className="main-container top-52 p-5 shadow-xl bounceIn">
          <div className="btn-container">
            <button className="btn" onClick={closeModal}>
              Lukk
            </button>
            <button className="btn" onClick={showAllHandler}>
              Alle bladtykkelser
            </button>
          </div>
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
          .btn-container {
            display: flex;
            flex-direction: column;
          }
          .main-container {
            background: var(--table-bg);
            overflow: scroll;
            max-height: 70%;
            scrollbar-width: none;
            border-radius: 10px;
            position: absolute;
            right: 5rem;
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
          .btn {
            padding: 5px;

            margin-right: 1rem;
            width: 100%;
            border: 1px solid var(--text);
            border-radius: 5px;
            color: var(--text);
            margin-bottom: 1rem;
            background: var(--main-to-right);
          }
          .btn:hover {
            background: var(--primary);
            transition: 0.5s;
          }
          @media only screen and (max-width: 1000px) {
            .main-container {
              width: 100vw;
              margin-bottom: 3rem;
              right: 0;
              top: 5rem;
            }
            .bounceIn {
              animation: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchFromListComponent;
