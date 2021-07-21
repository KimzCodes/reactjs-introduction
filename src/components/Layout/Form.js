import React from 'react';
import styles from './Form.module.css';

const Form = (props) => {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

const Controller = (props) => {
  return <div className={styles.control}>{props.children}</div>;
};

Form.Controller = Controller;

export default Form;
