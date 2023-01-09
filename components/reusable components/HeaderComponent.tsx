import { Header } from "next/dist/lib/load-custom-routes";
import React, { useState } from "react";
import Link from "next/link";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import AuthWrapper from "../auth/AuthWrapper";

interface HeaderProps {
  open: React.Dispatch<React.SetStateAction<boolean>>;
  setSkurlisteInfo: React.Dispatch<React.SetStateAction<any>>;
}

const HeaderComponent = ({ open, setSkurlisteInfo }: HeaderProps) => {
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
      <nav className="flex items-center justify-between flex-wrap p-5 lg:p-10 header-container">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-2xl tracking-tight">
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
          <div className="text-sm lg:grid grid-cols-2 ">
            <div>
              <a
                onClick={openPostoppsettHandler}
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-white mr-4 uppercase"
              >
                Søk
              </a>
            </div>
            <div>
              <AuthWrapper>
                <Link href="/lister">
                  <p className="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-white mr-4 uppercase">
                    Lister
                  </p>
                </Link>
              </AuthWrapper>
            </div>
          </div>
          <div>
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          .header-container {
            background: var(--primary);
            padding: .5rem 15rem;
            background: var(--table-bg);
            margin-bottom: 5rem
          
          }
          @media only screen and (max-width: 1000px) {
           .header-container {
            padding: .5rem 1rem
           }
          }
         
        `}
      </style>
    </>
  );
};

export default HeaderComponent;
