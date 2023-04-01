import React from "react";

const ThemeColorMenu = ({ click, color1, color2, color3, title }: any) => {
  return (
    <>
      <div onClick={click} className="theme-menu">
        <div className="box-container">
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
        </div>

        <p className="menu-box-tab">{title}</p>
      </div>
      <style jsx>
        {`
          .box {
            height: 0.7rem;
            width: 0.7rem;
            background: green;
          }
          .box-container {
            display: flex;
            align-items: center;
          }
          .theme-menu {
            display: flex;
            align-items: center;
          }
          .theme-menu:hover {
            cursor: pointer;
          }
          .box1 {
            background: ${color1};
          }
          .box2 {
            background: ${color2};
          }
          .box3 {
            background: ${color3};
          }
          .menu-box-tab {
            color: var(--primary-text);
            font-size: 0.8rem;
            margin-bottom: 5px;
            margin-left: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default ThemeColorMenu;
