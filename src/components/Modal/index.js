import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useApiRequest from '../../hooks/useApiRequest';
import { closeModal } from '../../redux/actions/modalActions';
import { styleEdit } from './style';


export default function BasicModal() {
  const open = useSelector(state => state.modal.isOpen)
  const modalType = useSelector(state => state.modal.tipo)
  const modalId = useSelector(state => state.modal.id)
  const dispatch = useDispatch()
  const { del, patch } = useApiRequest()
  const [ forms, setForms] = useState({
    title: '',
    content: ''
  })
  
  const handleDel = (id) => {
    del(modalId)
    
    setTimeout(() => {
      window.location.reload()
    }, 200)
    dispatch(closeModal())
  }

  const handleEdit = async() =>{
    patch(modalId, forms.title, forms.content)
    dispatch(closeModal())

    window.location.reload()
  }

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...styleEdit }}>
          {
            modalType === 'delete'
              ?
              <>
                <h1>Are you sure you want to delete this item?</h1>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '16px',
                    gap: '2rem'
                  }}>
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleDel}
                  >
                    Deletar
                  </Button>
                </div>
              </>

              :

              <>
                <h1>Edit item</h1>

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

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '1rem',
                    gap: '2rem'
                  }}>
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#47B960"
                    }}
                    onClick={handleEdit}
                  >
                    Save
                  </Button>
                </div>
              </>

          }
        </Box>
      </Modal>
    </div>
  );
}