import React, { useState, useEffect, useContext } from "react";
import dateFormat from "dateformat";
import { ContextAppData } from "../../data/context/ContextAppData";
import darkModeColor from "../../styles/darkMode";

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
  const { darkMode } = useContext(ContextAppData);
  return (
    <>
      <div className="skurliste-container mb-10">
        <table className="table-auto  border-spacing-2 shadow-md styled-table">
          <thead>
            <tr>
              <th
                className="border-class table-text-top lg:p-1.5 text-size"
                scope="col">
                Treslag
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Kl
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Ant
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                m3
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Status
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Post
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                X-log
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                %
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Anm
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Vs66
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Vs66 bredder
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Mkv bord
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
                Mkv bredder
              </th>
              <th
                className="table-text-top border-class lg:p-1.5 text-size"
                scope="col">
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
                  key={item._id}>
                  <td
                    className={`date text-size border-class treslag lg:p-1.5 ${
                      item.treslag === "Furu"
                        ? "text-orange-600"
                        : "text-green-500"
                    }`}>
                    <div>
                      {item.treslag} {item.klType}
                    </div>
                    <div>
                      <span className="span-text-date italic">
                        {dateFormat(item.date, "dd.mm.yyyy, HH:MM")}
                      </span>
                    </div>
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    {item.klasse}
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    {item.ant}
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    {item.m3}
                  </td>
                  <td
                    className={`text-size border-class lg:p-1.5 ${
                      item.status == "tøm" ? "text-green-600" : "text-red-400"
                    }`}>
                    {item.status}
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5 post post">
                    {item.post}x{item.breddePost}
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    {item.xLog}
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    {item.prosent}
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5 text-teal-600 ">
                    <div className="two-input">
                      <div className="text-size anm">{item.anm}</div>

                      <div className="text-size anm">{item.anm2}</div>
                    </div>
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    <div>
                      {" "}
                      {item.vs66 ? (
                        item.vs66
                      ) : (
                        <p className="no-bord">Ingen bord</p>
                      )}
                    </div>
                    <div className="text-red-600">{item.vs66Xtra}</div>
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    <div>
                      {" "}
                      {item.vs66Br ? item.vs66Br : <p className="no-bord"></p>}
                    </div>
                    <div className="text-red-600">{item.vs66XtraBr}</div>
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    {item.mkvBord ? (
                      item.mkvBord
                    ) : (
                      <p className="no-bord">Ingen bord</p>
                    )}
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    {item.mkvBr ? item.mkvBr : <p className="no-bord"></p>}
                  </td>
                  <td className="text-size table-text border-class lg:p-1.5">
                    {item.blad}
                  </td>
                </tbody>
              );
            })}
        </table>
      </div>
      <style jsx>
        {`
          .anm {
            font-style: italic;
            color: dodgerblue;
          }
          .no-bord {
            font-style: italic;
            color: indianred;
          }
          .status-stopp {
            color: green;
          }
          .tom {
            color: blue;
          }
          .table-rows:hover {
            background: ${darkMode ? darkModeColor.hover : "#f7f4da"};
          }
          .running {
            background: ${darkMode
              ? darkModeColor.headerColor
              : "rgb(224, 242, 241)"};
          }
          .finished {
            background: ${darkMode ? darkModeColor.almostBlack : "#e8e8e8"};
          }
          table {
            width: 100%;
            background: ${darkMode ? darkModeColor.primary : "white"};
          }
          .treslag {
          }
          .span-text-date {
            font-size: 0.6rem;
            color: ${darkMode ? darkModeColor.secondary : "grey"};
          }
          .table-text {
            color: ${darkMode ? darkModeColor.text : "#2c4363"};
          }
          .table-text-top {
            color: white;
          }
          .two-input {
            display: flex;
            flex-direction: column;
          }

          .styled-table {
            border-collapse: collapse;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 300px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
          }
          .styled-table thead tr {
            background-color: ${darkMode ? "#858483" : "rgb(0, 138, 138)"};
            color: #ffffff;
            text-align: left;
          }
          .styled-table th,
          .styled-table td {
            padding: 2px 5px;
          }
          .styled-table tbody tr {
            border-bottom: 1px solid #dddddd;
          }

          .styled-table tbody tr:nth-of-type(even) {
            background-color: #f3f3f3;
          }

          .styled-table tbody tr.active-row {
            font-weight: bold;
            color: rgb(0, 138, 138);
          }
          .post {
            font-weight: bold;
            color: rgb(0, 138, 138);
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
          @media only screen and (max-width: 700px) {
            table {
              width: 100vw;
            }

            .text-size {
              font-size: 6px;
              max-width: 10px;
            }
            .styled-table th,
            .styled-table td {
              padding: 2px 1px;
            }
          }
        `}
      </style>
    </>
  );
};

export default SkurlisteComponent;
