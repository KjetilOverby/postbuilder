import React, { useState, useEffect } from "react";
import { GiSpeedometer } from "react-icons/gi";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { GiCircularSawblade } from "react-icons/gi";

const SagbladMainPage = () => {
  const [pi, setPi] = useState(3.14);
  const [diameter, setDiameter] = useState(445);
  const [z, setZ] = useState(36);
  const [matehastighet, setMatehastighet] = useState(80);
  const [turtall, setTurtall] = useState(3100);
  const [brgMatehastighet, setBrgMatehastighet] = useState();
  const [turtallZ, setTurtallZ] = useState();
  const [skjærehastighet, setSkjærehastighet] = useState();
  const [feedTooth, setFeedTooth] = useState();

  useEffect(() => {
    setSkjærehastighet((pi * diameter * turtall) / (60 * 1000));
  }, [diameter, turtall, matehastighet, z]);

  useEffect(() => {
    setTurtallZ(turtall * z);
  }, [diameter, turtall, matehastighet, z]);

  useEffect(() => {
    setBrgMatehastighet(matehastighet * 1000);
  }, [diameter, turtall, matehastighet, z, turtallZ]);

  useEffect(() => {
    setFeedTooth((Number(brgMatehastighet) / Number(turtallZ)).toFixed(2));
  }, [diameter, turtall, matehastighet, z, turtallZ]);

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form>
            <p className="text">Detaljer sagblad</p>
            <label>Diameter</label>
            <br />
            <input
              placeholder={diameter}
              onChange={(e) => setDiameter(e.target.value)}
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
            />
            <br />
            <label>Turtall</label>
            <br />
            <input
              placeholder={turtall}
              onChange={(e) => setTurtall(e.target.value)}
            />
          </form>
        </div>
        <div className="results-container">
          <div className="info-container">
            <GiSpeedometer
              style={{
                fontSize: "5rem",
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            />
            <h1>Skjærehastighet</h1>
            <p>{skjærehastighet && skjærehastighet.toFixed(2)}m/s</p>
          </div>
          <div className="info-container">
            <CgArrowsMergeAltH
              style={{
                fontSize: "5rem",
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            />
            <h1>Tanndeling</h1>
            <p>{((pi * diameter) / z).toFixed(1)}mm</p>
          </div>
          <div className="info-container">
            <GiCircularSawblade
              style={{
                fontSize: "5rem",
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            />
            <h1>Mating per tann</h1>
            <p>{feedTooth}mm per tann</p>
            {feedTooth < 0.3 && (
              <h1>
                Verdien passer til tørrskur. Verdien for tørrskur bør ikke
                overstige 0.3mm
              </h1>
            )}
            {feedTooth >= 0.7 && feedTooth <= 1.0 && (
              <h1>
                Verdien passer til råskur. Verdien på råskur bør ligge mellom
                0.7 - 1.0mm
              </h1>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .results-container {
            background: var(--table-bg);
            margin-top: 10rem;
            display: flex;
            padding: 10px;
            border-radius: 10px;
          }
          .form-container {
            display: grid;
            place-items: center;
            background: var(--table-bg);
            width: 20rem;
            padding: 1rem;
            border-radius: 10px;
          }
          .info-container {
            padding: 4rem;
            display: grid;
            place-items: center;
          }
          .text {
            color: var(--text);
          }
          label {
            color: var(--text);
          }
          input {
            margin-bottom: 1rem;
          }
          p {
            color: var(--primary-text);
            font-size: 2rem;
          }
          h1 {
            color: var(--primary-text);
            font-weight: 600;
            font-size: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default SagbladMainPage;
