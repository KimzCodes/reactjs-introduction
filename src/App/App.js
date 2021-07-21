import React, { useState, Fragment } from 'react';
import AddUser from '../components/AddUser/Adduser';
import CardList from '../components/CardList/CardList';
import FilterInput from '../components/FilterInput/FilterInput';
import Modal from '../components/Modal/Modal';
import Button from '../components/Layout/Button';

import './App.css';

const App = () => {
  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([
    {
      id: 1000,
      name: 'kareem',
      age: 31,
      address: 'hadyk el aharm',
      phone: '01010987123',
      type: 'boy',
    },
    {
      id: 2000,
      name: 'farah',
      age: 24,
      address: 'hadyk el aharm',
      phone: '01010987234',
      type: 'girl',
    },
    {
      id: 3000,
      name: 'ahmed',
      age: 24,
      address: 'hadyk el aharm',
      phone: '01010987234',
      type: 'boy',
    },
    {
      id: 4000,
      name: 'mariam',
      age: 20,
      address: 'fayesl',
      phone: '01010932123',
      type: 'girl',
    },
  ]);

  const addNewUserHandller = (data) => {
    setState((prevState) => setState([...prevState, data]));
  };

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
    <Fragment>
      <div className='mainContainer'>
        <h1>List of Data</h1>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <Button
            onClick={() => setCardToggle(!cardToggle)}
            style={{ marginRight: '20px' }}
          >
            {cardToggle ? 'Hide Names' : 'Show Names'}
          </Button>

          <Button onClick={() => setShowModal(true)}>New Record</Button>
        </div>

        <div className={cardToggle ? 'show' : 'hide'}>
          <FilterInput filteration={filterNames} />

          <CardList namesList={namesHandler()} deleteFunc={deleteHandler} />
        </div>
      </div>

      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <AddUser
          addNewUserHandller={addNewUserHandller}
          closeModal={() => setShowModal(false)}
        />
      </Modal>
    </Fragment>
  );
};

export default App;
