import React from 'react';
import styles from './Card.module.css';

const Card = ({ namesList, deleteFunc }) => {
  const cards = namesList.map(({ name, age, address, phone, type, id }) => (
    <div
      className={styles.cardWrapper}
      key={id}
      style={{ backgroundColor: type === 'girl' ? 'pink' : 'green' }}
    >
      <div>Name:{name}</div>
      <div>Age: {age}</div>
      <div>Adress: {address}</div>
      <div>Phone: {phone}</div>
      <div
        className={styles.deleteBtn}
        onClick={(event) => deleteFunc(event, id)}
      >
        x
      </div>
    </div>
  ));
  return <div>{cards}</div>;
};

export default Card;
