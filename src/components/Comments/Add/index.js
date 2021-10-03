import React from 'react'
import {Modal, Box , Button , TextField} from '@mui/material'
import {useDispatch} from 'react-redux'
import {createComment} from '../../../Redux/Comments/action'
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
    name : Yup.string().required("This field is required") ,
    email  : Yup.string().required("This field is required") ,
    body   : Yup.string().required("This field is required")

})

const initialValue = {
    name : '' ,
    email  : '' ,
    body   : ''
}


function AddModal(props) {
    console.log('add')

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            dispatch(createComment(values , props.id))

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
                        name="name"
                        style={fieldStyle} 
                        label="Name" 
                        variant="outlined"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        />

                    <TextField 
                        name="email"
                        style={fieldStyle}
                        label="email" 
                        variant="outlined" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField 
                        name="body"
                        style={fieldStyle}
                        label="body" 
                        variant="outlined" 
                        value={formik.values.body}
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

export default React.memo( AddModal )
