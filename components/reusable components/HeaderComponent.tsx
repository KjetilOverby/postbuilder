import { Header } from "next/dist/lib/load-custom-routes";
import React, { useState, useContext } from "react";
import Link from "next/link";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import AuthWrapper from "../auth/AuthWrapper";
import { ContextAppData } from "../../data/context/ContextAppData";
import darkModeColor from "../../styles/darkMode";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

interface HeaderProps {
  open: React.Dispatch<React.SetStateAction<boolean>>;
  setSkurlisteInfo: React.Dispatch<React.SetStateAction<any>>;
}

const HeaderComponent = ({ open, setSkurlisteInfo }: HeaderProps) => {
  const {
    setEditRingPanelValue,
    setDarkMode,
    darkMode,
    setDarkModeLocal,
    darkModeLocal,
  } = useContext(ContextAppData);
  const [hidden, setHidden] = useState(false);
  const openPostoppsettHandler = () => {
    setSkurlisteInfo(
      localStorage.setItem("name", JSON.stringify({ name: "Ingen data" }))
    );
    open(true);
  };

  const openMenu = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <nav className="p-5 lg:p-10 header-container">
        <div className="block lg:hidden">
          <button
            onClick={openMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            hidden === true ? "" : "hidden"
          } lg-block`}
        >
          <div className="text-sm tab-container">
            <Link href="/">
              <div className="logo flex items-center flex-shrink-0 mr-6">
                <span className="logo-text font-semibold tracking-tight">
                  Postarkiv
                </span>
              </div>
            </Link>
            <div>
              <Link href="/calculator">
                <p
                  onClick={() => setEditRingPanelValue(false)}
                  className="tab block mt-4 lg:inline-block lg:mt-0  mr-4"
                >
                  Kalkulator
                </p>
              </Link>
            </div>
            <div>
              <div>
                <Link href="/sagblad">
                  <p
                    onClick={() => setEditRingPanelValue(false)}
                    className="tab block mt-4 lg:inline-block lg:mt-0  mr-4"
                  >
                    Sagblad
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <Link href="/ringer">
                  <p
                    onClick={() => setEditRingPanelValue(false)}
                    className="tab block mt-4 lg:inline-block lg:mt-0  mr-4"
                  >
                    Ringer
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <Link href="/tabell">
                  <p
                    onClick={() => setEditRingPanelValue(false)}
                    className="tab block mt-4 lg:inline-block lg:mt-0  mr-4"
                  >
                    Råmålstabell
                  </p>
                </Link>
              </div>
            </div>

            <div>
              <AuthWrapper>
                <Link href="/lister">
                  <p className="tab block mt-4 lg:inline-block lg:mt-0  mr-4">
                    Lister
                  </p>
                </Link>
              </AuthWrapper>
            </div>
            <div className="auth-btn-box">
              <div className="darkmode-icon hover:bg-gray-500 transition">
                <BiSearchAlt
                  onClick={openPostoppsettHandler}
                  style={{ color: "white", fontSize: ".8rem" }}
                />
              </div>
              <div
                className="darkmode-icon hover:bg-gray-500 transition"
                onClick={() => setDarkModeLocal(!darkModeLocal)}
              >
                {darkMode ? (
                  <BsFillSunFill
                    style={{ color: darkModeColor.text, fontSize: ".8rem" }}
                  />
                ) : (
                  <BsFillMoonFill
                    style={{ color: "white", fontSize: ".8rem" }}
                  />
                )}
              </div>
              <div className="hover:bg-gray-500 transition">
                <LoginButton />
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          .header-container {
            background: ${darkMode
              ? darkModeColor.primary
              : "rgb(0, 138, 138)"};
            padding: 1rem 15rem;
            grid-area: header;
            position: absolute;
            width: 100vw;
            border-bottom: 1px solid
              ${darkMode ? darkModeColor.grey : "rgb(0, 138, 138)"};
            display: flex;
          }
          .tab {
            color: white;
            font-size: 0.8rem;
          }

          .logo-text {
            font-size: 1.5rem;
            color: ${darkMode ? darkModeColor.orange : "rgb(224, 242, 241)"};
          }
          .auth-btn-box {
            margin-left: auto;
            display: flex;
          }
          .tab-container {
            display: flex;
            width: 100%;
            padding-right: 1rem;
            align-items: center;
          }
          .darkmode-icon:hover {
            cursor: pointer;
          }
          .darkmode-icon {
            border: 1px solid white;
            padding: 5px;
            border-radius: 5px;
            margin-right: 1rem;
          }

          @media only screen and (max-width: 1000px) {
            .header-container {
              padding: 0.5rem 1rem;
            }
            .tab-container {
              display: grid;
              height: 40vh;
            }
          }
        `}
      </style>
    </>
  );
};

export default HeaderComponent;
