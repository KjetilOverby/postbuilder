import React from "react";
import RingPanelComponent from "./RingPanelComponent";
import ringlist from "../../data/ringList";
import rawInputList from "../../data/rawinputList";
import RawInputPanel from "./RawInputPanel";
import DetailsInputComponent from "../create/DetailsInputComponent";

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
  detailsOpen,
  detailsOpenHandler,
  setSawbladeSelect,
  setProsentSelect,
  setPlankeInput,
  setSpesInput,
  shimsOpen,
  setShimsOpen,
  setShims1open,
  shims1open,
  setShimsValue,
  setShimsValue2,
  deleteShimsRing,
  setRawManuallyInput,
  setToManuallyInputHandler,
  utfyllingBakOpenHandler2,
  utfyllingForanOpenHandler2,
  utfyllingForanOpen2,
  setRingPanelNumber2,
}: any) => {
  const shims1openHandler = () => {
    setShims1open(true);
    setShimsOpen(false);
  };
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
            <button
              onClick={utfyllingForanOpenHandler2}
              className="btn btn-fill"
            >
              <p className="text-yellow-400 tab">Utfylling foran Alt</p>
            </button>
            <button onClick={utfyllingBakOpenHandler} className="btn btn-fill">
              <p className="text-teal-100 tab">Utfylling bak</p>
            </button>
            <button onClick={utfyllingBakOpenHandler2} className="btn btn-fill">
              <p className="text-yellow-400 tab">Utfylling bak Alt</p>
            </button>
            <button className="btn btn-raw">
              <p onClick={rawOpenHandler} className="text-teal-100 tab">
                Råmål
              </p>
            </button>
            <button onClick={detailsOpenHandler} className="btn btn-details">
              <p className="text-teal-100 tab">Detaljer</p>
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
        {utfyllingForanOpen2 && (
          <div>
            <h4 className="header-alt">Legg til utfylling foran Alt:</h4>
            <RingPanelComponent
              list={ringlist}
              postInfo={postCopy}
              setPostCopy={setPostCopy}
              setUpdate={setUpdate}
              update={update}
              setRingPanelNumber={setRingPanelNumber2}
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
            <input
              onChange={(e) => setRawManuallyInput(e.target.value)}
              className="input"
              type="number"
            />
            <button onClick={setToManuallyInputHandler}>Legg til</button>
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
        {detailsOpen && (
          <div>
            <h4 className="header">Legg til detaljer:</h4>
            <DetailsInputComponent
              setSawbladeSelect={setSawbladeSelect}
              setUpdate={setUpdate}
              update={update}
              setProsentSelect={setProsentSelect}
              setPlankeInput={setPlankeInput}
              setSpesInput={setSpesInput}
            />
          </div>
        )}
        {shimsOpen && (
          <div>
            <h4 className="header">Legg til ring</h4>
            <div className="button-box">
              <button className="shims-btn" onClick={deleteShimsRing}>
                Slett
              </button>
              <button onClick={shims1openHandler} className="shims-btn">
                Ny shims
              </button>
            </div>
            <RingPanelComponent
              list={ringlist}
              postInfo={postCopy}
              setPostCopy={setPostCopy}
              setUpdate={setUpdate}
              update={update}
              setRingPanelNumber={setShimsValue}
            />
          </div>
        )}
        {shims1open && (
          <div>
            <h4 className="header">Legg til skims</h4>
            <div className="button-box">
              <button className="shims-btn" onClick={deleteShimsRing}>
                Slett
              </button>
            </div>
            <RingPanelComponent
              list={ringlist}
              postInfo={postCopy}
              setPostCopy={setPostCopy}
              setUpdate={setUpdate}
              update={update}
              setRingPanelNumber={setShimsValue2}
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
            height: 2rem;
          }
          .btn-fill {
            background: var(--outer2);
          }
          .btn-raw {
            background: var(--center2);
          }
          .btn-details {
            background: var(--outer);
          }
          .button-box {
            display: flex;
            flex-direction: column;
          }
          .header {
            margin: 1rem 0;
            color: var(--running);
          }
          .header-alt {
            color: yellow;
            margin: 1rem 0;
          }
          .input {
            background: var(--primary-text);
            margin-bottom: 1rem;
          }
          .shims-btn {
            background: var(--outer);
            margin-bottom: 0.5rem;
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
