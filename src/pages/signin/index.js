import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';



export const Signin = () => {
  const [name, setName] = useState('')
  const navigation = useNavigate()

  const handleSubmit = () => {
    navigation('/home')
  }

  return (
    <div className='container'>

      <form
        onSubmit={handleSubmit}
        className='card-signin flex flex-col'
      >
        <h1>Welcome to CodeLeap network!</h1>

        <label htmlFor='user'>
          Please enter your username
        </label>

        <input
          type='text'
          id='user'
          className='input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className='card-bottom-btn flex'>
          {
            name === '' ?
              ''
              :
              <button
                className='btn primary'
                type='submit'
              >
                ENTER
              </button>
          }
        </div>
      </form>

    </div>
  );
}

