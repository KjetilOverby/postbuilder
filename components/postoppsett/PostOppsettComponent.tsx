import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useComponentDidMount from "../customHooks/UseComponentDidMount";

const PostOppsettComponent = ({ postInfo }: any) => {
  const router = useRouter();

  const [localStargeItem, setLocalStargeItem] = useState<any>();
  const [parsedPost, setParsedPost] = useState<any>();

  const isComponentMounted = useComponentDidMount();

  useEffect(() => {
    if (isComponentMounted) {
      localStorage.setItem("name", JSON.stringify(postInfo));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postInfo]);

  useEffect(() => {
    setLocalStargeItem(localStorage.getItem("name"));
  }, []);

  useEffect(() => {
    if (localStargeItem) {
      setParsedPost(JSON.parse(localStargeItem));
    }
  }, [localStargeItem]);

  return (
    <>
      <div className="">
        <div className="grid place-items-center h-screen">
          <div className="absolute postoppsettHeader">
            <h1 className="top-20 text-slate-200">
              {parsedPost && parsedPost.header}
            </h1>
          </div>
          <div>
            <div className="flex items-center animate-container">
              <div className="flex">
                {parsedPost &&
                  parsedPost.startRings.map((item: any) => {
                    return (
                      <>
                        <div className="outerRingContainer fillringcontainer">
                          <div
                            key={item._id}
                            className="ringcomponent fillrings"
                          >
                            {item.input}
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
              <div className="flex relative">
                {parsedPost &&
                  parsedPost.rawInput.map((item: any) => {
                    return (
                      <>
                        <div className="outerRingContainer centerringcontainer">
                          <p className="absolute rawInput">{item.input}</p>
                          <div
                            key={item._id}
                            className="ringcomponent rawrings"
                          >
                            {(item.input && item.input + 1.4).toFixed(1)}
                          </div>
                          {item.ring && (
                            <div className="shims-container">
                              <p className="shims shims1">{item.ring}</p>
                              <p className="shims shims2">
                                {(
                                  item.input +
                                  1.4 -
                                  item.ring -
                                  Number(
                                    item.shims2 != undefined && item.shims2
                                  )
                                ).toFixed(1)}
                              </p>
                              <p className="shims shims3">
                                {item.shims2 != undefined &&
                                  item.shims2 -
                                    Number(
                                      item.shims3 != undefined && item.shims3
                                    )}
                              </p>
                              <p className="shims">
                                {item.shims3 &&
                                  (item.shims2 - item.shims3).toFixed(1)}
                              </p>
                            </div>
                          )}
                          <div className="sawBlade bg-slate-500">
                            <p className="bladstamme">
                              {parsedPost.blades.bladStamme.toFixed(1)}
                            </p>
                            <p className="sagsnitt">
                              {parsedPost &&
                                (parsedPost.blades.bladStamme + 1.4).toFixed(1)}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
              <div className="relative">
                <div className="sawBlade2 bg-slate-500">
                  <p className="bladstamme">
                    {parsedPost && parsedPost.blades.bladStamme.toFixed(1)}
                  </p>
                  <p className="sagsnitt">
                    {parsedPost &&
                      (parsedPost.blades.bladStamme + 1.4).toFixed(1)}
                  </p>
                </div>
              </div>

              <div className="flex">
                {parsedPost &&
                  parsedPost.endRings.map((item: any) => {
                    return (
                      <>
                        <div className="outerRingContainer">
                          <div
                            key={item._id}
                            className="ringcomponent fillrings"
                          >
                            {item.input}
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .postoppsettHeader {
            transform: translateX(-50%);
            left: 50%;
            top: 5rem;
            font-size: 2rem;
          }
          .animate-container {
            animation: rubberBand 1.2s;
          }
          .ringcomponent {
            border: 1px solid grey;
            height: 11rem;
            width: 5rem;
            display: grid;
            place-items: center;
            border-radius: 5px;
            color: slategrey;
            font-size: 1.5rem;
          }
          .fillrings {
            background-image: linear-gradient(to top, #3fd2c7 0%, #99ddff 100%);
          }
          .rawrings {
            background-image: linear-gradient(45deg, #fb8122 0%, #e1e2e2 100%);
          }
          .outerRingContainer {
            height: 11.5rem;
            width: 5.5rem;
            border: 1px solid grey;
            display: grid;
            place-items: center;
            margin-right: 5px;
            border-radius: 5px;
            position: relative;
          }
          .sawBlade {
            position: absolute;
            height: 30rem;
            width: 0.3rem;
            left: -5px;
            border: 0.5px solid black;
            border: 0.5px solid lightgrey;
          }
          .sawBlade2 {
            height: 30rem;
            width: 0.3rem;
            position: absolute;
            left: -4px;
            top: -15rem;
            border: 0.5px solid lightgrey;
            z-index: 10;
          }
          .rawInput {
            top: -24px;
            font-size: 0.8rem;
            color: lightgrey;
          }
          .shims-container {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            bottom: -85px;
            height: 5rem;
          }
          .shims {
            color: black;
            font-size: 0.8rem;
            color: lightgrey;
          }
          .bladstamme {
            position: absolute;
            bottom: -18px;
            font-size: 0.8rem;
            right: -8px;
            color: lightgrey;
          }
          .sagsnitt {
            position: absolute;
            top: -18px;
            font-size: 0.8rem;
            right: -8px;
            color: lightgrey;
          }

          @keyframes rubberBand {
            0% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
            30% {
              -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
            }
            40% {
              -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
            }
            50% {
              -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
            }
            65% {
              -webkit-transform: scale3d(0.95, 1.05, 1);
              transform: scale3d(0.95, 1.05, 1);
            }
            75% {
              -webkit-transform: scale3d(1.05, 0.95, 1);
              transform: scale3d(1.05, 0.95, 1);
            }
            100% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }
        `}
      </style>
    </>
  );
};

export default PostOppsettComponent;
