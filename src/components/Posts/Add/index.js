import React from 'react'
import {Modal, Box , Button , TextField} from '@mui/material'
import {useDispatch} from 'react-redux'
import {createPost} from '../../../Redux/Posts/action'
import * as Yup from 'yup'
import {useFormik} from 'formik'

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
  }

  const fieldStyle = { 
    marginBottom : 10 ,
    width : '100%'
}

const validationSchema = Yup.object().shape({
    userId : Yup.string().required('This field is required') ,
    title  : Yup.string().required('This field is required') ,
    body   : Yup.string().required('This field is required') 

})

const initialValue = {
    userId : '' ,
    title  : '' ,
    body   : ''
}


function AddModal(props) {

    console.log('add')

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            dispatch(createPost(values))

            action.resetForm()

        }
    })


    return (
        <Modal
            open={props.open}
            onClose={props.close} >

            <Box sx={style}>

                <h3>Add</h3>

                <form onSubmit={formik.handleSubmit}>

                    <TextField 
                        name="userId"
                        style={fieldStyle} 
                        label="userId" 
                        variant="outlined"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.userId && Boolean(formik.errors.userId)}
                        helperText={formik.touched.userId && formik.errors.userId}
                        />

                    <TextField 
                        name="title"
                        style={fieldStyle}
                        label="title" 
                        variant="outlined" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />

                    <TextField 
                        name="body"
                        style={fieldStyle}
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
                        variant="contained" >
                        OK
                    </Button>
                </form>
            </Box>

        </Modal>
    )
}

export default AddModal
