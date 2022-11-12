import React from "react";
import KlasseInfoComponent from "../components/postoppsett/KlasseInfoComponent";
import PostOppsettComponent from "../components/postoppsett/PostOppsettComponent";
import SkurlisteComponent from "../components/startpage/SkurlisteComponent";

const postoppsett = ({ postInfo, skurlisteInfo, skurliste }: any) => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-900 grid">
        <PostOppsettComponent postInfo={postInfo} />
        <KlasseInfoComponent info={skurlisteInfo} />
        <div className="container px-3 lg:px-60 pt-12">
          <SkurlisteComponent
            skurliste={skurliste}
            setSkurlisteInfo={skurlisteInfo}
            setSearchResultModal={function (
              value: React.SetStateAction<boolean>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default postoppsett;
