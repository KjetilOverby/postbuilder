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


  const updatePostHandler = async () => {
    const response = await api
      .patch(`/api/poster/posterEdit?ids=${postInfo._id}`, {
        startRings:postInfo.startRings,
        endRings: postInfo.endRings
      })
      .then(() => {
      setUpdate(!update)
      });
  };

  return (
    <>
      <div className=" h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 grid relative overflow:hidden main-container">
        <div className="">
          <PostOppsettComponent
            postInfo={postInfo}
            skurlisteInfo={finalSkurlisteInfo}
            setUpdate={setUpdate}
            update={update}
            setPostInfo={setPostInfo}
            updatePostHandler={updatePostHandler}
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
        }
      `}</style>
    </>
  );
};

export default postoppsett;
