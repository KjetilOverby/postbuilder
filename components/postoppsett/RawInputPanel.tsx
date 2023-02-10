import React from "react";

const RawInputPanel = ({ raw, setRawPanelValue }: any) => {
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <th className="nominell">nom</th>
              <th className="nom18">18%</th>
              <th className="nom12">12%</th>
            </tr>
            <tr>
              <td>
                {raw.map((item: any) => {
                  return (
                    <p key={item.id} className="nom nominell">
                      {item.nom}
                    </p>
                  );
                })}
              </td>
              <td>
                {raw.map((item: any) => {
                  return (
                    <p
                      onClick={() => setRawPanelValue(item.r18)}
                      key={item.id}
                      className="nom nom18"
                    >
                      {item.r18}
                    </p>
                  );
                })}
              </td>
              <td>
                {raw.map((item: any) => {
                  return (
                    <p
                      onClick={() => setRawPanelValue(item.r12)}
                      key={item.id}
                      className="nom nom12"
                    >
                      {item.r12}
                    </p>
                  );
                })}
              </td>
              <td>
                {raw.map((item: any) => {
                  return (
                    <p
                      onClick={() => setRawPanelValue(item.r12s)}
                      key={item.id}
                      className="nom nom12"
                    >
                      {item.r12s}
                    </p>
                  );
                })}
              </td>
              <td>
                {raw.map((item: any) => {
                  return (
                    <p
                      onClick={() => setRawPanelValue(item.r12s1)}
                      key={item.id}
                      className="nom nom12"
                    >
                      {item.r12s1}
                    </p>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .container {
          }
          .nom {
            color: pink;
          }
          .nom:hover {
            cursor: pointer;
          }
          .nominell {
            color: finish-text;
          }
          .nom12 {
            color: var(--text);
          }
          .nom18 {
            color: var(--outer-text);
          }
          td {
            border: 0.5px solid #333;
            padding: 4px;
          }
          table {
            width: 100%;
            background: var(--primary);
          }
        `}
      </style>
    </>
  );
};

export default RawInputPanel;
