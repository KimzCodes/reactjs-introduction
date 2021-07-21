import React, { useState } from 'react';
import Form from '../Layout/Form';
import Button from '../Layout/Button';

const AddUser = ({ addNewUserHandller, closeModal }) => {
  // const [input, setInput] = useState({
  //   name: '',
  //   age: '',
  //   address: '',
  //   phone: '',
  // });

  // const inputHandler = (e) => {
  //   const key = e.target.id;
  //   const value = e.target.value;
  //   setInput((prevState) => {
  //     return { ...prevState, [key]: value };
  //   });
  // };

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addNewUserHandller({
      id: Math.round(Math.random() * 100),
      name,
      age,
      address,
      phone,
      type,
    });
    setName('');
    setAge('');
    setPhone('');
    setType('');
    setAddress('');
    closeModal();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Controller>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor='age'>Age</label>
        <input
          type='text'
          id='age'
          placeholder='Enter age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Form.Controller>

      <Form.Controller>
        <label htmlFor='phone'>Phone</label>
        <input
          type='text'
          id='phone'
          placeholder='Enter phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor='address'>address</label>
        <input
          type='text'
          id='address'
          placeholder='Enter address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor='type'>Type</label>
        <input
          type='text'
          id='type'
          placeholder='Enter type'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </Form.Controller>
      <div style={{ marginTop: '20px' }}>
        <Button type='submit' style={{ marginRight: '20px' }}>
          Save
        </Button>
        <Button type='reset'>Reset</Button>
      </div>
    </Form>
  );
};

export default AddUser;
