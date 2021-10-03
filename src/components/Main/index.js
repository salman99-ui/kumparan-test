import React , {useEffect} from 'react'
import {TableContainer , Table  , TableHead , TableCell , TableBody , Paper, TableRow , Button} from '@mui/material'
import {useDispatch , useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {getUsers} from '../../Redux/User/action'
import './main.css'
function Index() {

    const dispatch = useDispatch()
    const history  = useHistory()
    const data = useSelector(state => state.user.data)

    useEffect( () => {
        dispatch(getUsers())
    } , [])


    if(data.length === 0 ) return null 

    return (
        <div className="main">            
            <h3>List of users</h3>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead style={{backgroundColor : 'rgba(39, 211, 245, 0.8)'}}>
                            <TableRow>
                                <TableCell size="medium">Name</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                data.map( item => (
                                    <TableRow>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.username}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>
                                            <Button variant="outlined" size="small" onClick={() => history.push(`/user/${item.id}`)}>Detail</Button>
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

export default Index
