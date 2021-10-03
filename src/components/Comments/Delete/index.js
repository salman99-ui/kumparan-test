import React from 'react'
import {Modal, Box , Typography , Button} from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function DeleteModal(props) {

    return (
        <Modal
            open={props.open}
            onClose={props.close}
          >

            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are You sure Want to delete ?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>

                <Button onClick={props.close} size="small" variant="contained" style={{float : 'right'}}>OK</Button>
            </Box>

        </Modal>
    )
}

export default DeleteModal
