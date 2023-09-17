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
          <option value="vs66flens">VS66 flens</option>
          <option value="trimmer500">Trimmer JV 500</option>
          <option value="vs66">VS66</option>
          <option value="eksakt">Eksaktkappe JV</option>
          <option value="makita">Makita 216 60z</option>
          <option value="DeWalt">DeWalt 216 24z</option>
        </select>
      </div>
      <style jsx>
        {`
          .container {
          }
          select {
            border-radius: 10px;
            background: rgb(224, 242, 241);
            color: rgb(0, 138, 138);
          }
        `}
      </style>
    </>
  );
};

export default Selector;
