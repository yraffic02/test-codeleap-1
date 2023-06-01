import './styles.css'
import delet from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import { useSelector } from 'react-redux'
import useApiRequest from '../../hooks/useApiRequest'

export const CardContent = (
    {
        idItem,
        title,
        content,
        datetime,
        username
    }
) => {
    const name = useSelector((state) => state.username)
    const {del} = useApiRequest()

    const handleDel = (id) =>{
        del(id)
        alert("content removed")

        return window.location.reload()
    }

    return (
        <div className="card-content flex flex-col">
            <div className='header-content-card flex align-items'>
                <h1>
                    {title}
                </h1>
                {
                    username === name
                        ?
                        <div className='icons flex align-items'>
                            <img 
                                src={delet} alt='delete icone'
                                onClick={()=> handleDel(idItem)} 
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