import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../redux/actions/userActions';
import { setItem } from '../../hooks/useLocalStore';

export const Signin = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setUsername(user));

    
    setItem('isLogged', true)
    navigation('/home');
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
          value={user}
          onChange={(e)=> setUser(e.target.value)}
        />

        <div className='card-bottom-btn flex'>
          {user === '' ? (
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


