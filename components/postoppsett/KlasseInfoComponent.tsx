import React from "react";
import { BsBackspace } from "react-icons/bs";
import Link from "next/link";

const KlasseInfoComponent = ({ info }: any) => {
  return (
    <>
      <div className="absolute top-4 left-4">
        <Link href="/">
          <BsBackspace
            style={{ color: "grey", fontSize: "2rem", marginBottom: "2rem" }}
          />
        </Link>
        {info && (
          <>
            <h1 className="text-slate-400 text-3xl">
              {info && info.post}x{info && info.breddePost}
              {" -"} {info && info.blad}
            </h1>
            <p className="text-slate-400 text-xs">
              Klasse: {info && info.klasse} {info && info.treslag}{" "}
              {info && info.klType}
            </p>
            <p className="text-slate-400 text-xs">
              Ant stokk: {info && info.ant} m3: {info && info.m3}
            </p>
            <p className="text-slate-400 text-xs">
              Anm: {info && info.anm} {info && info.anm2}
            </p>
          </>
        )}
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

export default KlasseInfoComponent;
