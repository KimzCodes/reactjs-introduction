import React, { useState } from 'react';
import styles from './FilterInput.module.css';
const Filter = ({ filteration }) => {
  const [filter, setFilter] = useState('');

  const filterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    filteration(name);
  };

  return (
    <div className={styles.mp}>
      <input
        type='text'
        placeholder='filter by name'
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
