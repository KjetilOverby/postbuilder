import React from "react";

const DetailsInputComponent = ({
  setUpdate,
  update,
  setSawbladeSelect,
  setProsentSelect,
  setPlankeInput,
  setSpesInput,
}: any) => {
  const sawbladeSelectHandler = (e: any) => {
    setSawbladeSelect(e.target.value);
    setUpdate(!update);
  };

  return (
    <>
      <div className="input-container">
        <div className="field-box">
          <select className="select" onChange={sawbladeSelectHandler}>
            <option className="option" value="" selected disabled hidden>
              Velg sagblad
            </option>
            <option className="option" value={2.2}>
              2.2-3.6
            </option>
            <option className="option" value={2.4}>
              2.4-3.8
            </option>
            <option className="option" value={2.6}>
              2.6-4.0
            </option>
            <option className="option" value={2.8}>
              2.8-4.2
            </option>
            <option className="option" value={3.0}>
              3.0-4.4
            </option>
            <option className="option" value={3.2}>
              3.2-4.6
            </option>
          </select>
        </div>
        <div className="field-box">
          <select
            className="select"
            //   onChange={(e) => setProsentValg(e.target.value)}
            onChange={(e) => setProsentSelect(e.target.value)}
          >
            <option className="option" value="" selected disabled hidden>
              Velg prosent
            </option>
            <option className="option" value="-18%-">
              18%
            </option>
            <option className="option" value="-12%-">
              12%
            </option>
            <option className="option" value="-18/12%-">
              18/12%
            </option>
            <option className="option" value="-12/18%-">
              12/18%
            </option>
          </select>
        </div>
        <div className="field-box">
          <p className="input-text">Planketykkelse:</p>
          <input
            onChange={(e) => setPlankeInput(e.target.value)}
            className="input"
            type="text"
            placeholder="eks: 50/38"
          />
        </div>
        <div className="field-box">
          <p className="input-text">Spes råmal i parantes:</p>
          <input
            onChange={(e) => setSpesInput(e.target.value)}
            className="input"
            type="text"
            placeholder="eks: (52.2)"
          />
        </div>
      </div>
      <style jsx>
        {`
          .input {
            background: var(--finish-text);
          }
          .field-box {
            margin-bottom: 1rem;
            background: var(--table-bg);
            padding: 0.5rem;
            border-radius: 5px;
          }
          .input-text {
            color: var(--center);
          }
          .select {
            background: var(--finish-text);
            color: var(--center);
          }
        `}
      </style>
    </>
  );
};

export default DetailsInputComponent;
