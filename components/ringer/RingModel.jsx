import React from "react";

const RingModel = () => {
  return (
    <>
      <div className="ring">
        <div className="ring-container">
          <div className="ring"></div>
        </div>
      </div>
      <style jsx>
        {`
          .ring-container {
            width: 200px;
            height: 200px;
            position: relative;
            perspective: 1000px;
          }

          .ring {
            width: 120px;
            height: 120px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transform-style: preserve-3d;
            animation: spin 4s infinite linear;
          }

          .ring::before,
          .ring::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 20px;
            background-color: #c0c0c0;
            transform-origin: center bottom;
          }

          .ring::before {
            transform: rotateX(70deg);
          }

          .ring::after {
            transform: rotateX(-70deg);
          }

          @keyframes spin {
            0% {
              transform: translate(-50%, -50%) rotateY(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotateY(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default RingModel;
