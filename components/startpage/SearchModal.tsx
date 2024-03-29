import React, { useState, useEffect, useContext } from "react";
import SearchPostoppsett from "../reusable components/SearchPostoppsett";
import { SearchProps } from "../../tsmodules/SearchProps";
import darkModeColor from "../../styles/darkMode";
import { ContextAppData } from "../../data/context/ContextAppData";

const SearchModal = ({
  setOpenSearchModal,
  poster,
  setPostInfo,
}: SearchProps) => {
  const [searchResult, setSearchResult] = useState<any>();
  const [input, setInput] = useState();
  useEffect(() => {
    if (poster) {
      setSearchResult(
        poster.filter((item: any) => item.header.includes(input))
      );
    }
  }, [input, poster]);

  const { darkMode } = useContext(ContextAppData);
  return (
    <>
      <div className="main-container h-screen pt-12 backdrop-blur-sm fixed left-0 top-0 w-screen overflow-scroll z-10">
        <div className="w-96">
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                onChange={(e: any) => setInput(e.target.value)}
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </form>
          <p className="text">{`Antall poster: ${poster && poster.length}`}</p>
          <p className="text">
            Antall treff: {searchResult && searchResult.length}
          </p>
          <button className="text" onClick={() => setOpenSearchModal(false)}>
            Close
          </button>
          <div className="mt-12">
            <SearchPostoppsett
              searchResult={searchResult}
              setPostInfo={setPostInfo}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main-container {
            width: 100vw;
            padding: 5rem 15rem;
          }
          .text {
            color: ${darkMode ? darkModeColor.text : "black"};
          }
          @media only screen and (max-width: 1000px) {
            .main-container {
              padding: 5rem 0.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchModal;
