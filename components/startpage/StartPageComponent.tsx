import React, { useState, useEffect } from "react";
import HeaderComponent from "../reusable components/HeaderComponent";
import SearchPostoppsett from "../reusable components/SearchPostoppsett";
import SearchModal from "./SearchModal";
import SkurlisteComponent from "./SkurlisteComponent";
interface SkurlisteProps {
  skurliste: {
    map(arg0: (item: any) => JSX.Element): React.ReactNode;
    treslag: string;
  };
  setOpenSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSkurlisteInfo: React.Dispatch<React.SetStateAction<string>>;
  skurlisteInfo: any;
  poster: {
    length: {
      filter(arg0: (item: any) => any): React.SetStateAction<undefined>;
      startRings: [
        {
          input: {
            type: number;
          };
        }
      ];
      rawInput: [
        {
          input: {
            type: number;
          };
          ring: {
            type: number;
          };
          shims: {
            type: number;
          };
          shims2: {
            type: number;
          };
          shims3: {
            type: number;
          };
        }
      ];
      endRings: [
        {
          input: {
            type: number;
          };
        }
      ];
      blades: {
        bladStamme: {
          type: number;
        };
      };
      header: {
        type: string;
      };
      prosent: {
        type: string;
      };
      planker: {
        type: string;
      };
      spes: {
        type: string;
      };
      nameClass: {
        type: string;
      };
      date: {
        type: Date;
      };
      editDate: {
        type: Date;
      };
    };
    filter(arg0: (item: any) => any): React.SetStateAction<undefined>;
    startRings: [
      {
        input: {
          type: number;
        };
      }
    ];
    rawInput: [
      {
        input: {
          type: number;
        };
        ring: {
          type: number;
        };
        shims: {
          type: number;
        };
        shims2: {
          type: number;
        };
        shims3: {
          type: number;
        };
      }
    ];
    endRings: [
      {
        input: {
          type: number;
        };
      }
    ];
    blades: {
      bladStamme: {
        type: number;
      };
    };
    header: {
      type: string;
    };
    prosent: {
      type: string;
    };
    planker: {
      type: string;
    };
    spes: {
      type: string;
    };
    nameClass: {
      type: string;
    };
    date: {
      type: Date;
    };
    editDate: {
      type: Date;
    };
  };
  setPostInfo: React.Dispatch<React.SetStateAction<string>>;
}

const StartPageComponent = ({
  skurliste,
  setOpenSearchModal,
  setSkurlisteInfo,
  skurlisteInfo,
  poster,
  setPostInfo,
}: SkurlisteProps) => {
  const [searchString, setSearchString] = useState<string>();
  const [searchStringResult, setSearchStringResult] = useState();
  const [searchResultModal, setSearchResultModal] = useState<boolean>(false);

  useEffect(() => {
    if (skurlisteInfo) {
      setSearchString(
        `${skurlisteInfo.post}-${skurlisteInfo.prosent}%-${skurlisteInfo.blad}`
      );
    }
  }, [skurlisteInfo]);

  useEffect(() => {
    if (poster) {
      setSearchStringResult(
        poster.filter((item: any) => item.header.includes(searchString))
      );
      setSearchResultModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  const showAllHandler = () => {
    setSearchString(`${skurlisteInfo.post}-${skurlisteInfo.prosent}%-`);
  };

  const closeModal = () => {
    setSearchResultModal(false);
  };

  return (
    <>
      <HeaderComponent open={setOpenSearchModal} />
      <div className="container mx-auto px-12 md:px-60 pt-12">
        <h1 className="header text-2xl">Skurplan</h1>
        <SkurlisteComponent
          skurliste={skurliste}
          setSkurlisteInfo={setSkurlisteInfo}
        />

        {searchResultModal && (
          <div className="absolute right-5 top-52 bg-slate-500 p-5 shadow-xl bounceIn">
            <button
              className="border pl-2 pr-2 mb-2 py-1 rounded-md mr-4 text-slate-50 text-xs bg-slate-600 hover:bg-slate-500 transition-all duration-300"
              onClick={closeModal}
            >
              Lukk
            </button>
            <button
              className="border pl-2 pr-2 mb-2 py-1 rounded-md text-slate-50 text-xs bg-slate-600 hover:bg-slate-500 transition-all duration-300"
              onClick={showAllHandler}
            >
              Vis alle
            </button>
            <SearchPostoppsett
              setSearchResultModal={setSearchResultModal}
              searchResult={searchStringResult}
              setPostInfo={setPostInfo}
            />
          </div>
        )}
      </div>
      <style jsx>{`
        .bounceIn {
          animation: bounceInRight 0.8s;
        }
        @-webkit-keyframes bounceInRight {
          0%,
          60%,
          75%,
          90%,
          100% {
            -webkit-transition-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            -webkit-transform: translate3d(3000px, 0, 0);
            transform: translate3d(3000px, 0, 0);
          }
          60% {
            opacity: 1;
            -webkit-transform: translate3d(-25px, 0, 0);
            transform: translate3d(-25px, 0, 0);
          }
          75% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
          }
          90% {
            -webkit-transform: translate3d(-5px, 0, 0);
            transform: translate3d(-5px, 0, 0);
          }
          100% {
            -webkit-transform: none;
            transform: none;
          }
        }
        @-webkit-keyframes zoomInDown {
          0% {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }
          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, 60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }
      `}</style>
    </>
  );
};

export default StartPageComponent;
