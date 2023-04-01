import React, { useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { ContextAppData } from "../../data/context/ContextAppData";
import ThemeColorMenu from "./ThemeColorMenu";

const HeaderComponent = ({
  deleteHandler,
  saveCreatedPostHandler,
  setOpenEditSaveModal,
  setChosenTheme,
}: any) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [fileOpen, setFileopen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
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
                  }`}
                >
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
                  }}
                ></div>
              )}
            </>
          ) : (
            <>
              <div className="menu-box-container">
                <p
                  onMouseOver={() => setFileopen(true)}
                  onMouseLeave={() => setFileopen(false)}
                  className="tabs"
                >
                  Fil
                </p>
                {fileOpen && (
                  <div
                    className="menu-box"
                    onMouseOver={() => setFileopen(true)}
                    onMouseLeave={() => setFileopen(false)}
                  >
                    <p
                      onClick={() => setOpenEditSaveModal(true)}
                      className="menu-box-tab"
                    >
                      Oppdater endringer
                    </p>
                    <p
                      onClick={saveCreatedPostHandler}
                      className="menu-box-tab"
                    >
                      Lagre som ny post
                    </p>
                    {/* <p className="menu-box-tab">Nullstill alle verdier</p> */}
                    <p onClick={deleteHandler} className="menu-box-tab">
                      Slett post
                    </p>
                    <Link href="postoppsett">
                      <p onClick={cancelHandler} className="menu-box-tab">
                        Lukk
                      </p>
                    </Link>
                  </div>
                )}
              </div>
              <div className="menu-box-container">
                <p
                  onMouseOver={() => setThemeOpen(true)}
                  onMouseLeave={() => setThemeOpen(false)}
                  className="tabs"
                >
                  Themes
                </p>
                {themeOpen && (
                  <div
                    onMouseOver={() => setThemeOpen(true)}
                    onMouseLeave={() => setThemeOpen(false)}
                    className="menu-box"
                  >
                    <h1 className="theme-header">Dark themes</h1>
                    <ThemeColorMenu
                      click={() => setChosenTheme("purple")}
                      color1="#4b65b3"
                      color2="#52d6f4"
                      color3="#2b6977"
                      title="Blue"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("green")}
                      color1="#29424b"
                      color2="#2b7a78"
                      color3="#def2f1"
                      title="Green"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("futuristic")}
                      color1="#116466"
                      color2="#ceeeda"
                      color3="#d9b08c"
                      title="Futuristic"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("innovative")}
                      color1="#edb5bf"
                      color2="#80414c"
                      color3="#4d6d9a"
                      title="Inovative"
                    />

                    <hr />
                    <h1 className="theme-header">Bright themes</h1>
                    <ThemeColorMenu
                      click={() => setChosenTheme("bright")}
                      color1="#ceeeda"
                      color2="#e98074"
                      color3="#d8c3a5"
                      title="Minimal yet warm"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("flatcolors")}
                      color1="#406568"
                      color2="#77a6f7"
                      color3="#d3e3fc"
                      title="Flat design colors"
                    />
                    <hr />
                    <h1 className="theme-header">Gradient themes</h1>

                    <ThemeColorMenu
                      click={() => setChosenTheme("duskgradient")}
                      color1="#ffd89b"
                      color2="#19547b"
                      color3="#d3e3fc"
                      title="Dusk gradients"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("bluegradient")}
                      color1="#537895"
                      color2="#09203f"
                      color3="#d3e3fc"
                      title="Dark blue"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("anwar")}
                      color1="#cbcaa5"
                      color2="#334d50"
                      color3="#d3e3fc"
                      title="Anwar"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("gold")}
                      color1="rgb(212,154,119)"
                      color2="#292929"
                      color3="#1B2F52"
                      title="Dark gold"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("pinkdarkness")}
                      color1="#E84393"
                      color2="#000000"
                      color3="#d3e3fc"
                      title="Pink darkness"
                    />
                    <ThemeColorMenu
                      click={() => setChosenTheme("greendarkness")}
                      color1="#55EFC4"
                      color2="#000000"
                      color3="#d3e3fc"
                      title="Green darkness"
                    />
                  </div>
                )}
              </div>

              <p onClick={() => setChosenTheme("standard")} className="tabs">
                Råmål
              </p>
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
          width: 10rem;
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
          margin-bottom: 5px;
          margin-right: 1rem;
        }
        .menu-box-tab:hover {
          cursor: pointer;
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
