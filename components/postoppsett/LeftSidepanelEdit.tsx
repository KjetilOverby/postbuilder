import React from "react";
import RingPanelComponent from "./RingPanelComponent";
import ringlist from "../../data/ringList";
import rawInputList from "../../data/rawinputList";
import RawInputPanel from "./RawInputPanel";

const LeftSidepanelEdit = ({
  setPostCopy,
  postCopy,
  update,
  setUpdate,
  rawOpen,
  utfyllingBakOpen,
  utfyllingForanOpen,
  utfyllingForanOpenHandler,
  utfyllingBakOpenHandler,
  rawOpenHandler,
}: any) => {
  /*   const test = () => {
    setPostCopy({
      ...postCopy,
      startRings: [...postCopy.startRings, { input: 11.1 }],
    });
  }; */

  return (
    <>
      <div className="sidepanel-container p-5">
        <div>
          <h1 className="text-teal-100 edit-header">Redigering</h1>
          <div>
            <p
              onClick={utfyllingForanOpenHandler}
              className="text-teal-100 tab">
              Utfylling foran
            </p>
            <p onClick={utfyllingBakOpenHandler} className="text-teal-100 tab">
              Utfylling bak
            </p>
            <p onClick={rawOpenHandler} className="text-teal-100 tab">
              Råmål
            </p>
          </div>
          <hr />
        </div>
        {utfyllingForanOpen && (
          <div>
            <RingPanelComponent
              list={ringlist}
              postInfo={postCopy}
              setPostCopy={setPostCopy}
              setUpdate={setUpdate}
              update={update}
            />
          </div>
        )}
        {utfyllingBakOpen && (
          <div>
            <RingPanelComponent list={ringlist} />
          </div>
        )}
        {rawOpen && (
          <div>
            <RawInputPanel raw={rawInputList} />
          </div>
        )}
      </div>
      <style jsx>
        {`
          .sidepanel-container {
            position: absolute;
            top: 0;
            left: 0;
            min-height: 100vh;
            background: var(--primary);
            width: 20rem;
            z-index: 10;
            animation: fadeInLeft 0.3s;
            margin-top: 2rem;
          }
          .edit-header {
            margin-bottom: 1rem;
            font-weight: bold;
          }
          .tab {
            margin-bottom: 1rem;
          }
          .tab:hover {
            cursor: pointer;
          }
          @-webkit-keyframes fadeInLeft {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-100%, 0, 0);
              transform: translate3d(-100%, 0, 0);
            }
            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default LeftSidepanelEdit;
