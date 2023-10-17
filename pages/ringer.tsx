import React, { useContext } from "react";
import RingerStartPage from "../components/ringer/RingerStartPage";
import { TbArrowBigLeftLine } from "react-icons/tb";
import Link from "next/link";
import { ContextAppData } from "../data/context/ContextAppData";
import darkModeColor from "../styles/darkMode";
import HeaderComponent from "../components/reusable components/HeaderComponent";
import SearchModal from "../components/startpage/SearchModal";

const Ringer = ({
  setOpenSearchModal,
  setSkurlisteInfo,
  openSearchModal,
  poster,
  setPostInfo,
}: any) => {
  const { darkMode } = useContext(ContextAppData);
  return (
    <>
      <HeaderComponent
        setSkurlisteInfo={setSkurlisteInfo}
        open={setOpenSearchModal}
      />
      {openSearchModal && (
        <SearchModal
          setOpenSearchModal={setOpenSearchModal}
          poster={poster}
          setPostInfo={setPostInfo}
          setSkurlisteInfo={setSkurlisteInfo}
          skurlisteInfo={undefined}
          setSearchResultModal={function (
            value: React.SetStateAction<boolean>
          ): void {
            throw new Error("Function not implemented.");
          }}
          update={false}
          setUpdate={function (value: React.SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
          setOpenDot={function (value: React.SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <div className="container">
        <h1 className="header">Oversikt ringer</h1>
        <RingerStartPage />
      </div>
      <style jsx>
        {`
          .container {
            padding: 7rem 10rem;
            min-height: 100vh;
            min-width: 100vw;
            background: ${darkMode ? darkModeColor.primary : "white"};
          }
          .header {
            font-size: 1.5rem;
            color: ${darkMode ? darkModeColor.text : ""};
          }
          h1 {
            color: rgb(0, 138, 138);
          }
          @media only screen and (max-width: 1000px) {
            .container {
              padding: 5px 5px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Ringer;
