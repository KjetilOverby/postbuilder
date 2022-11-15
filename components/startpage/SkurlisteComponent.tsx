import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";



const SkurlisteComponent = ({
  skurliste,
  setSkurlisteInfo,
  setSearchResultModal,
  searchTrigger,
  setListeBuffer
}: any) => {
  return (
    <>
      <div className="skurliste-container mb-10 bg-white">
        <table className="border table-auto w-auto border-spacing-2 shadow-md">
          <thead>
            <tr>
              <th className="border border-slate-300 lg:p-1.5 " scope="col">
                Treslag
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Kl
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Ant
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                m3
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Status
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Post
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                X-log
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                %
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Anm
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Vs66
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Vs66 bredder
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Mkv bord
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Mkv bredder
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Blad
              </th>
            </tr>
          </thead>
          {skurliste &&
            skurliste.map((item:any) => {
              const skurlisteInfoHandler = () => {
                setSkurlisteInfo(item);
                setListeBuffer(true)
                if(searchTrigger) {
                  setSearchResultModal(true);
                }
              };
              
              return (
                <tbody
                  onClick={skurlisteInfoHandler}
                  className={`hover:bg-green-100 cursor-pointer ${item.progress}`}
                  key={item._id}
                >
                  <td
                    className={`border border-slate-300 lg:p-1.5 grid grid-cols-1 grid-rows-2 ${
                      item.treslag === "Furu"
                        ? "text-orange-600"
                        : "text-green-500"
                    }`}
                  >
                    {item.treslag} {item.klType}
                    <span className="span-text-date text-slate-800 italic">
                      {dateFormat(item.date, "dd.mm.yyyy, HH:MM")}
                    </span>
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.klasse}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.ant}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.m3}
                  </td>
                  <td
                    className={`border border-slate-300 lg:p-1.5 ${
                      item.status == "tøm" ? "text-green-400" : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5 post">
                    {item.post}x{item.breddePost}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.xLog}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.prosent}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5 text-teal-600">
                    {item.anm}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.vs66}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.vs66Br}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.mkvBord}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.mkvBr}
                  </td>
                  <td className="border border-slate-300 lg:p-1.5">
                    {item.blad}
                  </td>
                </tbody>
              );
            })}
        </table>
      </div>
      <style jsx>
        {`
          .skurliste-container {
          }
          .status-stopp {
            color: green;
          }
          .tom {
            color: blue;
          }
          .running {
            background: #93c5fd;
            color: #3b82f6;
          }
          .finished {
            background: #94a3b8;
            color: #64748b;
          }
          table {
            width: 100%;
          }
          .span-text-date {
            font-size: 0.6rem;
          }

          @media only screen and (max-width: 1000px) {
            table {
              width: 100%;
              font-size: 12px;
            }
            .span-text-date {
              font-size: 0.3rem;
            }
          }
          @media only screen and (max-width: 600px) {
            table {
              width: 100%;
              font-size: 5px;
            }
          }
        `}
      </style>
    </>
  );
};

export default SkurlisteComponent;
