import React from 'react'


const SkurlistePostoppsett = ({skurliste, setSkurlisteInfo, searchTrigger, setSearchResultModal}:any) => {
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
             
                if (searchTrigger) {
                  setSearchResultModal(true);
                }
              };

              return (
                <tbody
                  onClick={skurlisteInfoHandler}
                  className={`hover:bg-stone-700 cursor-pointer ${item.progress}`}
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
                  <td className="border border-slate-700 text-xs text-slate-400 ">
                    <div className="two-input">
                   <div>{item.anm}</div>
                    
                  <div>{item.anm2}</div>  
                    </div>
                  </td>
                  <td className="border border-slate-700 text-xs text-slate-400">
                    <div>

                    {item.vs66}
                    </div>
                    <div className="text-red-600">
                      {item.vs66Xtra}
                    </div>
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
.finished {
  background: rgba(143, 143, 143, 0.2);
}
.running {
  background: rgba(89, 226, 102, 0.3);
}
`}
</style>
</>
)
}

export default SkurlistePostoppsett