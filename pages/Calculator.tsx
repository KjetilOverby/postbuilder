import React from "react";
import styles from "../styles/Home.module.css";
import HeadComponent from "../components/reusable components/HeadComponent";

const Calculator = () => {
  return (
    <>
      <div className="main-container">
        <HeadComponent />
        <h1>Calculator</h1>
        <div className="ring outer-ring">
          <div className="ring inner-ring"></div>
        </div>
      </div>
      <style jsx>{`
        .main-container {
          display: grid;
          place-items: center;
          height: 100vh;
        }
        .ring {
          border-radius: 10px;
        }
        .outer-ring {
          height: 16rem;
          width: 8rem;
          border: 1px solid black;
          display: grid;
          place-items: center;
        }
        .inner-ring {
          height: 15rem;
          width: 7rem;
          border: 1px solid black;
        }
      `}</style>
    </>
  );
};

export default Calculator;
