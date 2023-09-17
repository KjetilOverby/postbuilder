import React from "react";
import Selector from "../sagblad/Selector";

const FormInputComponent = ({
  setSelectVal,
  diameter,
  matehastighet,
  turtall,
  skurHøyde,
  tannlukeAreal,
  setDiameter,
  setMatehastighet,
  setTurtall,
  setSkurHøyde,
  setTannlukeAreal,
  z,
}) => {
  return (
    <>
      <div className="form-main-container">
        <div className="form-container">
          <Selector setSelectVal={setSelectVal} />
          <form>
            <label>Diameter</label>
            <br />
            <input
              placeholder={diameter}
              onChange={(e) => setDiameter(e.target.value)}
              value={diameter}
            />
            <br />
            <label>Antall tenner</label>
            <br />
            <input placeholder={z} onChange={(e) => setZ(e.target.value)} />
            <br />
            <label>Matehastighet</label>
            <br />
            <input
              placeholder={matehastighet}
              onChange={(e) => setMatehastighet(e.target.value)}
              value={matehastighet}
            />
            <br />
            <label>Turtall</label>
            <br />
            <input
              placeholder={turtall}
              onChange={(e) => setTurtall(e.target.value)}
              value={turtall}
            />
            <br />
            <label>Skurhøyde</label>
            <br />
            <input
              placeholder={skurHøyde}
              onChange={(e) => setSkurHøyde(e.target.value)}
              value={skurHøyde}
            />
            <br />
            <label>Tannlukeareal</label>
            <br />
            <input
              placeholder={tannlukeAreal}
              onChange={(e) => setTannlukeAreal(e.target.value)}
              value={tannlukeAreal}
            />
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .form-main-container {
            display: flex;
          }
          .form-container {
            background: rgb(0, 138, 138);
            padding: 2rem;
            border-radius: 10px;
            width: 20rem;
          }
          input {
            background: rgb(224, 242, 241);
            border-radius: 10px;
            padding: 2px;
            color: rgb(0, 138, 138);
            margin-bottom: 1rem;
          }
          .label {
            color: rgb(224, 242, 241);
            margin-bottom: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default FormInputComponent;
