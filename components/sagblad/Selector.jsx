import React from "react";

const Selector = ({ setSelectVal }) => {
  return (
    <>
      <div className="container">
        <select
          name="cars"
          id="cars"
          onChange={(e) => setSelectVal(e.target.value)}
        >
          <option value="mkv445">MKV 445 36z</option>
          <option value="mkv510">MKV 510 36z</option>
          <option value="vs66flens">VS66 flens 24z</option>
          <option value="trimmer500">Trimmer 500 96z</option>
        </select>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default Selector;
