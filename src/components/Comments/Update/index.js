import React from 'react'
import {Modal, Box , Button , TextField} from '@mui/material'
import {useSelector , useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import {updateComments} from '../../../Redux/Comments/action'
import * as Yup from 'yup'

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

const fieldStyle = { 
    marginBottom : 10 ,
    width : '100%'
}

const validationSchema = Yup.object().shape({
    name : Yup.string() ,
    email  : Yup.string() ,
    body   : Yup.string() 

})



function DeleteModal(props) {

    const dispatch = useDispatch()

    const data = useSelector( state => state.comments)

    const formik = useFormik({
        initialValues : {
            name : data.name , 
            email : data.email , 
            body : data.body , 
        } ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            dispatch(updateComments(values , values.id))
        }
    })

    return (
        <Modal
            open={props.open}
            onClose={props.close} >

            <Box sx={style}>
                <h3>Edit</h3>
                <form onSubmit={formik.handleSubmit}> 
                    <TextField 
                        name="name"
                        style={fieldStyle} 
                        defaultValue={data.name} 
                        label="Name" 
                        variant="outlined"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField 
                        name="email"
                        style={fieldStyle} 
                        defaultValue={data.email} 
                        label="Email" 
                        variant="outlined" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField 
                        name="body"
                        style={fieldStyle} 
                        defaultValue={data.body} 
                        label="body" 
                        variant="outlined"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.body && Boolean(formik.errors.body)}
                        helperText={formik.touched.body && formik.errors.body}
                    />

                    <Button 
                        type="button"
                        onClick={() => formik.handleSubmit()} 
                        size="small" 
                        variant="contained">
                        OK
                    </Button>
                </form>
            </Box>

        </Modal>
    )
}

export default DeleteModal
