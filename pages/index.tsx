import Image from "next/image";
import SearchModal from "../components/startpage/SearchModal";
import StartPageComponent from "../components/startpage/StartPageComponent";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { SkurlisteProps } from "../tsmodules/posterModule";
import HeadComponent from "../components/reusable components/HeadComponent";

export default function Home({
  skurliste,
  poster,
  setSkurlisteInfo,
  skurlisteInfo,
  setPostInfo,
  searchResultModal,
  setSearchResultModal,
  setFinalSkurlisteInfo,
  setOpenDot,
  darkMode,
  setOpenSearchModal,
  openSearchModal,
}: SkurlisteProps) {
  return (
    <div
      className={darkMode ? styles.indexContainerDark : styles.indexContainer}>
      <HeadComponent />
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
      <StartPageComponent
        skurliste={skurliste}
        setOpenSearchModal={setOpenSearchModal}
        setSkurlisteInfo={setSkurlisteInfo}
        skurlisteInfo={skurlisteInfo}
        poster={poster}
        setPostInfo={setPostInfo}
        setSearchResultModal={setSearchResultModal}
        searchResultModal={searchResultModal}
        setFinalSkurlisteInfo={setFinalSkurlisteInfo}
        setOpenDot={setOpenDot}
        darkMode={darkMode}
        openSearchModal={false}
      />
    </div>
  );
}
