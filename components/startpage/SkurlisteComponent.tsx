import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";

const SkurlisteComponent = ({
  skurliste,
  setSkurlisteInfo,
  setSearchResultModal,
  searchTrigger,
  setListeBuffer,
  listeBuffer,
  setFieldID,
  setChosen,
}: any) => {
  return (
    <>
      <div className="skurliste-container mb-10">
        <table className="table-auto w-auto border-spacing-2 shadow-md">
          <thead>
            <tr>
              <th className="border-class table-text-top lg:p-1.5 " scope="col">
                Treslag
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Kl
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Ant
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                m3
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Status
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Post
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                X-log
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                %
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Anm
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Vs66
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Vs66 bredder
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Mkv bord
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Mkv bredder
              </th>
              <th className="table-text-top border-class lg:p-1.5" scope="col">
                Blad
              </th>
            </tr>
          </thead>
          {skurliste &&
            skurliste.map((item: any) => {
              const skurlisteInfoHandler = () => {
                setSkurlisteInfo(item);
                if (listeBuffer) {
                  setListeBuffer(true);
                  setFieldID(item._id);
                  setChosen("skurliste");
                }
                if (searchTrigger) {
                  setSearchResultModal(true);
                }
              };

              return (
                <tbody
                  onClick={skurlisteInfoHandler}
                  className={`table-rows cursor-pointer ${item.progress}`}
                  key={item._id}
                >
                  <td
                    className={`border-class treslag lg:p-1.5 ${
                      item.treslag === "Furu"
                        ? "text-orange-600"
                        : "text-green-500"
                    }`}
                  >
                    <div>
                      {item.treslag} {item.klType}
                    </div>
                    <div>
                      <span className="span-text-date italic">
                        {dateFormat(item.date, "dd.mm.yyyy, HH:MM")}
                      </span>
                    </div>
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    {item.klasse}
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    {item.ant}
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    {item.m3}
                  </td>
                  <td
                    className={`border-class lg:p-1.5 ${
                      item.status == "tøm" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="table-text border-class lg:p-1.5 post">
                    {item.post}x{item.breddePost}
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    {item.xLog}
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    {item.prosent}
                  </td>
                  <td className="table-text border-class lg:p-1.5 text-teal-600 ">
                    <div className="two-input">
                      <div>{item.anm}</div>

                      <div>{item.anm2}</div>
                    </div>
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    <div>{item.vs66}</div>
                    <div className="text-red-600">{item.vs66Xtra}</div>
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    <div>{item.vs66Br}</div>
                    <div className="text-red-600">{item.vs66XtraBr}</div>
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    {item.mkvBord}
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    {item.mkvBr}
                  </td>
                  <td className="table-text border-class lg:p-1.5">
                    {item.blad}
                  </td>
                </tbody>
              );
            })}
        </table>
      </div>
      <style jsx>
        {`
          tr {
            color: var(--text2);
          }
          .skurliste-container {
            background: var(--table-bg);
          }
          .status-stopp {
            color: green;
          }
          .tom {
            color: blue;
          }
          .table-rows:hover {
            background: var(--hover);
          }
          .running {
            background: var(--running);
          }
          .finished {
            background: var(--hover);
          }
          table {
            width: 100%;
          }
          .treslag {
          }
          .span-text-date {
            font-size: 0.6rem;
            color: var(--text);
          }
          .table-text {
            color: var(--primary-text);
          }
          .table-text-top {
            color: var(--center);
          }
          .two-input {
            display: flex;
            flex-direction: column;
          }
          .border-class {
            border: 1px solid var(--hover);
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
