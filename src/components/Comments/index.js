import React , {useEffect , useState} from 'react'
import {TableContainer , Table  , TableHead , TableCell , TableBody , Paper, TableRow , Button} from '@mui/material'
import {useParams , Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {editComments} from '../../Redux/Comments/action'
import ModalAdd from './Add'
import ModalEdit from './Update'
import ModalDelete from './Delete'
import axios from 'axios'
import './comment.css'


function Index() {

    let { id } = useParams()

    const dispatch = useDispatch()

    const [data , setData] = useState(null)

    const [ openAdd , setAdd] = useState(false)
    
    const [ openDelete , setDelete] = useState(false)
    
    const [ openEdit , setEdit] = useState(false)



    const closeDelete = () => setDelete(!openDelete)
    
    const closeEdit = () => setEdit(!openEdit)
    
    const closeAdd = () => setAdd(!openAdd)

    const editData = (data) => {
        dispatch( editComments(data) )
        setEdit(true)
}

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
             .then( result => setData(result.data))
    },[])


    if( data === null) return null


    return (
        <div className="comments">
            
            <ModalAdd 
                open={openAdd}
                close={closeAdd}
                id={id}
            />

            <ModalEdit 
                open={openEdit}
                close={closeEdit}
                id={id}
            />

            <ModalDelete 
                open={openDelete}
                close={closeDelete}
            />


            <div className="header">
                <h3 className="title">Comments</h3>
                <Button 
                    size="small" 
                    variant="contained"
                    onClick={() => setAdd(true)} >
                    + Data
                </Button>
            </div>


            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{backgroundColor : 'rgba(39, 211, 245, 0.8)'}}>
                        <TableRow>
                            <TableCell size="medium">Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Body</TableCell>
                            <TableCell width="25%"></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data.map( item => (
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.body}</TableCell>
                                    <TableCell width="25%">
                                        <Link className="link" onClick={() => editData(item)}> Edit</Link>
                                        <Link className="link" onClick={() => setDelete(true)} > Delete</Link>
                                    </TableCell>
                                </TableRow>  
                            ))
                        }
                                                  
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default React.memo( Index )
