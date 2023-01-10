import React from "react";
import { BsBackspace } from "react-icons/bs";
import Link from "next/link";

const KlasseInfoComponent = ({ info, setSearchResultModal }: any) => 
{

  
  return (
    <>
      <div className="absolute top-4 left-4">
        <Link href="/">
          <BsBackspace
            onClick={() => setSearchResultModal(false)}
            style={{ color: "grey", fontSize: "2rem", marginBottom: "2rem" }}
          />
        </Link>
        {info && (
          <>
            <p className="text-slate-400 text-xs italic">
              Post valgt fra skurliste:
            </p>
            <p className="text-slate-400 text-xs uttak">
               {info && info.post}x{info && info.breddePost} <span style={{color: 'var(--outer)'}}>{info.blad}</span>
            </p>
            <p className="text-slate-400 text-xs italic">
              Klasse: {info && info.klasse} {info && info.treslag}{" "}
              {info && info.klType}
            </p>
            <p className="text-slate-400 text-xs italic">
              Ant stokk: {info && info.ant}
            </p>
            <p className="text-slate-400 text-xs italic">
              M3: {info && info.m3}
            </p>
            <p className="text-slate-400 text-xs italic">
              Anm: {info && info.anm} {info && info.anm2}
            </p>
            <p className="text-slate-400 text-xs italic">
              Status: {info && info.status}
            </p>
            <p className="text-slate-400 text-xs italic">
              X-log: {info && info.xLog}
            </p>

            {info && info.vs66 ? (
              <p className="text-slate-400 text-xs italic">
                VS-66: {info.vs66}mm
              </p>
            ) : (
              <p className="text-slate-400 text-xs italic">VS-66: ingen bord</p>
            )}
            {info && info.mkvBord ? (
              <p className="text-slate-400 text-xs italic">
                MKV: {info.mkvBord}mm
              </p>
            ) : (
              <p className="text-slate-400 text-xs italic">MKV: ingen bord</p>
            )}
          </>
        )}
      </div>
      <style jsx>
        {`
          .uttak {
            color: var(--center);
            font-size: 2rem;
            padding: 1rem 0
          }
        `}
      </style>
    </>
  );
};

export default KlasseInfoComponent;
