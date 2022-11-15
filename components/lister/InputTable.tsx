import React from "react";

interface listInputProps {
  listInputData: {
    treslag: string;
    klasse: string;
    klType: string;
    breddePost: string;
  };
}

const InputTable = ({ listInputData }: listInputProps) => {
  return (
    <>
      <div className="skurliste-container mb-10">
        <table className="border table-auto w-auto border-spacing-2 shadow-md">
          <thead>
            <tr>
              <th className="border border-slate-300 lg:p-1.5 " scope="col">
                Treslag
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Kl
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Ant
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                m3
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Status
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Post
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                X-log
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                %
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Anm
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Vs66
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Vs66 bredder
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Mkv bord
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Mkv bredder
              </th>
              <th className="border border-slate-300 lg:p-1.5" scope="col">
                Blad
              </th>
            </tr>
          </thead>

          <tbody className={`hover:bg-green-100 cursor-pointer `}>
            <td
              className={`border border-slate-300 lg:p-1.5 grid grid-cols-1 grid-rows-2 `}
            >
              {listInputData.treslag}
              <span className="span-text-date text-slate-800 italic">
                {listInputData.klType}
              </span>
            </td>
            <td className="border border-slate-300 lg:p-1.5">
              {listInputData.klasse}
            </td>
            <td className="border border-slate-300 lg:p-1.5"></td>
            <td className="border border-slate-300 lg:p-1.5"></td>
            <td
              className={`border border-slate-300 lg:p-1.5 
                    `}
            ></td>
            <td className="border border-slate-300 lg:p-1.5 post">
              x{listInputData.breddePost}
            </td>
            <td className="border border-slate-300 lg:p-1.5"></td>
            <td className="border border-slate-300 lg:p-1.5"></td>
            <td className="border border-slate-300 lg:p-1.5 text-teal-600"></td>
            <td className="border border-slate-300 lg:p-1.5"></td>
            <td className="border border-slate-300 lg:p-1.5"></td>
            <td className="border border-slate-300 lg:p-1.5"></td>
            <td className="border border-slate-300 lg:p-1.5"></td>
            <td className="border border-slate-300 lg:p-1.5"></td>
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .skurliste-container {
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
          table {
            width: 100%;
          }
          .span-text-date {
            font-size: 0.6rem;
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
