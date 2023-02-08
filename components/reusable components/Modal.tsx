import React from "react";

interface ModalProps {
  title: string;
  actionBtnTitle: string;
  fn: (...args: any[]) => any;
  cancelHandler: (...args: any[]) => any;
}

const Modal = ({ title, actionBtnTitle, fn, cancelHandler }: ModalProps) => {
  return (
    <>
      <div className="main-container">
        <div className="modal-box">
          <h1>{title}</h1>
          <button onClick={fn}>{actionBtnTitle}</button>
          <button onClick={cancelHandler}>Avbryt</button>
        </div>
      </div>
      <style jsx>
        {`
          .main-container {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
            display: grid;
            place-items: center;
            z-index: 20000;
          }
          .modal-box {
            background: var(--text);
            width: 40rem;
            height: 20rem;
          }
        `}
      </style>
    </>
  );
};

export default Modal;
