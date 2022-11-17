import React from "react";
import KlasseInfoComponent from "../components/postoppsett/KlasseInfoComponent";
import PostOppsettComponent from "../components/postoppsett/PostOppsettComponent";
import SearchFromListComponent from "../components/reusable components/SearchFromListComponent";
import SkurlisteComponent from "../components/startpage/SkurlisteComponent";

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
}: any) => {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 grid">
        <div className="min-h-screen">
          <PostOppsettComponent
            postInfo={postInfo}
            skurlisteInfo={skurlisteInfo}
          />
          <KlasseInfoComponent
            info={skurlisteInfo}
            setSearchResultModal={setSearchResultModal}
          />
        </div>
        <div className=" px-3 lg:px-60 pt-12 relative min-h-screen">
          <SkurlisteComponent
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
            />
          )}
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default postoppsett;
