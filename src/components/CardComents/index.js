import './styles.css'
/* import { useSelector } from 'react-redux'; */

export const CardComents = () => {
    /* const username = useSelector((state) => state.username); */
    

    
    return (
        <div className="card-coment">
            <form className='flex flex-col'>
                <h1>What’s on your mind?</h1>
                <div className='flex flex-col'>
                    <label>
                        Title
                    </label>
                    <input
                        type="text"
                        className="input"
                        placeholder='Hello world'
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
                    />
                </div>
                <div className='card-bottom-btn flex'>
                    <button className='btn primary'>
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}