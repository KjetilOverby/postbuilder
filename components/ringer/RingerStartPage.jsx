import React, { useContext } from "react";
import RingModel from "../ringer/RingModel";
import ringcount from "../../data/ringcount";
import HeadComponent from "../reusable components/HeadComponent";
import darkModeColor from "../../styles/darkMode";
import { ContextAppData } from "../../data/context/ContextAppData";

const RingerStartPage = () => {
  const { darkMode } = useContext(ContextAppData);
  return (
    <>
      <HeadComponent />
      <div className="container">
        <div className="list-container">
          <h1 className="header">Utfyllingsringer (190mm)</h1>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Ringtykkelse</th>
                <th>Antall</th>
              </tr>
            </thead>
            <tbody>
              {ringcount.utfylling.map((item) => {
                return (
                  <tr key={item.ring}>
                    <td>{item.ring}</td>
                    <td className="ant">{item.antall}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="list-container">
          <h1 className="header">Vanlige ringer (210mm)</h1>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Ringtykkelse</th>
                <th>Antall</th>
                <th>Råmål</th>
              </tr>
            </thead>
            <tbody>
              {ringcount.vanlig.map((item) => {
                return (
                  <tr key={item.ring}>
                    <td>{item.ring}</td>
                    <td className="ant">{item.antall}</td>
                    <td className="raw">
                      {item.ring > 10 ? (item.ring - 1.4).toFixed(1) : "Skims"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="list-container">
          <h1 className="header">Store ringer (270mm)</h1>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Ringtykkelse</th>
                <th>Antall</th>
                <th>Råmål</th>
              </tr>
            </thead>
            <tbody>
              {ringcount.store.map((item) => {
                return (
                  <tr key={item.ring}>
                    <td>{item.ring}</td>
                    <td className="ant">{item.antall}</td>
                    <td className="raw">
                      {item.ring > 10 ? (item.ring - 1.4).toFixed(1) : "Skims"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>
        {`
          .ant {
            color: #c26363;
          }
          .raw {
            color: #6393c2;
          }
          .container {
            display: flex;
          }
          .header {
            color: grey;
          }

          .list-container {
            margin-right: 2rem;
          }
          .styled-table {
            border-collapse: collapse;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 300px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
          }

          .styled-table thead tr {
            background-color: ${darkMode
              ? darkModeColor.primary
              : "rgb(0, 138, 138)"};
            color: #ffffff;
            text-align: left;
          }
          .styled-table th,
          .styled-table td {
            padding: 2px 5px;
          }
          .styled-table tbody tr {
            border-bottom: 1px solid
              ${darkMode ? darkModeColor.hover : "#dddddd"};
          }

          .styled-table tbody tr:nth-of-type(even) {
            background-color: ${darkMode
              ? darkModeColor.even
              : "rgb(224, 242, 241)"};
          }

          .styled-table tbody tr:last-of-type {
            border-bottom: 2px solid #009879;
          }
          .styled-table tbody tr.active-row {
            font-weight: bold;
            color: #009879;
          }
          td {
            color: #009879;
          }
        `}
      </style>
    </>
  );
};

export default RingerStartPage;
