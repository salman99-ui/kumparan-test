import React from 'react'
import {Modal, Box , Button , TextField} from '@mui/material'
import {useSelector , useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import {updatePosts} from '../../../Redux/Posts/action'
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
    userId : Yup.string() ,
    title  : Yup.string() ,
    body   : Yup.string() 

})



function DeleteModal(props) {

    const dispatch = useDispatch()

    const data = useSelector( state => state.posts)

    const formik = useFormik({
        initialValues : {
            id : data.id ,
            userId : data.userId , 
            title : data.title , 
            body : data.body , 
        } ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            dispatch(updatePosts(values , values.id))
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
                        name="userId"
                        style={fieldStyle} 
                        defaultValue={data.userId} 
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
                        defaultValue={data.title} 
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
