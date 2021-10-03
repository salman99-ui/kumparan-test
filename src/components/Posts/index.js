import React , {useEffect , useState} from 'react'
import {TableContainer , Table  , TableHead , TableCell , TableBody , Paper, TableRow , Button} from '@mui/material'
import {Link} from 'react-router-dom'
import {useDispatch , } from 'react-redux'
import {editPosts} from '../../Redux/Posts/action'
import ModalDelete from './Delete'
import EditModal from './Update'
import ModalAdd from './Add'
import axios from 'axios'
import './posts.css'


function Index(props) {

    const dispatch = useDispatch()

    const [ data , setData] = useState(null)
    const [ openAdd , setAdd] = useState(false)
    const [ openDelete , setDelete] = useState(false)
    const [ openEdit , setEdit] = useState(false)
    


    const closeDelete = () => setDelete(!openDelete)
    const closeEdit = () => setEdit(!openEdit)
    const closeAdd = () => setAdd(!openAdd)

    const editData = (data) => {
            dispatch( editPosts(data) )
            setEdit(true)
    }

    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}/posts`)
             .then( result => setData(result.data))

    }, [])

    if( data === null ) return null

    return (
        <div className="posts">

            <ModalAdd
                open={openAdd}
                close={closeAdd} />

            <ModalDelete 
                open={openDelete} 
                close={closeDelete} />

            <EditModal 
                open={openEdit} 
                close={closeEdit}
            />

            <div className="header">
                <h3 className="title">Posts</h3>
                
                <Button 
                    size="small" 
                    variant="contained"
                    onClick={() => setAdd(true)} >
                    + Data
                </Button>
            </div>

            <TableContainer 
                component={Paper}>
                <Table>
                    <TableHead style={{backgroundColor : 'rgba(39, 211, 245, 0.8)'}}>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                            <TableCell width="25%"></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {
                            data.map( item => (
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.body}</TableCell>
                                    <TableCell width="25%">
                                        <Link className="link" to={`/user/posts/${item.id}/comments`}> Detail</Link>
                                        <Link className="link" onClick={() => editData(item)} > Edit</Link>
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
