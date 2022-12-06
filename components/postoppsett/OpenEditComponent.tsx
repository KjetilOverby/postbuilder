import React from "react";

interface EditProps {
  children: JSX.Element | JSX.Element[];
  openEdit: boolean;
}

const OpenEditComponent = ({ children, openEdit }: EditProps) => {
  return (
    <>
      {openEdit && children}
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default OpenEditComponent;
