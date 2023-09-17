import React from "react";

const InfoContainerComponent = ({
  icon,
  skjærehastighet,
  diameter,
  turtall,
  info,
}) => {
  return (
    <>
      <div className="info-container">
        {icon}
        <h1 className="info-header">Skjærehastighet</h1>
        <p>{skjærehastighet && skjærehastighet.toFixed(2)}m/s</p>
        <h1 className="text">Diameter: {diameter}</h1>
        <h1 className="text">Turtall: {turtall}</h1>
        <h1 className="h1">{info}</h1>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default InfoContainerComponent;
