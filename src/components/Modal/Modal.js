import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = ({ close, show }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
      onClick={close}
    ></div>
  );
};

const Overlay = ({ show }) => (
  <div
    className={`${styles.overlay} ${show ? styles.showOverlay : null}`}
  ></div>
);

const Modal = ({ show, closeModal }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          <Backdrop close={closeModal} show={show} />
          <Overlay show={show} />
        </Fragment>,
        document.getElementById('modal')
      )}
    </Fragment>
  );
};

export default Modal;
