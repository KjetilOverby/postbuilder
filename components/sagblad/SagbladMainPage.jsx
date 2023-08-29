import React, { useState, useEffect } from "react";

const SagbladMainPage = () => {
  const [pi, setPi] = useState(3.14);
  const [diameter, setDiameter] = useState(445);
  const [z, setZ] = useState(36);
  const [matehastighet, setMatehastighet] = useState(80);
  const [turtall, setTurtall] = useState(3100);
  const [brgMatehastighet, setBrgMatehastighet] = useState();
  const [turtallZ, setTurtallZ] = useState();
  const [skjærehastighet, setSkjærehastighet] = useState();

  useEffect(() => {
    setSkjærehastighet((pi * diameter * turtall) / (60 * 1000));
  }, [diameter, turtall, matehastighet, z]);

  useEffect(() => {
    setTurtallZ(turtall * z);
  }, [diameter, turtall, matehastighet, z]);

  useEffect(() => {
    setBrgMatehastighet(matehastighet * 1000);
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
          <div>
            <h1>Skjærehastighet</h1>
            <p>{skjærehastighet && skjærehastighet.toFixed(2)}m/s</p>
          </div>
          <div>
            <h1>Tanndeling</h1>
            <p>{((pi * diameter) / z).toFixed(1)}mm</p>
          </div>
          <div>
            <h1>Mating per tann</h1>
            <p>
              {(Number(brgMatehastighet) / Number(turtallZ)).toFixed(2)}mm per
              tann
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .results-container {
            background: dodgerblue;
          }
          .form-container {
            display: grid;
            place-items: center;
            background: var(--table-bg);
            width: 20rem;
            padding: 1rem;
            border-radius: 10px;
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
        `}
      </style>
    </>
  );
};

export default SagbladMainPage;
