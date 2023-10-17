import React, { useContext } from "react";
import TabellMain from "../components/tabell/TabellMain";
import HeadComponent from "../components/reusable components/HeadComponent";
import Link from "next/link";
import { TbArrowBigLeftLine } from "react-icons/tb";
import { ContextAppData } from "../data/context/ContextAppData";
import darkModeColor from "../styles/darkMode";
import HeaderComponent from "../components/reusable components/HeaderComponent";
import SearchModal from "../components/startpage/SearchModal";

const Tabell = ({
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
        <HeadComponent />

        <TabellMain darkMode={darkMode} />
      </div>
      <style jsx>
        {`
          .container {
            padding: 7rem 15rem;
            background: ${darkMode ? darkModeColor.primary : "white"};
            min-width: 100vw;
            min-height: 100vh;
          }
          @media only screen and (max-width: 756px) {
            .container {
              padding: 2rem 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Tabell;
