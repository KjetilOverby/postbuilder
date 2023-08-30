import React, { useState, useEffect } from "react";
import { GiSpeedometer } from "react-icons/gi";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { GiCircularSawblade } from "react-icons/gi";
import { GiWoodBeam } from "react-icons/gi";

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

  const [update, setUpdate] = useState(false);

  // Sponfyllingsgrad

  const [flisafaktor, setFlisafaktor] = useState(3);
  const [sponfyllingsGrad, setSponfyllingsGrad] = useState();
  const [skurHøyde, setSkurHøyde] = useState(150);
  const [tannlukeAreal, setTannlukeAreal] = useState(206);

  useEffect(() => {
    setBrgMatehastighet(matehastighet * 1000);
    setTimeout(() => {
      setUpdate(!update);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matehastighet]);

  useEffect(() => {
    setSkjærehastighet((pi * diameter * turtall) / (60 * 1000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diameter, turtall, update]);

  useEffect(() => {
    setTurtallZ(turtall * z);
  }, [diameter, turtall, matehastighet, z, update]);

  useEffect(() => {
    setFeedTooth((Number(brgMatehastighet) / Number(turtallZ)).toFixed(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diameter, turtall, matehastighet, z, turtallZ, update]);

  useEffect(() => {
    setSponfyllingsGrad((feedTooth * skurHøyde * flisafaktor) / tannlukeAreal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedTooth, skurHøyde, tannlukeAreal]);

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form>
            <p className="text">Data</p>
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
            <br />
            <label>Skurhøyde</label>
            <br />
            <input
              placeholder={skurHøyde}
              onChange={(e) => setSkurHøyde(e.target.value)}
            />
            <br />
            <label>Tannlukeareal</label>
            <br />
            <input
              placeholder={tannlukeAreal}
              onChange={(e) => setTannlukeAreal(e.target.value)}
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
            <h1 className="info-header">Skjærehastighet</h1>
            <p>{skjærehastighet && skjærehastighet.toFixed(2)}m/s</p>
            <h1 className="text">Diameter: {diameter}</h1>
            <h1 className="text">Turtall: {turtall}</h1>
            <h1 className="h1">
              For lavlegert stål vil skjærehastigheten ligge mellom 45-50m/s.
              ved bruk av hardmetallskjær vil hastigheten ligge på ca 60-70 m/s
            </h1>
          </div>
          <div className="info-container">
            <CgArrowsMergeAltH
              style={{
                fontSize: "5rem",
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            />
            <h1 className="info-header">Tanndeling</h1>
            <p>{((pi * diameter) / z).toFixed(1)}mm</p>
            <h1 className="text">Diameter: {diameter}</h1>
            <h1 className="text">Antall tenner: {z}</h1>
            <h1 className="h1">
              Tanndeling er målt fra tannspiss til tannspiss.
            </h1>
          </div>
          <div className="info-container">
            <GiCircularSawblade
              style={{
                fontSize: "5rem",
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            />
            <h1 className="info-header">Mating per tann</h1>
            <p>{feedTooth}mm per tann</p>

            <h1 className="text">Antall tenner: {z}</h1>
            <h1 className="text">Matehastighet: {matehastighet}</h1>
            <h1 className="text">Turtall: {turtall}</h1>
            <h1 className="h1">
              Verdien for tørrskur bør ikke overstige 0.3mm mens verdien på
              råskur bør ligge mellom 0.7 - 1.0mm
            </h1>
          </div>
          <div className="info-container">
            <GiWoodBeam
              style={{
                fontSize: "5rem",
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            />
            <h1 className="info-header">Sponfyllingsgrad(SFG)</h1>
            <h1 className="text">Skurhøyde: {skurHøyde}</h1>
            <h1 className="text">Tannlukeareal: {tannlukeAreal}</h1>
            <h1 className="text">Mating per tann: : {feedTooth}</h1>
            <p>{sponfyllingsGrad && sponfyllingsGrad.toFixed(2)} </p>
            {/* <p>{(tannlukeAreal - sponfyllingsGrad).toFixed(2)}mm2 </p> */}
            <h1 className="h1">
              SFG verdien bør ikke overstige 1, har man 1 betyr at man har fyllt
              opp tannluka og hvis man overskrider det så vil flis legge seg
              mellom sagbladet og virket å skape varmgang i tannbunnen. Dette
              kan påvirke strekk og skape ubalanse.
            </h1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .results-container {
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
            padding: 1rem;
            display: grid;
            place-items: center;
            width: 25rem;
            border: 1px solid var(--primary-text);
            margin-right: 1rem;
            border-radius: 10px;
            background: var(--table-bg);
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
          .h1 {
            color: var(--text);
            font-weight: 600;
            font-size: 1rem;
            font-style: italic;
          }
          .info-header {
            color: var(--text);
            font-weight: 100;
            font-size: 1.5rem;
          }
        `}
      </style>
    </>
  );
};

export default SagbladMainPage;
