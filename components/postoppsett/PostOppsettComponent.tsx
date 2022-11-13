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
            <h1 className="text-slate-400 text-xl  md:text-1xl lg:text-4xl">
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
                        <div className="outerRingContainer fillringcontainer ">
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
            color: #333;
            font-size: 1.5rem;
            box-shadow: inset 1px 1px 15px grey;
          }
          .fillrings {
            background-image: linear-gradient(to top, #3fd2c7 0%, #99ddff 100%);
          }
          .rawrings {
            background-image: linear-gradient(45deg, #de9e48 0%, #e1e2e2 100%);
          }
          .outerRingContainer {
            height: 11.4rem;
            width: 5.4rem;
            border: 1px solid grey;
            display: grid;
            place-items: center;
            margin-right: 4px;
            border-radius: 5px;
            position: relative;
          }
          .sawBlade {
            position: absolute;
            height: 30rem;
            width: 0.3rem;
            left: -5px;
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
            font-size: 0.5rem;
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
          @media only screen and (max-width: 1000px) {
            .ringcomponent {
              height: 6rem;
              width: 2.8rem;

              font-size: 0.8rem;
            }

            .outerRingContainer {
              height: 6.5rem;
              width: 3.3rem;
              margin-right: 5px;
            }
            .sawBlade {
              height: 15rem;
              width: 0.2rem;
              left: -5px;
            }
            .sawBlade2 {
              height: 15rem;
              width: 0.2rem;
              top: -7.5rem;
            }
            .postoppsettHeader {
              top: 15px;
            }
            .shims {
              font-size: 10px;
            }
            .rawInput {
              font-size: 10px;
              color: lightgrey;
              top: -15px;
            }
            .bladstamme {
              font-size: 10px;
              bottom: -15px;
              left: -5px;
            }
            .sagsnitt {
              font-size: 10px;
              top: -14px;
              left: -5px;
            }
          }
          @media only screen and (max-width: 656px) {
            .postoppsettHeader {
              top: 150px;
            }
            .ringcomponent {
              height: 4rem;
              width: 2rem;

              font-size: 0.8rem;
            }

            .outerRingContainer {
              height: 4rem;
              width: 2rem;
              border: none;
              margin-right: 1px;
            }
            .sawBlade {
              height: 10rem;
              width: 0.1rem;
              left: -2px;
            }
            .sawBlade2 {
              height: 10rem;
              width: 0.1rem;
              top: -5rem;
              left: -2px;
            }
            .shims {
              font-size: 7px;
            }
            .rawInput {
              font-size: 7px;
              color: lightgrey;
              top: -15px;
            }
            .bladstamme {
              font-size: 7px;
              bottom: -12px;
              left: -5px;
            }
            .sagsnitt {
              font-size: 7px;
              top: -10px;
              left: -5px;
            }
          }
        `}
      </style>
    </>
  );
};

export default PostOppsettComponent;
