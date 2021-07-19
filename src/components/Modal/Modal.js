import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = () => {
  return <div className={styles.backDrop}></div>;
};

const Overlay = () => <div className={styles.overlay}></div>;

const Modal = () => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          <Backdrop /> <Overlay />
        </Fragment>,
        document.getElementById('modal')
      )}
    </Fragment>
  );
};

export default Modal;
