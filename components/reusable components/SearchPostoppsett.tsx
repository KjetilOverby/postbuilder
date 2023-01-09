import React from "react";
import Link from "next/link";

const SearchPostoppsett = ({
  searchResult,
  setPostInfo,
  setFinalSkurlisteInfo,
  skurlisteInfo,
  closeModal,
  update, 
  setUpdate
}: any) => {
  return (
    <>
      {searchResult &&
        searchResult.map((item: any) => {
          const postInfoHandler = () => {
            setPostInfo(item);
            localStorage.setItem("name", JSON.stringify(item));
            if (skurlisteInfo) {
              setFinalSkurlisteInfo(skurlisteInfo);
              closeModal();
            }
           
          };
          return (
            <>
              <Link href="/postoppsett">
                <div
                  onClick={postInfoHandler}
                  className="post-container result-container rounded-md p-5 mb-5 transition-all hover:bg-amber-200 cursor-pointer"
                >
                  <span>
                    <p className="post-header font-light">{item.header}</p>
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
                                className="rings outer text-slate-50"
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
                                className="rings raw"
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
                                className="rings outer text-slate-50"
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
        .post-container {
          background: var(--finish-text)
        }
        .post-header {
          color: var(--center)
        }
        .post-container:hover {
          background: var(--hover)
        }
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
            background: var(--center)
          }
          .rawInput {
            position: absolute;
            top: -18px;
            font-size: 0.7rem;
            color: white
          }
          .outer {
            background: var(--outer)
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
