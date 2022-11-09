import React, { useState } from "react";

const SearchPostoppsett = ({ searchResult }: any) => {
  return (
    <>
      {searchResult &&
        searchResult.map((item: any) => {
          return (
            <>
              <div className="result-container skew">
                <span>
                  <p className="header">{item.header}</p>
                  <div className="allrings-container">
                    <div className="ring-container">
                      {item.startRings.map(
                        (startRing: {
                          _id: React.Key | null | undefined;
                          input: number | null | undefined;
                        }) => {
                          return (
                            <div key={startRing._id} className="ring">
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
                            <div key={rawRing._id} className="ring raw">
                              <p className="rawInput">{rawRing.input}</p>
                              <p>{(rawRing.input + 1.4).toFixed(1)}</p>
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div className="ring-container">
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
                            <div key={endRing._id} className="ring">
                              {endRing.input}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </span>
              </div>
            </>
          );
        })}
      <style jsx>
        {`
          .header {
            color: var(--text-primary);
          }
          .ring {
            border: 1px solid var(--text-primary);
            width: 36px;
            height: 70px;
            display: grid;
            place-items: center;
            margin-right: 5px;
            color: var(--text-primary);
            box-shadow: 0 0 13px rgba(17, 241, 255, 0.6) inset;
            border-radius: 3px;
          }
          .ring-container {
            display: flex;
            margin-top: 2rem;
            font-weight: 100;
            font-size: 0.8rem;
          }
          .raw {
            background: rgba(17, 241, 255, 0.3);
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
            border: 1px solid var(--text-primary);
            padding: 0.5rem;
            margin-bottom: 0.5rem;
            width: 35rem;
            display: grid;
            place-items: center;
            background: grey;
          }
          .skew {
            border: 1px solid transparent;
            border-right-width: 2px;
            border-image: linear-gradient(top left, #bbb 0%, #999 100%) 1;
            animation: holox-pen 5.4s ease 1s infinite;
            padding: 24px;
            display: block;
            transition: all 330ms linear;
            border-image: linear-gradient(top left, #99fcff 0%, #00f7ff 100%) 1;
            animation-name: holox-fed;
            box-shadow: 0 0 13px rgba(17, 241, 255, 0.6) inset;
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
