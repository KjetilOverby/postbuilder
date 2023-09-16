import React from "react";
import { ListerProps } from "../../tsmodules/ListerPops";

const InputTable = ({ listInputData, sagblad }: ListerProps) => {
  return (
    <>
      <div className="skurliste-container mb-10">
        <table className="styled-table">
          <thead>
            <tr className="tr-text">
              <th className="input-top lg:p-1.5 " scope="col">
                Treslag
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Kl
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Ant
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                m3
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Status
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Post
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                X-log
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                %
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Anm
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Vs66
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Vs66 bredder
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Mkv bord
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Mkv bredder
              </th>
              <th className="input-top lg:p-1.5" scope="col">
                Blad
              </th>
            </tr>
          </thead>

          <tbody className={`tr-text`}>
            <td className={`input-top lg:p-1.5 grid grid-cols-1 grid-rows-2`}>
              {listInputData && listInputData.treslag}
              <span className="input-top span-text-date italic">
                {listInputData && listInputData.klType}
              </span>
            </td>
            <td className="input-top lg:p-1.5 kl">
              {listInputData && listInputData.klasse}
            </td>
            <td className="input-top lg:p-1.5">
              {listInputData && listInputData.ant}
            </td>
            <td className="input-top lg:p-1.5">
              {listInputData && listInputData.m3}
            </td>
            <td
              className={`input-top lg:p-1.5 
                    `}
            >
              {listInputData && listInputData.status}
            </td>
            <td className="input-top lg:p-1.5 post">
              {listInputData && listInputData.post}x
              {listInputData && listInputData.breddePost}
            </td>
            <td className="input-top lg:p-1.5">
              {listInputData && listInputData.xLog}
            </td>
            <td className="input-top lg:p-1.5">
              {listInputData && listInputData.prosent}
            </td>
            <td className="input-top lg:p-1.5 text-slate-300 anm">
              {listInputData && listInputData.anm}
              {listInputData && listInputData.anm2}
            </td>
            <td className="input-top lg:p-1.5">
              {listInputData && listInputData.vs66}{" "}
              {listInputData && listInputData.vs66Xtra}
            </td>
            <td className="input-top lg:p-1.5">
              {listInputData && listInputData.vs66Br}{" "}
              {listInputData && listInputData.vs66XtraBr}
            </td>
            <td className="input-top lg:p-1.5">
              {listInputData && listInputData.mkvBord}
            </td>
            <td className="input-top lg:p-1.5">
              {listInputData && listInputData.mkvBr}
            </td>
            <td className="input-top lg:p-1.5">{sagblad}</td>
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .skurliste-container {
            animation: fadeInDown 0.5s;
            background: white;
          }
          .status-stopp {
            color: green;
          }
          .tr-text {
            color: grey;
          }
          .tom {
            color: blue;
          }
          .input-top {
            color: #585859;
          }

          .span-text-date {
            font-size: 0.6rem;
          }
          .styled-table {
            border-collapse: collapse;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 300px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            width: 100%;
          }
          .styled-table thead tr {
            background-color: #009879;
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
            color: #009879;
          }
          .post {
            color: #009879;
            font-weight: bold;
          }
          .anm {
            color: dodgerblue;
            font-style: italic;
          }
          .kl {
            font-weight: bold;
            color: #009879;
          }
          @-webkit-keyframes fadeInDown {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
            }
            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
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

export default InputTable;
