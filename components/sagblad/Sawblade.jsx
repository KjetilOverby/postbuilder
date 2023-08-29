import React from "react";

const Sawblade = () => {
  return (
    <>
      <div className="container">
        <div className="triangle"></div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .triangle {
            position: fixed;
            top: 10%;
            left: 50%;

            width: 0px;
            height: 0px;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid grey;
            -webkit-animation-name: spin;
            -webkit-animation-duration: 4000000ms;
            -webkit-animation-timing-function: linear;
            -moz-animation-name: spin;
            -moz-animation-duration: 400000ms;
            -moz-animation-iteration-count: infinite;
            -moz-animation-timing-function: linear;
            -ms-animation-name: spin;
            -ms-animation-iteration-count: infinite;
            -ms-animation-timing-function: linear;
          }
        `}
      </style>
    </>
  );
};

export default Sawblade;
