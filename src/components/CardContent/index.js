import { useDispatch, useSelector } from 'react-redux'
import delet from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import BasicModal from '../Modal'
import './styles.css'

export const CardContent = (
    {
        idItem,
        title,
        content,
        datetime,
        username
    }
) => {
    const dispatch = useDispatch()
    const name = useSelector((state) => state.user)

    return (
            <div className="card-content flex flex-col">
                <div className='header-content-card flex align-items'>
                    <h1>
                        {title}
                    </h1>
                    {
                        username === name.user
                            ?
                            <div className='icons flex align-items'>
                                <img
                                    src={delet} alt='delete icone'
                                /* onClick={() => handleOpen(idItem, 'delete')} */
                                />
                                <img src={edit} alt='edit icone' />
                            </div>
                            :
                            ''
                    }
                </div>
                <div className='body-content-card flex flex-col'>
                    <div className='header-body-card flex align-items '>
                        <h2>@{username}</h2>
                        <h3>
                            {datetime}
                        </h3>
                    </div>
                    <div className='content-body-card'>
                        <p>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
    )
}