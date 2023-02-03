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
  setRingPanelNumber,
  setRingPanelNumberBak,
  setRawPanelValue,
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
            <button
              onClick={utfyllingForanOpenHandler}
              className="btn btn-fill"
            >
              <p className="text-teal-100 tab">Utfylling foran</p>
            </button>
            <button onClick={utfyllingBakOpenHandler} className="btn btn-fill">
              <p
                onClick={utfyllingBakOpenHandler}
                className="text-teal-100 tab"
              >
                Utfylling bak
              </p>
            </button>
            <button onClick={rawOpenHandler} className="btn btn-raw">
              <p onClick={rawOpenHandler} className="text-teal-100 tab">
                Råmål
              </p>
            </button>
          </div>
          <hr />
        </div>
        {utfyllingForanOpen && (
          <div>
            <h4 className="header">Legg til utfylling foran:</h4>
            <RingPanelComponent
              list={ringlist}
              postInfo={postCopy}
              setPostCopy={setPostCopy}
              setUpdate={setUpdate}
              update={update}
              setRingPanelNumber={setRingPanelNumber}
            />
          </div>
        )}
        {utfyllingBakOpen && (
          <div>
            <h4 className="header">Legg til utfylling bak:</h4>
            <RingPanelComponent
              list={ringlist}
              postInfo={postCopy}
              setPostCopy={setPostCopy}
              setUpdate={setUpdate}
              update={update}
              setRingPanelNumber={setRingPanelNumberBak}
            />
          </div>
        )}
        {rawOpen && (
          <div>
            <h4 className="header">Legg til råmål:</h4>
            <input className="input" type="number" />
            <RawInputPanel
              raw={rawInputList}
              postInfo={postCopy}
              setPostCopy={setPostCopy}
              setUpdate={setUpdate}
              update={update}
              setRawPanelValue={setRawPanelValue}
            />
          </div>
        )}
      </div>
      <style jsx>
        {`
          .btn {
            margin-bottom: 0.5rem;
            display: flex;
            width: 100%;
            display: grid;
            place-items: center;
            height: 3rem;
          }
          .btn-fill {
            background: var(--outer2);
          }
          .btn-raw {
            background: var(--center2);
          }
          .header {
            margin: 1rem 0;
          }
          .input {
            background: var(--primary-text);
            margin-bottom: 1rem;
          }
          .sidepanel-container {
            position: absolute;
            top: 0;
            left: 0;
            background: var(--primary);
            width: 17rem;
            z-index: 10;
            animation: fadeInLeft 0.3s;
            margin-top: 2rem;
          }
          .edit-header {
            margin-bottom: 1rem;
            font-weight: bold;
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
