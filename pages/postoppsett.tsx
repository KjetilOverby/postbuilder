import React from "react";
import KlasseInfoComponent from "../components/postoppsett/KlasseInfoComponent";
import PostOppsettComponent from "../components/postoppsett/PostOppsettComponent";
import SkurlistePostoppsett from "../components/postoppsett/SkurlistePostoppsett";
import SearchFromListComponent from "../components/reusable components/SearchFromListComponent";
import SkurlisteComponent from "../components/startpage/SkurlisteComponent";
import axios from "axios";

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
}: any) => {
  return (
    <>
      <div className=" h-screen grid relative overflow:hidden main-container">
        <div className="">
          <PostOppsettComponent
            postInfo={postInfo}
            skurlisteInfo={finalSkurlisteInfo}
            setUpdate={setUpdate}
            update={update}
            setPostInfo={setPostInfo}
          />
          <KlasseInfoComponent
            info={finalSkurlisteInfo}
            setSearchResultModal={setSearchResultModal}
          />
        </div>
        <SkurlistePostoppsett
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
            update={update}
            setUpdate={setUpdate}
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
