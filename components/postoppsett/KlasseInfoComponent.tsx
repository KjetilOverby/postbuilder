import React, { useContext } from "react";
import { BsBackspace } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import Link from "next/link";
import { ContextAppData } from "../../data/context/ContextAppData";
import AuthWrapper from "../auth/AuthWrapper";

const KlasseInfoComponent = ({ info, setSearchResultModal, postInfo }: any) => {
  const { openEdit, setOpenEdit } = useContext(ContextAppData);
  console.log(postInfo);

  return (
    <>
      <div className="absolute top-4 left-4">
        <div className="info-container">
          <Link href="/">
            <BsBackspace
              onClick={() => setSearchResultModal(false)}
              style={{ color: "grey", fontSize: "2rem", marginBottom: "2rem" }}
            />
          </Link>

          {info && (
            <>
              <p className="text-info text-xs italic">
                Post valgt fra skurliste:
              </p>
              <p className="text-slate-400 text-xs uttak">
                {info && info.post}x{info && info.breddePost}{" "}
                <span style={{ color: "var(--outer)" }}>
                  {Number(
                    Number(postInfo.blades.bladStamme) + Number(1.4)
                  ).toFixed(1)}
                </span>
              </p>
              <p className="text-info text-xs italic">
                Klasse: {info && info.klasse} {info && info.treslag}{" "}
                {info && info.klType}
              </p>
              <p className="text-info text-xs italic">
                Ant stokk: {info && info.ant}
              </p>
              <p className="text-info text-xs italic">M3: {info && info.m3}</p>
              <p className="text-info text-xs italic">
                Anm: {info && info.anm} {info && info.anm2}
              </p>
              <p className="text-info text-xs italic">
                Status: {info && info.status}
              </p>
              <p className="text-info text-xs italic">
                X-log: {info && info.xLog}
              </p>

              {info && info.vs66 ? (
                <p className="text-info text-xs italic">VS-66: {info.vs66}mm</p>
              ) : (
                <p className="text-info text-xs italic">VS-66: ingen bord</p>
              )}
              {info && info.mkvBord ? (
                <p className="text-info text-xs italic">
                  MKV: {info.mkvBord}mm
                </p>
              ) : (
                <p className="text-info text-xs italic">MKV: ingen bord</p>
              )}
            </>
          )}
          <AuthWrapper>
            <Link href="/create">
              <MdSettings
                onClick={() => setOpenEdit(true)}
                style={{
                  color: "var(--center)",
                  fontSize: "2rem",
                  marginTop: "2rem",
                }}
              />
            </Link>
          </AuthWrapper>
        </div>
      </div>
      <style jsx>
        {`
          .info-container {
            height: 100vh;
            position: relative;
          }
          .uttak {
            color: var(--center);
            font-size: 2rem;
            padding: 1rem 0;
            position: absolute;
            width: 45rem;
            bottom: 3rem;
            font-size: 4rem;
            font-weight: 100;
          }
          .text-info {
            color: var(--center);
          }
        `}
      </style>
    </>
  );
};

export default KlasseInfoComponent;
