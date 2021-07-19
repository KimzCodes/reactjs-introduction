import React, { useState } from 'react';
import CardList from '../components/CardList/CardList';
import Filter from '../components/Filter/Filter';
import Modal from '../components/Modal/Modal';

import './App.css';

const App = () => {
  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([
    {
      id: 1,
      name: 'kareem',
      age: 31,
      adrress: 'hadyk el aharm',
      phone: '01010987123',
      type: 'boy',
    },
    {
      id: 2,
      name: 'farah',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
      type: 'girl',
    },
    {
      id: 3,
      name: 'ahmed',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
      type: 'boy',
    },
    {
      id: 4,
      name: 'mariam',
      age: 20,
      adrress: 'fayesl',
      phone: '01010932123',
      type: 'girl',
    },
  ]);

  const deleteHandler = (e, selectedID) => {
    // const deleteOberation = state.filter((el, idx) => idx !== clickedIdx);
    // setState(deleteOberation);
    setState((prevState) => {
      return prevState.filter((el) => el.id !== selectedID);
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
      <Modal show={showModal} closeModal={() => setShowModal(false)} />
      <h1>List of Data</h1>

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <button
          style={{ marginRight: '20px' }}
          onClick={() => setCardToggle(!cardToggle)}
          className='button'
        >
          {cardToggle ? 'Hide Names' : 'Show Names'}
        </button>

        <button className='button' onClick={() => setShowModal(true)}>
          New Record
        </button>
      </div>

      <div className={cardToggle ? 'show' : 'hide'}>
        <Filter filteration={filterNames} />

        <CardList namesList={namesHandler()} deleteFunc={deleteHandler} />
      </div>
    </div>
  );
};

export default App;
