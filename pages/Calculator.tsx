import React from "react";
import CalculatorMainComponent from "../components/calculator/CalculatorMainComponent";
import HeadComponent from "../components/reusable components/HeadComponent";
import HeaderComponent from "../components/reusable components/HeaderComponent";
import SearchModal from "../components/startpage/SearchModal";

const Calculator = ({
  setOpenSearchModal,
  setSkurlisteInfo,
  openSearchModal,
  poster,
  setPostInfo,
}: any) => {
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
      <div className="main-container">
        <HeadComponent />
        <CalculatorMainComponent />
      </div>
      <style jsx>{`
        .main-container {
          padding-top: 3.5rem;
        }
      `}</style>
    </>
  );
};

export default Calculator;
