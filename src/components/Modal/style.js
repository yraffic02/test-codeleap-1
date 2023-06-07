export const styleDelete = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #999999',
  bdradius: '16px',
  boxShadow: 24,
  gap: '1rem',
  p: '2rem',
  borderRadius: '16px',

  '@media (max-width: 800px)': {
    width: '90%',
    maxWidth: '90%',
  },
};

export const styleEdit = {
  ...styleDelete,
  display: 'flex',
  flexDirection: 'column',
  width: '41.25rem',
}

