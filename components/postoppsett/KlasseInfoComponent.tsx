import React from "react";

const KlasseInfoComponent = ({ info }: any) => {
  return (
    <>
      {info && (
        <div className="absolute top-4 left-4">
          <h1 className="text-slate-100 text-3xl">
            {info && info.post}x{info && info.breddePost}
            {" -"} {info && info.blad}
          </h1>
          <p className="text-slate-100 text-xs">
            Klasse: {info && info.klasse} {info && info.treslag}{" "}
            {info && info.klType}
          </p>
          <p className="text-slate-100 text-xs">
            Ant stokk: {info && info.ant} m3: {info && info.m3}
          </p>
          <p className="text-slate-100 text-xs">
            Anm: {info && info.anm} {info && info.anm2}
          </p>
        </div>
      )}
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default KlasseInfoComponent;
