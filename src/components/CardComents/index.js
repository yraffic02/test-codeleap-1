import { useState } from 'react'
import { useSelector } from 'react-redux'
import useApiRequest from '../../hooks/useApiRequest'
import './styles.css'

export const CardComents = () => {
  const user = useSelector((state) => state.user)
  const { post } = useApiRequest()
  const [forms, setForms] = useState({
    user: user.user,
    title: '',
    content: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    post(forms.user, forms.title, forms.content);

    setForms({
      user,
      title: '',
      content: ''
    })
    
    return window.location.reload();
  }
 

  return (
    <div className="card-coment">
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <h1>What’s on your mind?</h1>
        <div className='flex flex-col'>
          <label>
            Title
          </label>
          <input
            type="text"
            className="input"
            placeholder='Hello world'
            value={forms.title}
            onChange={(e) => setForms({ ...forms, title: e.target.value })}
          />
        </div>
        <div className='flex flex-col'>
          <label>
            Content
          </label>
          <textarea
            type="text"
            className="input"
            placeholder='Content Here'
            value={forms.content}
            onChange={(e) => setForms({ ...forms, content: e.target.value })}
          />
        </div>
        <div className='card-bottom-btn flex'>
          {
            forms.content === '' 
            ?
            ''
            :
            <button className='btn primary' type="submit">
              Create
            </button>
          }
        </div>
      </form>
    </div>
  )
}

