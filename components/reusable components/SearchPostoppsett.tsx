import React, { useContext } from "react";
import Link from "next/link";
import dateFormat from "dateformat";
import { ContextAppData } from "../../data/context/ContextAppData";

const SearchPostoppsett = ({
  searchResult,
  setPostInfo,
  setFinalSkurlisteInfo,
  skurlisteInfo,
  closeModal,
  update,
  setUpdate,
}: any) => {
  const { setPostID } = useContext(ContextAppData);

  return (
    <>
      {searchResult &&
        searchResult.map((item: any) => {
          const postInfoHandler = () => {
            setPostID(item._id);
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
                  className="post-container result-container rounded-md p-5 mb-5 transition-all hover:bg-amber-200 cursor-pointer">
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
                              <div key={startRing._id} className="rings outer">
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
                              <div key={rawRing._id} className="rings raw">
                                <p className="rawInput">{rawRing.input}</p>
                                <p className="ringval">
                                  {(rawRing.input + 1.4).toFixed(1)}
                                </p>
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
                              <div key={endRing._id} className="rings outer">
                                {endRing.input}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="alt-box">
                      {item.startRings2.length > 1 && (
                        <p className="alt alt1">A</p>
                      )}
                      {item.endRings2.length > 1 && (
                        <p className="alt alt2">B</p>
                      )}
                    </div>
                  </span>
                  <p className="date">
                    opprettelsesdato:{" "}
                    {item.date
                      ? dateFormat(item.date, "dd.mm.yyyy, HH:MM")
                      : "ukjent"}
                  </p>
                </div>
              </Link>
            </>
          );
        })}
      <style jsx>
        {`
          .alt {
            width: 1rem;
            height: 1rem;
            display: grid;
            place-items: center;
            border-radius: 50%;
            font-size: 0.7rem;
            color: white;
          }
          .alt1 {
            background: seagreen;
          }
          .alt2 {
            background: dodgerblue;
          }
          .alt-box {
            position: absolute;
            top: 10px;
            right: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            width: 3rem;
          }
          .date {
            font-size: 0.7rem;
            font-style: italic;
            color: grey;
          }
          .post-container {
            background: var(--finish-text);
            position: relative;
          }

          .post-header {
            color: var(--primary-text);
          }
          .post-container:hover {
            background: var(--hover);
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
          .ringval {
            color: black;
          }
          .raw {
            position: relative;
            background: var(--center);
          }
          .rawInput {
            position: absolute;
            top: -18px;
            font-size: 0.7rem;
            color: white;
          }
          .outer {
            background: var(--outer);
            color: var(--outer-text);
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
            .rings {
              width: 25px;
              font-size: 0.5rem;
              height: 45px;
            }
            .result-container {
              width: 100%;
            }
            .ringval {
              font-size: 0.5rem;
            }
            .rawInput {
              font-size: 0.5rem;
            }
            .post-header {
              font-size: 0.8rem;
            }
            .ring-container {
              font-size: 0.6rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchPostoppsett;
