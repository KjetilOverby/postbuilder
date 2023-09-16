import React from "react";

const TabellComponent = ({ list }) => {
  return (
    <>
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nom mål</th>
              <th>18% mål</th>
              <th>12% mål</th>
            </tr>
          </thead>
          <tBody>
            {list.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="nom">{item.nom}</td>
                  <td className="raw">{item.r18}</td>
                  <td className="raw2">{item.r12}</td>
                </tr>
              );
            })}
          </tBody>
        </table>
      </div>
      <style jsx>
        {`
          .styled-table {
            border-collapse: collapse;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 300px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
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

          .styled-table tbody tr:last-of-type {
            border-bottom: 2px solid #009879;
          }
          .styled-table tbody tr.active-row {
            font-weight: bold;
            color: #009879;
          }
          .nom {
            color: slategrey;
          }
          .raw {
            color: #009879;
          }
          .raw2 {
            color: indianred;
          }
          tr:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default TabellComponent;
