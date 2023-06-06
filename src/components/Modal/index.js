import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import useApiRequest from '../../hooks/useApiRequest';
import { styleEdit } from './style';
import { useSelector } from 'react-redux';

export default function BasicModal() {
  const isOpen = useSelector(state => state.modal.isOpen)
  const modalType = useSelector(state => state.modal.tipo)
  const modalId = useSelector(state => state.modal.id)
  const { del } = useApiRequest()




  const handleDel = (id) => {
    del(id)
    alert("content removed")


  }

  return (
    <div>
      <Modal
        open={isOpen}
      /* onClose={()=> handleClose()} */
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
                  /* onClick={()=> handleClose()} */
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                  /* onClick={handleDel} */
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
                />


                <label>
                  Content
                </label>
                <textarea
                  type="text"
                  className="input"
                  placeholder='Content Here'
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
                  /* onClick={()=> handleClose()} */
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#47B960"
                    }}
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