import React from "react";
import RingModel from "../ringer/RingModel";
import ringcount from "../../data/ringcount";
import HeadComponent from "../reusable components/HeadComponent";

const RingerStartPage = () => {
  return (
    <>
      <HeadComponent />
      <div className="container">
        <div>
          <h1>Utfyllingsringer</h1>
          <table>
            <tr>
              <th>Ringtykkelse</th>
              <th>Antall</th>
            </tr>
            {ringcount.utfylling.map((item) => {
              return (
                <tr key={item.ring}>
                  <td>{item.ring}</td>
                  <td>{item.antall}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div>
          <h1>Vanlige ringer (210mm)</h1>
          <table>
            <tr>
              <th>Ringtykkelse</th>
              <th>Antall</th>
            </tr>
            {ringcount.vanlig.map((item) => {
              return (
                <tr key={item.ring}>
                  <td>{item.ring}</td>
                  <td>{item.antall}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div>
          <h1>Store ringer (270mm)</h1>
          <table>
            <tr>
              <th>Ringtykkelse</th>
              <th>Antall</th>
            </tr>
            {ringcount.store.map((item) => {
              return (
                <tr key={item.ring}>
                  <td>{item.ring}</td>
                  <td>{item.antall}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          th {
            border: 1px solid grey;
            padding: 5px;
            width: 12rem;
            color: var(--text);
          }
          td {
            border: 1px solid grey;
            padding: 5px;
            color: var(--primary-text);
          }
          tr {
            background: var(--table-bg);
          }
          tr:nth-child(2n) {
            background: var(--finish-text);
          }
          h1 {
            color: var(--text);
          }
        `}
      </style>
    </>
  );
};

export default RingerStartPage;
