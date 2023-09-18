import React, { useContext } from "react";
import { ContextAppData } from "../../data/context/ContextAppData";
import darkModeColor from "../../styles/darkMode";

const TabellComponent = ({ list, setRawVal }) => {
  const { darkMode } = useContext(ContextAppData);
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
                  <td
                    onClick={() => setRawVal(item.r18)}
                    className={`raw ${item.r18f} `}>
                    {item.r18}
                  </td>
                  <td
                    onClick={() => setRawVal(item.r12)}
                    className={`raw2 ${item.r12f}`}>
                    {item.r12}
                  </td>
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

          .styled-table tbody tr.active-row {
            font-weight: bold;
            color: rgb(0, 138, 138);
          }
          th {
            background: ${darkMode ? darkModeColor.secondary : ""};
          }
          .nom {
            color: ${darkMode ? darkModeColor.text : "slategrey"};
          }
          .raw {
            color: ${darkMode ? darkModeColor.blue : "rgb(0, 138, 138)"};
          }
          .raw2 {
            color: indianred;
          }
          tr:hover {
            cursor: pointer;
          }
          .fast:after {
            content: " *";
          }
        `}
      </style>
    </>
  );
};

export default TabellComponent;
