import React, { useState } from 'react';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import './App.css';

const App = () => {
  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState('');
  const [state, setState] = useState([
    {
      name: 'kareem',
      age: 31,
      adrress: 'hadyk el aharm',
      phone: '01010987123',
    },
    {
      name: 'ahmed',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
    },
    {
      name: 'mena',
      age: 20,
      adrress: 'fayesl',
      phone: '01010932123',
    },
  ]);

  const deleteHandler = (e, clickedIdx) => {
    // const deleteOberation = state.filter((el, idx) => idx !== clickedIdx);
    // setState(deleteOberation);
    setState((prevState) => {
      return prevState.filter((el, idx) => idx !== clickedIdx);
    });
  };

  // const toggleHandler = () => {
  // 	setCardToggle(!cardToggle);
  // };

  const filterNames = (name) => {
    setFilter(name);
  };

  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };

  return (
    <div className='mainContainer'>
      <h1>Boys Data</h1>
      <button
        style={{ marginBottom: '20px' }}
        onClick={() => setCardToggle(!cardToggle)}
      >
        {cardToggle ? 'Hide Names' : 'Show Names'}
      </button>
      <div className={cardToggle ? 'show' : 'hide'}>
        <Filter filteration={filterNames} />

        <Card
          namesList={namesHandler()}
          type='men'
          deleteFunc={deleteHandler}
        />
      </div>
    </div>
  );
};

export default App;
