import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.api,
});

const SkurlistePostoppsett = ({
  skurliste,
  setSkurlisteInfo,
  searchTrigger,
  setSearchResultModal,
  dotUpdate,
  setDotUpdate,
  openDot,
  setOpenDot,
  setOriginStartrings,
  setOriginEndrings,
}: any) => {
  const [fieldID, setFieldID] = useState();

  const updateProgressFinished = async () => {
    const response = await api
      .patch(`/api/skurlister/updateField?ids=${fieldID}`, {
        progress: "finished",
      })
      .then(() => {
        setDotUpdate(!dotUpdate);
      });
  };

  const updateProgressRunning = async () => {
    const response = await api
      .patch(`/api/skurlister/updateField?ids=${fieldID}`, {
        progress: "running",
      })
      .then(() => {
        setDotUpdate(!dotUpdate);
      });
  };

  const updateProgressNeutreal = async () => {
    const response = await api
      .patch(`/api/skurlister/updateField?ids=${fieldID}`, {
        progress: "none",
      })
      .then(() => {
        setDotUpdate(!dotUpdate);
      });
  };

  return (
    <>
      <div className="skurliste-container absolute">
        <table className="border table-auto w-auto border-spacing-2 shadow-md">
          <thead>
            <tr>
              <th className="border border-slate-700  text-xs table-headers">
                Status
              </th>
              <th
                className="border border-slate-700  text-xs table-headers"
                scope="col"
              >
                Treslag
              </th>
              <th
                className="border border-slate-700  text-xs table-headers"
                scope="col"
              >
                Kl
              </th>
              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                Ant
              </th>
              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                m3
              </th>
              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                Status
              </th>
              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                Post
              </th>
              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                X-log
              </th>
              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                %
              </th>
              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                Anm
              </th>
              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                Vs66
              </th>

              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                Mkv
              </th>

              <th
                className="border border-slate-700 text-xs table-headers"
                scope="col"
              >
                Blad
              </th>
            </tr>
          </thead>
          {skurliste &&
            skurliste.map((item: any) => {
              const skurlisteInfoHandler = () => {
                setSkurlisteInfo(item);
                setFieldID(item._id);
                setOpenDot(true);
                setOriginStartrings(true);
                setOriginEndrings(true);

                if (searchTrigger) {
                  setSearchResultModal(true);
                }
              };

              return (
                <tbody
                  onClick={skurlisteInfoHandler}
                  className={`lane cursor-pointer ${item.progress}`}
                  key={item._id}
                >
                  <td className="border border-slate-700 text-xs table-text">
                    {item._id === fieldID && openDot && (
                      <div className="dot-container">
                        <div
                          onClick={updateProgressNeutreal}
                          className="dot neutral-dot"
                        ></div>
                        <div
                          onClick={updateProgressRunning}
                          className="dot running-dot"
                        ></div>
                        <div
                          onClick={updateProgressFinished}
                          className="dot finished-dot"
                        ></div>
                      </div>
                    )}
                  </td>
                  <td
                    className={`border border-slate-700 text-xs   ${
                      item.treslag === "Furu"
                        ? "text-orange-400"
                        : "text-green-500"
                    }`}
                  >
                    {item.treslag} {item.klType}
                  </td>

                  <td className="border border-slate-700 text-xs table-text">
                    {item.klasse}
                  </td>
                  <td className="border border-slate-700 text-xs table-text">
                    {item.ant}
                  </td>
                  <td className="border border-slate-700 text-xs table-text">
                    {item.m3}
                  </td>
                  <td
                    className={`border border-slate-700 text-xs ${
                      item.status == "tøm" ? "text-green-300" : "text-red-400"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="border border-slate-700 text-xs table-text post">
                    {item.post}x{item.breddePost}
                  </td>
                  <td className="border border-slate-700 text-xs table-text">
                    {item.xLog}
                  </td>
                  <td className="border border-slate-700 text-xs table-text">
                    {item.prosent}
                  </td>
                  <td className="border border-slate-700 text-xs table-text ">
                    <div className="two-input">
                      <div>{item.anm}</div>

                      <div>{item.anm2}</div>
                    </div>
                  </td>
                  <td className="border border-slate-700 text-xs table-text">
                    <div>{item.vs66}</div>
                    <div className="text-red-600">{item.vs66Xtra}</div>
                  </td>

                  <td className="border border-slate-700 text-xs table-text">
                    {item.mkvBord}
                  </td>

                  <td className="border border-slate-700 text-xs table-text">
                    {item.blad}
                  </td>
                </tbody>
              );
            })}
        </table>
      </div>
      <style jsx>
        {`
          .lane:hover {
            background: var(--hover);
          }
          .skurliste-container {
            bottom: 10px;
            right: 10px;
          }
          .finished {
            background: rgba(143, 143, 143, 0.2);
          }
          .running {
            background: rgba(89, 226, 102, 0.3);
          }
          .dot-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .dot {
            height: 0.5rem;
            width: 0.5rem;
            border-radius: 50%;
          }
          .neutral-dot {
            background: grey;
          }
          .running-dot {
            background: green;
          }
          .finished-dot {
            background: indianred;
          }
          .table-headers {
            color: var(--text2);
          }
          .table-text {
            color: var(--text2);
          }
        `}
      </style>
    </>
  );
};

export default SkurlistePostoppsett;
