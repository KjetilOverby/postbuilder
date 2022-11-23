import React from 'react'


const SkurlistePostoppsett = ({skurliste}) => {
return (
<>
<div className="skurliste-container absolute">
<table className="border table-auto w-auto border-spacing-2 shadow-md">
          <thead>
            <tr>
              <th className="border border-slate-700  text-xs text-slate-600" scope="col">
                Treslag
              </th>
              <th className="border border-slate-700  text-xs text-slate-600" scope="col">
                Kl
              </th>
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                Ant
              </th>
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                m3
              </th>
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                Status
              </th>
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                Post
              </th>
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                X-log
              </th>
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                %
              </th>
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                Anm
              </th>
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                Vs66
              </th>
            
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
                Mkv
              </th>
            
              <th className="border border-slate-700 text-xs text-slate-600" scope="col">
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
                  setFieldID(item._id)
                  setChosen('skurliste')
                }
                if (searchTrigger) {
                  setSearchResultModal(true);
                }
              };

              return (
                <tbody
                  onClick={skurlisteInfoHandler}
                  className={`hover:bg-stone-800 cursor-pointer ${item.progress}`}
                  key={item._id}
                >
                  <td
                    className={`border border-slate-700 text-xs text-slate-400  ${
                      item.treslag === "Furu"
                        ? "text-orange-600"
                        : "text-green-500"
                    }`}
                  >
                    {item.treslag} {item.klType}
                  
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400">
                    {item.klasse}
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400">
                    {item.ant}
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400">
                    {item.m3}
                  </td>
                  <td
                    className={`border border-slate-700 text-xs text-slate-400 ${
                      item.status == "tøm" ? "text-green-400" : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400 post">
                    {item.post}x{item.breddePost}
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400">
                    {item.xLog}
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400">
                    {item.prosent}
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400 text-teal-600 ">
                    <div className="two-input">
                   <div>{item.anm}</div>
                    
                  <div>{item.anm2}</div>  
                    </div>
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400">
                    {item.vs66}
                  </td>
                  
                  <td className="border border-slate-700 text-xs text-slate-400">
                    {item.mkvBord}
                  </td>
                
                  <td className="border border-slate-700 text-xs text-slate-400">
                    {item.blad}
                  </td>
                </tbody>
              );
            })}
        </table>
      </div>
<style jsx>{`
.skurliste-container {
  bottom: 10px;
  right: 10px
}
`}
</style>
</>
)
}

export default SkurlistePostoppsett