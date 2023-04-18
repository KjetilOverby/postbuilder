import React, { useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenuSharp } from "react-icons/io5";
import { GiSave } from "react-icons/gi";
import { TfiSave } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import Link from "next/link";
import { ContextAppData } from "../../data/context/ContextAppData";
import ThemeColorMenu from "./ThemeColorMenu";

const HeaderComponent = ({
  deleteHandler,
  saveCreatedPostHandler,
  setOpenEditSaveModal,
  setChosenTheme,
  setChosenFont,
}: any) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [fileOpen, setFileopen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [fontOpen, setFontOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  const openSidebarHandler = () => {
    setHideSidebar(true);
    setOpenSidebar(!openSidebar);
  };
  const { setOpenEdit, update, setUpdate } = useContext(ContextAppData);

  const cancelHandler = () => {
    setOpenEdit(false);
  };

  return (
    <>
      <div className="head-container">
        <div className="tabContainer">
          {isMobile ? (
            <>
              <IoMenuSharp
                onClick={openSidebarHandler}
                className="drawerIcon"
                style={{ fontSize: "2rem" }}
              />
              {hideSidebar && (
                <div
                  className={`sidebar-container ${
                    openSidebar ? "sidebar-open" : "sidebar-close"
                  }`}>
                  <Link href="/">
                    <p className="tabs-mobile">Fil</p>
                  </Link>
                  <Link href="/">
                    <p className="tabs-mobile">Ringer</p>
                  </Link>
                  <Link href="/">
                    <p className="tabs-mobile">Råmål</p>
                  </Link>
                </div>
              )}
              {openSidebar && (
                <div
                  onClick={openSidebarHandler}
                  style={{
                    background: "rgba(256,256,256,.0)",
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}></div>
              )}
            </>
          ) : (
            <>
              <div className="menu-box-container">
                <p
                  onMouseOver={() => setFileopen(true)}
                  onMouseLeave={() => setFileopen(false)}
                  className="tabs">
                  Fil
                </p>
                {fileOpen && (
                  <div
                    className="menu-box"
                    onMouseOver={() => setFileopen(true)}
                    onMouseLeave={() => setFileopen(false)}>
                    <div
                      onClick={() => setOpenEditSaveModal(true)}
                      className="menu-icon-container">
                      <GiSave
                        style={{
                          color: "var(--primary-text)",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="menu-box-tab">Oppdater endringer</p>
                    </div>
                    <div
                      onClick={saveCreatedPostHandler}
                      className="menu-icon-container">
                      <TfiSave
                        style={{
                          color: "var(--primary-text)",
                          marginRight: "1rem",
                          fontSize: ".8rem",
                        }}
                      />
                      <p className="menu-box-tab">Lagre som ny post</p>
                    </div>
                    <div
                      onClick={deleteHandler}
                      className="menu-icon-container">
                      <RiDeleteBin6Line
                        style={{
                          color: "var(--primary-text)",
                          marginRight: "1rem",
                          fontSize: "1rem",
                        }}
                      />
                      <p className="menu-box-tab">Slett post</p>
                    </div>
                    <Link href="postoppsett">
                      <div
                        onClick={cancelHandler}
                        className="menu-icon-container">
                        <RiLogoutBoxLine
                          style={{
                            color: "var(--primary-text)",
                            marginRight: "1rem",
                            fontSize: "1rem",
                          }}
                        />
                        <p className="menu-box-tab">Lukk</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div className="menu-box-container">
                <p
                  onMouseOver={() => setThemeOpen(true)}
                  onMouseLeave={() => setThemeOpen(false)}
                  className="tabs">
                  Themes
                </p>
                {themeOpen && (
                  <div
                    onMouseOver={() => setThemeOpen(true)}
                    onMouseLeave={() => setThemeOpen(false)}
                    className="menu-box">
                    <h1 className="theme-header">Dark themes</h1>
                    <ThemeColorMenu
                      click={() => setChosenTheme("Steelblue")}
                      color1="#557a95"
                      color2="#bcd9ee"
                      color3="#b1a296"
                      title="Steelblue"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Cadet")}
                      color1="#2b7a78"
                      color2="#9c9c9c"
                      color3="#def2f1"
                      title="Cadet"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Futuristic")}
                      color1="#116466"
                      color2="#406568"
                      color3="#d9b08c"
                      title="Futuristic"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Innovative")}
                      color1="#5a5560"
                      color2="#80414c"
                      color3="#9b786f"
                      title="Innovative"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Sahara night")}
                      color1="#2d545e"
                      color2="#c89666"
                      color3="#99ced3"
                      title="Sahara night"
                    />

                    <hr />
                    <h1 className="theme-header">Light themes</h1>
                    <ThemeColorMenu
                      click={() => setChosenTheme("Tomato")}
                      color1="#8e8d8a"
                      color2="#e98074"
                      color3="#d8c3a5"
                      title="Tomato"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Dodger")}
                      color1="#406568"
                      color2="#77a6f7"
                      color3="#d3e3fc"
                      title="Dodger"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Quick silver")}
                      color1="#b1a6a4"
                      color2="#f2f1ef"
                      color3="#1B2F52"
                      title="Quick silver"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Green pearl")}
                      color1="#39603d"
                      color2="#a3bcb6"
                      color3="#daded4"
                      title="Green pearl"
                    />
                    <hr />
                    <h1 className="theme-header">Gradient themes</h1>

                    <ThemeColorMenu
                      click={() => setChosenTheme("Dusk")}
                      color1="#ffd89b"
                      color2="#19547b"
                      color3="#d3e3fc"
                      title="Dusk"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Dark blue")}
                      color1="#537895"
                      color2="#09203f"
                      color3="#d3e3fc"
                      title="Dark blue"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Anwar")}
                      color1="#cbcaa5"
                      color2="#334d50"
                      color3="#d3e3fc"
                      title="Anwar"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("Dark bronze")}
                      color1="rgb(212,154,119)"
                      color2="#292929"
                      color3="#1B2F52"
                      title="Dark bronze"
                    />
                    {/*  <ThemeColorMenu
                      click={() => setChosenTheme("Pink darkness")}
                      color1="#E84393"
                      color2="#000000"
                      color3="#d3e3fc"
                      title="Pink darkness"
                    /> */}
                    <ThemeColorMenu
                      click={() => setChosenTheme("Green darkness")}
                      color1="#55EFC4"
                      color2="#000000"
                      color3="#d3e3fc"
                      title="Green darkness"
                    />
                  </div>
                )}
              </div>
              <div className="menu-box-container">
                <p
                  onMouseOver={() => setFontOpen(true)}
                  onMouseLeave={() => setFontOpen(false)}
                  className="tabs">
                  Fonts
                </p>
                {fontOpen && (
                  <div
                    onMouseOver={() => setFontOpen(true)}
                    onMouseLeave={() => setFontOpen(false)}
                    className="menu-box">
                    <div
                      onClick={() => setChosenFont("Abel")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Abel</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Krub")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Krub</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Chakra Petch")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Chakra Petch</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Exo")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Exo</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Fjalla One")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Fjalla One</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Orbitron")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Orbitron</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Red Hat Display")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Red Hat Display</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Roboto")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Roboto</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Saira Condensed")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Saira Condensed</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Space Grotesk")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Space Grotesk</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Unica One")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Unica One</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Poiret One")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Poiret One</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Electrolize")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Electrolize</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Armata")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Armata</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Fira Code")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Fira Code</p>
                    </div>

                    <div
                      onClick={() => setChosenFont("Maitree")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Maitree</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Nixie One")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Nixie One</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Buda")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Buda</p>
                    </div>
                    <div
                      onClick={() => setChosenFont("Mina")}
                      className="menu-icon-container">
                      <p className="menu-box-tab">Mina</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        hr {
          border-color: var(--primary-text);
        }
        .head-container {
          height: 2rem;
          background: var(--table-bg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          position: fixed;
          width: 100vw;
          z-index: 1000;
        }

        .sidebar-container {
          position: absolute;
          background-color: var(--primary);
          left: 0;
          width: 10rem;
          height: 80vh;
          top: 6rem;
          padding-left: 1rem;
          left: -10rem;
          z-index: 100;
          padding-top: 1rem;
        }
        .sidebar-open {
          animation: slide 0.3s forwards;
        }
        .sidebar-close {
          animation: slideClose 0.5s forwards;
        }
        .theme-header {
          color: var(--primary-text);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .menu-icon-container {
          display: flex;
          padding: 0.5rem;
        }
        .menu-icon-container:hover {
          cursor: pointer;
          background: var(--primary);
          opacity: 0.5;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(10rem);
          }
        }
        @keyframes slideClose {
          0% {
            transform: translateX(10rem);
          }
          100% {
            transform: translateX(-10rem);
          }
        }
        .tabs {
          text-transform: uppercase;
          transition: 0.5s;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--mark);
        }
        .tabs-mobile {
          text-transform: uppercase;
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        .tabs:hover {
          cursor: pointer;
          color: var(--center);
        }
        .tabContainer {
          width: 12rem;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .menu-box-container {
          position: relative;
        }
        .menu-box {
          background: var(--table-bg);
          width: 15rem;
          position: absolute;
          padding: 1rem;
          left: -1rem;
          animation: fadeIn 0.5s;
        }
        .menu-box-tab {
          color: var(--primary-text);
          font-size: 0.8rem;
          margin-right: 1rem;
        }

        @media screen and (max-width: 1000px) {
          .container {
            padding: 0 1rem;
          }
          .tabContainer {
            justify-content: flex-end;
          }
        }
        @media screen and (max-width: 650px) {
          .logoContainer {
            width: 40rem;
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
export default HeaderComponent;
