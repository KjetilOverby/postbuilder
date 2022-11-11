import React, { useState } from "react";
import Link from "next/link";

const SearchPostoppsett = ({
  searchResult,
  setPostInfo,
  setSearchResultModal,
}: any) => {
  return (
    <>
      {searchResult &&
        searchResult.map((item: any) => {
          const postInfoHandler = () => {
            setPostInfo(item);
            localStorage.setItem("name", JSON.stringify(item));
            setSearchResultModal(false);
          };
          return (
            <>
              <Link href="/postoppsett">
                <div
                  onClick={postInfoHandler}
                  className="result-container bg-amber-100 rounded-md p-5 mb-5 transition-all hover:bg-amber-200 cursor-pointer"
                >
                  <span>
                    <p className="text-amber-500 font-light">{item.header}</p>
                    <div className="allrings-container">
                      <div className="ring-container ">
                        {item.startRings.map(
                          (startRing: {
                            _id: React.Key | null | undefined;
                            input: number | null | undefined;
                          }) => {
                            return (
                              <div
                                key={startRing._id}
                                className="rings bg-sky-800 text-slate-50"
                              >
                                {startRing.input}
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="ring-container">
                        {item.rawInput.map(
                          (rawRing: {
                            _id: React.Key | null | undefined;
                            input: number;
                          }) => {
                            return (
                              <div
                                key={rawRing._id}
                                className="rings raw bg-blue-300"
                              >
                                <p className="rawInput">{rawRing.input}</p>
                                <p>{(rawRing.input + 1.4).toFixed(1)}</p>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="ring-container ">
                        {item.endRings.map(
                          (endRing: {
                            _id: React.Key | null | undefined;
                            input:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | React.ReactFragment
                              | React.ReactPortal
                              | null
                              | undefined;
                          }) => {
                            return (
                              <div
                                key={endRing._id}
                                className="rings bg-sky-800 text-slate-50"
                              >
                                {endRing.input}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </span>
                </div>
              </Link>
            </>
          );
        })}
      <style jsx>
        {`
          .rings {
            width: 36px;
            height: 70px;
            display: grid;
            place-items: center;
            margin-right: 3px;
            border-radius: 3px;
            border: 1px solid grey;
          }
          .ring-container {
            display: flex;
            margin-top: 2rem;
            font-weight: 100;
            font-size: 0.8rem;
          }
          .raw {
            position: relative;
          }
          .rawInput {
            position: absolute;
            top: -18px;
            font-size: 0.7rem;
          }
          .allrings-container {
            display: flex;
          }
          .result-container {
            width: 35rem;
            display: grid;
            place-items: center;
          }

          @media only screen and (max-width: 756px) {
            .ring {
              width: 20px;
              font-size: 0.5rem;
              height: 45px;
            }
            .result-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchPostoppsett;
