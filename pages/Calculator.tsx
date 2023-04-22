import React from "react";
import CalculatorMainComponent from "../components/calculator/CalculatorMainComponent";
import HeadComponent from "../components/reusable components/HeadComponent";

const Calculator = () => {
  return (
    <>
      <div className="main-container">
        <HeadComponent />
        <CalculatorMainComponent />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Calculator;
