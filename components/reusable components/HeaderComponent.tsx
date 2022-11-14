import { Header } from "next/dist/lib/load-custom-routes";
import React, { useState } from "react";

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
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-stone-900 to-purple-600  p-5 lg:p-20">
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
          <div className="text-sm lg:flex-grow">
            <a
              onClick={openPostoppsettHandler}
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-white mr-4 uppercase"
            >
              Søk
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-white mr-4 uppercase"
            >
              Ny post
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-stone-400 hover:text-white uppercase"
            >
              Rediger
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 hover:text-white"
            >
              Sign in
            </a>
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default HeaderComponent;
