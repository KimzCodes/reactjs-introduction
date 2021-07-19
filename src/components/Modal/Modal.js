import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = ({ close }) => {
  return <div className={styles.backDrop} onClick={close}></div>;
};

const Overlay = () => <div className={styles.overlay}></div>;

const Modal = ({ show, closeModal }) => {
  return (
    show && (
      <Fragment>
        {ReactDom.createPortal(
          <Fragment>
            <Backdrop close={closeModal} /> <Overlay />
          </Fragment>,
          document.getElementById('modal')
        )}
      </Fragment>
    )
  );
};

export default Modal;
