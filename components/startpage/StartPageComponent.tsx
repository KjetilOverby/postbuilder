import React, { useState, useEffect } from "react";
import HeaderComponent from "../reusable components/HeaderComponent";
import SearchFromListComponent from "../reusable components/SearchFromListComponent";
import SkurlisteComponent from "./SkurlisteComponent";
import { SkurlisteProps } from "../../tsmodules/posterModule";
import Footer from "../reusable components/Footer";
import darkModeColor from "../../styles/darkMode";
import dateFormat from "dateformat";

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
  darkMode,
}: SkurlisteProps) => {
  const [antallSum, setAntallSum] = useState<any>();
  const [kubikkSum, setKubikkSum] = useState<any>();
  const [dated, setDated] = useState<any>();

  useEffect(() => {
    if (skurliste) {
      setAntallSum(skurliste.map((item) => item.ant));
      setKubikkSum(skurliste.map((item) => item.m3));
    }
  }, [skurliste]);

  useEffect(() => {
    if (skurliste) {
      const getDates: any = skurliste.map((item) => item.date);
      setDated(
        getDates.reduce(function (a: any, b: any) {
          return a > b ? a : b;
        })
      );
    }
  }, [skurliste]);

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

          <div className="calc-container">
            {/*   <p className="text">
              
              Antall poster: {skurliste && skurliste.length}
            </p> */}
            <p className="text">
              Antall m3:{" "}
              {antallSum &&
                kubikkSum
                  .reduce((a: any, b: any) => a + b, 0)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")}
            </p>
            <p className="text">
              Antall stokker:{" "}
              {antallSum &&
                antallSum
                  .reduce((a: any, b: any) => a + b, 0)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")}
            </p>
            <p className="text date">
              Sist oppdatert: {dateFormat(dated, "dd.mm.yyyy HH:MM")}
            </p>
          </div>

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
            color: ${darkMode ? darkModeColor.text : "rgb(0, 138, 138)"};
            margin-top: 7rem;
          }
          .calc-container {
            background: ${darkMode ? darkModeColor.grey : "rgb(0, 138, 138)"};
            padding: 10px;
            border-radius: 5px;
            font-style: italic;
          }
          .content-container {
            grid-area: content;
            padding: 0 15rem;
          }
          .text {
            color: ${darkMode ? darkModeColor.text : "rgb(224, 242, 241)"};
            font-size: 0.9rem;
          }
          .date {
            color: ${darkMode ? darkModeColor.text : "orange"};
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
              padding: 0 0rem;
            }
          }
          @media only screen and (max-width: 1000px) {
            .content-container {
              margin: 2rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPageComponent;
