import { Header } from "next/dist/lib/load-custom-routes";
import React, { useState, useContext } from "react";
import Link from "next/link";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import AuthWrapper from "../auth/AuthWrapper";
import { ContextAppData } from "../../data/context/ContextAppData";

interface HeaderProps {
  open: React.Dispatch<React.SetStateAction<boolean>>;
  setSkurlisteInfo: React.Dispatch<React.SetStateAction<any>>;
}

const HeaderComponent = ({ open, setSkurlisteInfo }: HeaderProps) => {
  const { setEditRingPanelValue } = useContext(ContextAppData);
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
        <div className="logo flex items-center flex-shrink-0 mr-6">
          <span className="logo-text font-semibold tracking-tight">
            Postarkiv
          </span>
        </div>
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
            <div>
              <a
                onClick={openPostoppsettHandler}
                href="#"
                className="tab block mt-4 lg:inline-block lg:mt-0 mr-4 uppercase"
              >
                Søk
              </a>
            </div>

            <div>
              <Link href="/calculator">
                <p
                  onClick={() => setEditRingPanelValue(false)}
                  className="tab block mt-4 lg:inline-block lg:mt-0  mr-4 uppercase"
                >
                  Kalkulator
                </p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Link href="/sagblad">
                <p
                  onClick={() => setEditRingPanelValue(false)}
                  className="tab block mt-4 lg:inline-block lg:mt-0  mr-4 uppercase"
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
                  className="tab block mt-4 lg:inline-block lg:mt-0  mr-4 uppercase"
                >
                  Ringer
                </p>
              </Link>
            </div>
          </div>
          <div>
            <AuthWrapper>
              <Link href="/lister">
                <p className="tab block mt-4 lg:inline-block lg:mt-0  mr-4 uppercase">
                  Lister
                </p>
              </Link>
            </AuthWrapper>
          </div>
          <div className="auth-btn-box">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          .header-container {
            background: var(--primary);
            padding: 0.5rem 15rem;
            background: var(--table-bg);
            grid-area: header;
            position: absolute;
            width: 100vw;
          }
          .tab {
            color: var(--primary-text);
            font-size: 0.9rem;
          }
          .logo {
            color: var(--text);
          }
          .logo-text {
            font-size: 3rem;
          }
          .auth-btn-box {
            margin-left: 1rem;
          }
          .tab-container {
            display: flex;
          }

          @media only screen and (max-width: 1000px) {
            .header-container {
              padding: 0.5rem 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default HeaderComponent;
