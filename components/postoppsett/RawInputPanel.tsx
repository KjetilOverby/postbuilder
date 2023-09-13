import React from "react";

const RawInputPanel = ({ raw, setRawPanelValue, update, setUpdate }: any) => {
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
                  const ring1Handler = () => {
                    setRawPanelValue(item.r18);
                    setUpdate(!update);
                  };
                  return (
                    <p
                      onClick={ring1Handler}
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
                  const ring2Handler = () => {
                    setRawPanelValue(item.r12);
                    setUpdate(!update);
                  };
                  return (
                    <p
                      onClick={ring2Handler}
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
                  const ring3Handler = () => {
                    setRawPanelValue(item.r12s);
                    setUpdate(!update);
                  };
                  return (
                    <p
                      onClick={ring3Handler}
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
                  const ring4Handler = () => {
                    setRawPanelValue(item.r12s1);
                    setUpdate(!update);
                  };
                  return (
                    <p
                      onClick={ring4Handler}
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
            color: var(--text2);
          }
          .nom:hover {
            cursor: pointer;
          }
          .nominell {
            color: var(--text2);
          }
          .nom12 {
            color: var(--primary-text);
          }
          .nom18 {
            color: var(--primary-text);
          }
          td {
            border: 0.5px solid var(--outer);
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
