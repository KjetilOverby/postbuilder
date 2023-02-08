import React from "react";

const ConfirmModal = () => {
  return (
    <>
      <div className="main-container">
        <p>En post ble slettet!</p>
      </div>
      <style jsx>
        {`
          .main-container {
            background: var(--outer);
          }
        `}
      </style>
    </>
  );
};

export default ConfirmModal;
