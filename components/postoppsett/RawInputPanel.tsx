import React from 'react'


const RawInputPanel = ({raw}) => {
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
                    {raw.map((item) => {
                      return (
                        <p key={item.id} className="nom nominell">
                          {item.nom}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p
                          /* onClick={getRawRings} */
                          key={item.id}
                          className="nom nom18"
                        >
                          {item.r18}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p
                          /* onClick={getRawRings} */
                          key={item.id}
                          className="nom nom12"
                        >
                          {item.r12}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p
                          /* onClick={getRawRings} */
                          key={item.id}
                          className="nom nom12"
                        >
                          {item.r12s}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p
                          /* onClick={getRawRings} */
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
<style jsx>{`
.container {
}
.nom {
    color: pink
}
.nom:hover {
    cursor: pointer
}
.nominell {
    color: indianred
}
.nom12 {
    color: red
}
.nom18 {
    color: seagreen
}
td {
    border: .5px solid #333;
    padding: 2px;
}
`}
</style>
</>
)
}

export default RawInputPanel