import React, { useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { ContextAppData } from "../../data/context/ContextAppData";
import { MdSecurityUpdate } from "react-icons/md";

const HeaderComponent = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [fileOpen, setFileopen] = useState(false);
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
                    <p className="menu-box-tab">Oppdater endringer</p>
                    <p className="menu-box-tab">Lagre som ny post</p>
                    <p className="menu-box-tab">Nullstill alle verdier</p>
                    <p className="menu-box-tab">Slett post</p>
                    <Link href="postoppsett">
                      <p onClick={cancelHandler} className="menu-box-tab">
                        Avbryt
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/">
                <p className="tabs">Ringer</p>
              </Link>
              <Link href="/">
                <p className="tabs">Råmål</p>
              </Link>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
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
          background-color: #a3e4f5;
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
          color: var(--outer-text);
        }
        .tabs-mobile {
          text-transform: uppercase;
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        .tabs:hover {
          cursor: pointer;
          color: #747474;
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
          color: var(--outer-text);
          font-size: 0.8rem;
          margin-bottom: 5px;
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
