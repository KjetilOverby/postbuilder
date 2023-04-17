import React, { useState } from "react";

import KlasseInfoComponent from "../components/postoppsett/KlasseInfoComponent";
import PostOppsettComponent from "../components/postoppsett/PostOppsettComponent";
import SkurlistePostoppsett from "../components/postoppsett/SkurlistePostoppsett";
import SearchFromListComponent from "../components/reusable components/SearchFromListComponent";
import SkurlisteComponent from "../components/startpage/SkurlisteComponent";
import axios from "axios";
import HeadComponent from "../components/reusable components/HeadComponent";
import Hidden from "../components/reusable components/Hidden";

const api = axios.create({
  baseURL: process.env.api,
});

const postoppsett = ({
  postInfo,
  skurlisteInfo,
  skurliste,
  setSearchResultModal,
  searchResultModal,
  setPostInfo,
  setSkurlisteInfo,
  poster,
  setOpenSearchModal,
  finalSkurlisteInfo,
  setFinalSkurlisteInfo,
  update,
  setUpdate,
  postCopy,
  dotUpdate,
  setDotUpdate,
  openDot,
  setOpenDot,
}: any) => {
  const [originStartrings, setOriginStartrings] = useState(true);

  const [originEndrings, setOriginEndrings] = useState(true);
  return (
    <>
      <HeadComponent />
      <div className=" h-screen grid relative overflow:hidden main-container">
        <div className="">
          <PostOppsettComponent
            postInfo={postInfo}
            skurlisteInfo={finalSkurlisteInfo}
            setUpdate={setUpdate}
            update={update}
            setPostInfo={setPostInfo}
            setOriginStartrings={setOriginStartrings}
            originStartrings={originStartrings}
            originEndrings={originEndrings}
            setOriginEndrings={setOriginEndrings}
          />
          <Hidden size="medium-down">
            <KlasseInfoComponent
              info={finalSkurlisteInfo}
              setSearchResultModal={setSearchResultModal}
              postInfo={postInfo}
            />
          </Hidden>
        </div>
        <Hidden size="medium-down">
          <SkurlistePostoppsett
            skurliste={skurliste}
            setSkurlisteInfo={setSkurlisteInfo}
            setSearchResultModal={setSearchResultModal}
            searchTrigger={true}
            dotUpdate={dotUpdate}
            setDotUpdate={setDotUpdate}
            openDot={openDot}
            setOpenDot={setOpenDot}
            setOriginStartrings={setOriginStartrings}
            setOriginEndrings={setOriginEndrings}
          />
        </Hidden>

        {searchResultModal && (
          <SearchFromListComponent
            setPostInfo={setPostInfo}
            setSearchResultModal={setSearchResultModal}
            skurlisteInfo={skurlisteInfo}
            poster={poster}
            setSkurlisteInfo={setSkurlisteInfo}
            setFinalSkurlisteInfo={setFinalSkurlisteInfo}
            update={update}
            setUpdate={setUpdate}
            setOpenDot={setOpenDot}
          />
        )}
      </div>
      <style jsx>{`
        .main-container {
          overflow: hidden;
          background: var(--primary);
        }
      `}</style>
    </>
  );
};

export default postoppsett;
