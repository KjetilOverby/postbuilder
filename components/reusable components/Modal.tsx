import React from "react";

interface ModalProps {
  title: string;
  actionBtnTitle: string;
  fn: (...args: any[]) => any;
  cancelHandler: (...args: any[]) => any;
  description: string;
}

const Modal = ({
  title,
  actionBtnTitle,
  fn,
  cancelHandler,
  description,
}: ModalProps) => {
  return (
    <>
      <div className="main-container">
        <div className="modal-box">
          <h1 className="header">{title}</h1>
          <p className="description">{description}</p>
          <button className="btn" onClick={fn}>
            {actionBtnTitle}
          </button>
          <button className="btn" onClick={cancelHandler}>
            Avbryt
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            font-size: 1.2rem;
          }
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
          .description {
            color: var(--outer-text);
          }
          .modal-box {
            background: var(--outer2);
            width: 40rem;
            height: 20rem;
            display: grid;
            place-items: center;
            border-radius: 10px;
          }
          .btn {
            background: var(--outer);
            width: 7rem;
            height: 3rem;
          }
        `}
      </style>
    </>
  );
};

export default Modal;
