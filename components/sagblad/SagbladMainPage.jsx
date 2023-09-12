import React, { useState, useEffect } from "react";
import { GiSpeedometer } from "react-icons/gi";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { GiCircularSawblade } from "react-icons/gi";
import { GiWoodBeam } from "react-icons/gi";
import { BiArea } from "react-icons/bi";
import Selector from "../sagblad/Selector";
import sagblader from "../../data/sagblader";
import Head from "next/head";

const SagbladMainPage = () => {
  const [pi, setPi] = useState(3.14);
  const [diameter, setDiameter] = useState(445);
  const [z, setZ] = useState(36);
  const [matehastighet, setMatehastighet] = useState(80);
  const [turtall, setTurtall] = useState(3100);
  const [brgMatehastighet, setBrgMatehastighet] = useState(100);
  const [turtallZ, setTurtallZ] = useState(3100);
  const [skjærehastighet, setSkjærehastighet] = useState();
  const [feedTooth, setFeedTooth] = useState();

  const [update, setUpdate] = useState(false);

  // Sponfyllingsgrad

  const [flisafaktor, setFlisafaktor] = useState(3);
  const [sponfyllingsGrad, setSponfyllingsGrad] = useState();
  const [skurHøyde, setSkurHøyde] = useState(75);
  const [tannlukeAreal, setTannlukeAreal] = useState(206);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setBladeHeader("Egendefinert");
  //   }, 500);
  // }, [diameter, turtall, z, skurHøyde, tannlukeAreal]);

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

  const [selectVal, setSelectVal] = useState("mkv445");
  const [bladeHeader, setBladeHeader] = useState();

  useEffect(() => {
    if (selectVal === "mkv510") {
      setDiameter(sagblader.mkv510.diameter);
      setZ(sagblader.mkv510.z);
      setTurtall(sagblader.mkv510.rpm);
      setTannlukeAreal(sagblader.mkv510.areal);
      setSkurHøyde(sagblader.mkv510.skurhøyde);
      setBladeHeader("MKV 4,6");
      setMatehastighet(sagblader.mkv510.speed);
    } else if (selectVal === "mkv445") {
      setDiameter(sagblader.mkv445.diameter);
      setZ(sagblader.mkv445.z);
      setTurtall(sagblader.mkv445.rpm);
      setTannlukeAreal(sagblader.mkv445.areal);
      setSkurHøyde(sagblader.mkv445.skurhøyde);
      setBladeHeader("MKV 4,2");
      setMatehastighet(sagblader.mkv445.speed);
    } else if (selectVal === "vs66flens") {
      setDiameter(sagblader.vs66flens.diameter);
      setZ(sagblader.vs66flens.z);
      setTurtall(sagblader.vs66flens.rpm);
      setTannlukeAreal(sagblader.vs66flens.areal);
      setSkurHøyde(sagblader.vs66flens.skurhøyde);
      setBladeHeader("VS66 flensblad");
      setMatehastighet(sagblader.vs66flens.speed);
    } else if (selectVal === "trimmer500") {
      setDiameter(sagblader.trimmer500.diameter);
      setZ(sagblader.trimmer500.z);
      setTurtall(sagblader.trimmer500.rpm);
      setTannlukeAreal(sagblader.trimmer500.areal);
      setSkurHøyde(sagblader.trimmer500.skurhøyde);
      setBladeHeader("Trimmer 500 JV");
      setMatehastighet(sagblader.trimmer500.speed);
    } else if (selectVal === "vs66") {
      setDiameter(sagblader.vs66.diameter);
      setZ(sagblader.vs66.z);
      setTurtall(sagblader.vs66.rpm);
      setTannlukeAreal(sagblader.vs66.areal);
      setSkurHøyde(sagblader.vs66.skurhøyde);
      setMatehastighet(sagblader.vs66.speed);
      setBladeHeader("VS66");
    } else if (selectVal === "trimmerrasort") {
      setDiameter(sagblader.trimmerrasort.diameter);
      setZ(sagblader.trimmerrasort.z);
      setTurtall(sagblader.trimmerrasort.rpm);
      setTannlukeAreal(sagblader.trimmerrasort.areal);
      setSkurHøyde(sagblader.trimmerrasort.skurhøyde);
      setMatehastighet(sagblader.trimmerrasort.speed);
      setBladeHeader("Trimmer råsort");
    } else if (selectVal === "eksakt") {
      setDiameter(sagblader.eksakt.diameter);
      setZ(sagblader.eksakt.z);
      setTurtall(sagblader.eksakt.rpm);
      setTannlukeAreal(sagblader.eksakt.areal);
      setSkurHøyde(sagblader.eksakt.skurhøyde);
      setMatehastighet(sagblader.eksakt.speed);
      setBladeHeader("Eksaktkappe JV");
    } else if (selectVal === "makita") {
      setDiameter(sagblader.makita.diameter);
      setZ(sagblader.makita.z);
      setTurtall(sagblader.makita.rpm);
      setTannlukeAreal(sagblader.makita.areal);
      setSkurHøyde(sagblader.makita.skurhøyde);
      setMatehastighet(sagblader.makita.speed);
      setBladeHeader("Makita");
    } else if (selectVal === "DeWalt") {
      setDiameter(sagblader.DeWalt.diameter);
      setZ(sagblader.DeWalt.z);
      setTurtall(sagblader.DeWalt.rpm);
      setTannlukeAreal(sagblader.DeWalt.areal);
      setSkurHøyde(sagblader.DeWalt.skurhøyde);
      setMatehastighet(sagblader.DeWalt.speed);
      setBladeHeader("DeWalt");
    }
  }, [selectVal]);

  return (
    <>
      <Head>
        <title>Postarkiv</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Armata&family=Buda:wght@300&family=Chakra+Petch:ital,wght@0,300;0,400;1,300&family=Electrolize&family=Exo:ital,wght@0,100;0,200;1,100&family=Fira+Code:wght@300;400&family=Fjalla+One&family=Krub:ital,wght@0,200;0,300;1,200&family=Maitree:wght@200;300&family=Mina&family=Nixie+One&family=Orbitron:wght@400;500&family=Poiret+One&family=Red+Hat+Display:ital,wght@0,300;0,400;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;1,100&family=Saira+Condensed:wght@100;200&family=Space+Grotesk:wght@300;400&family=Unica+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <div className="top-container">
          <div className="form-container">
            <Selector setSelectVal={setSelectVal} />
            <form>
              <p className="text">Data</p>
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
          <div className="fact-box">
            <h4 className="blade-header">{bladeHeader}</h4>
            <p className="facts">Max rpm: {sagblader[selectVal].maxRpm}</p>
            <p className="facts">
              Tannlukeareal: {sagblader[selectVal].areal} mm2
            </p>
            <p className="facts">Antall tenner: {sagblader[selectVal].z}</p>
            <p className="facts">
              Diameter: {sagblader[selectVal].diameter} mm
            </p>
            <p className="facts">Virke: {sagblader[selectVal].virke}</p>
            <p className="facts">
              Brystvinkel: {sagblader[selectVal].brystvinkel} grader
            </p>
          </div>
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
            <BiArea
              style={{
                fontSize: "5rem",
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            />
            <h1 className="info-header">Minimum tannlukeareal</h1>
            <p>{(feedTooth * skurHøyde * 3).toFixed(1)}mm2</p>

            <h1 className="text">Tannluke areal: {tannlukeAreal}</h1>
            <h1 className="text">Mating per tann: {feedTooth}</h1>
            <h1 className="text">Skurhøyde: {skurHøyde}</h1>
            <h1 className="text">Flisafaktor: 3</h1>
            <h1 className="h1"></h1>
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
          .blade-header {
            font-size: 2rem;
            color: var(--text);
          }
          .facts {
            color: var(--primary-text);
            font-size: 1rem;
          }
          .fact-box {
            padding-left: 2rem;
          }
          .results-container {
            margin-top: 1rem;
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
          .img {
            width: 100%;
          }
          .img-container {
            width: 24rem;
            margin-left: 4rem;
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
          .top-container {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default SagbladMainPage;
