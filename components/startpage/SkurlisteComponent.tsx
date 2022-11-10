import React, { useState, useEffect } from "react";

interface SkurlisteProps {
  skurliste: {
    map(arg0: (item: any) => JSX.Element): React.ReactNode;
    treslag: string;
  };
  setSkurlisteInfo: React.Dispatch<React.SetStateAction<string>>;
}

const SkurlisteComponent = ({
  skurliste,
  setSkurlisteInfo,
}: SkurlisteProps) => {
  return (
    <>
      <div className="">
        <table className="border table-fixed w-auto border-spacing-2 shadow-md">
          <thead>
            <tr>
              <th className="border border-slate-300 p-1.5 " scope="col">
                Treslag
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Kl
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Ant
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                m3
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Status
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Post
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                X-log
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                %
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Anm
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Vs66
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Vs66 bredder
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Mkv bord
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Mkv bredder
              </th>
              <th className="border border-slate-300 p-1.5" scope="col">
                Blad
              </th>
            </tr>
          </thead>
          {skurliste &&
            skurliste.map((item) => {
              console.log(item.progress);
              const skurlisteInfoHandler = () => {
                setSkurlisteInfo(item);
              };
              return (
                <tbody
                  onClick={skurlisteInfoHandler}
                  className={`hover:bg-green-100 cursor-pointer ${item.progress}`}
                  key={item._id}
                >
                  <td
                    className={`border border-slate-300 p-1.5 ${
                      item.treslag === "Furu"
                        ? "text-orange-300"
                        : "text-green-500"
                    }`}
                  >
                    {item.treslag}
                  </td>
                  <td className="border border-slate-300 p-1.5">
                    {item.klasse}
                  </td>
                  <td className="border border-slate-300 p-1.5">{item.ant}</td>
                  <td className="border border-slate-300 p-1.5">{item.m3}</td>
                  <td
                    className={`border border-slate-300 p-1.5 ${
                      item.status == "tøm" ? "text-green-400" : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="border border-slate-300 p-1.5 post">
                    {item.post}x{item.breddePost}
                  </td>
                  <td className="border border-slate-300 p-1.5">{item.xLog}</td>
                  <td className="border border-slate-300 p-1.5">
                    {item.prosent}
                  </td>
                  <td className="border border-slate-300 p-1.5 text-teal-600">
                    {item.anm}
                  </td>
                  <td className="border border-slate-300 p-1.5">{item.vs66}</td>
                  <td className="border border-slate-300 p-1.5">
                    {item.vs66Br}
                  </td>
                  <td className="border border-slate-300 p-1.5">
                    {item.mkvBord}
                  </td>
                  <td className="border border-slate-300 p-1.5">
                    {item.mkvBr}
                  </td>
                  <td className="border border-slate-300 p-1.5">{item.blad}</td>
                </tbody>
              );
            })}
        </table>
      </div>
      <style jsx>
        {`
          .container {
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
        `}
      </style>
    </>
  );
};

export default SkurlisteComponent;
