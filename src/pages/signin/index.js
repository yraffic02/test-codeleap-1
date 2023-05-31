import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_USERNAME } from '../../redux/types';
import { setItem } from '../../hooks/useLocalStore';

export const Signin = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: SET_USERNAME, payload: username });

    setUsername('');
    setItem('isLogged', true)
    navigation('/home');
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='card-signin flex flex-col'>
        <h1>Welcome to CodeLeap network!</h1>

        <label htmlFor='user'>Please enter your username</label>

        <input
          type='text'
          id='user'
          className='input'
          value={username}
          onChange={handleChange}
        />

        <div className='card-bottom-btn flex'>
          {username === '' ? (
            ''
          ) : (
            <button className='btn primary' type='submit'>
              ENTER
            </button>
          )}
        </div>
      </form>
    </div>
  );
};


