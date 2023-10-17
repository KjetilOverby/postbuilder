import React, { useContext } from "react";
import ListerMainPage from "../components/lister/ListerMainPage";
import AuthWrapper from "../components/auth/AuthWrapper";
import HeadComponent from "../components/reusable components/HeadComponent";
import { ContextAppData } from "../data/context/ContextAppData";
import darkModeColor from "../styles/darkMode";
import HeaderComponent from "../components/reusable components/HeaderComponent";
import SearchModal from "../components/startpage/SearchModal";

const CreateList = ({
  skurliste,
  setSkurlisteInfo,
  skurlisteInfo,
  setUpdate,
  update,
  setOpenSearchModal,
  openSearchModal,
  poster,
  setPostInfo,
}: any) => {
  const { darkMode } = useContext(ContextAppData);
  return (
    <>
      <HeadComponent />
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
      <AuthWrapper>
        <div className="p-10 lister-bg pt-20">
          {/*  <Link href="/">
            <BsBackspace
              style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                color: darkMode ? darkModeColor.text : "rgb(0, 138, 138)",
              }}
            />
          </Link> */}
          <h1 className="text-3xl mb-4 lister-text">Skurlistebehandling</h1>
          <ListerMainPage
            skurliste={skurliste}
            setSkurlisteInfo={setSkurlisteInfo}
            skurlisteInfo={skurlisteInfo}
            setUpdate={setUpdate}
            update={update}
            darkMode={darkMode}
          />
        </div>
      </AuthWrapper>
      <style jsx>
        {`
          .lister-bg {
            min-height: 100vh;

            background: ${darkMode ? darkModeColor.primary : "white"};
          }
          .lister-text {
            color: ${darkMode ? darkModeColor.text : "rgb(0, 138, 138)"};
          }
          @media only screen and (max-width: 1200px) {
            .lister-bg {
              min-width: 200%;
            }
          }
        `}
      </style>
    </>
  );
};

export default CreateList;
