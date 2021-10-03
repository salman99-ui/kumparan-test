import React , {useEffect , useState} from 'react'
import {TableContainer , Table  , TableHead , TableCell , TableBody , Paper, TableRow } from '@mui/material'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './albums.css'


function Index(props) {

    const [ data , setData] = useState(null)

    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}/albums`)
             .then( result => setData(result.data))
    }, [])
    

    
    if( data === null ) return null

    
    return (
        <div className="albums">
            <h3 className="title">Albums</h3>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{backgroundColor : 'rgba(39, 211, 245, 0.8)'}}>
                        <TableRow>
                            <TableCell size="medium">Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {
                            data.map( item => (
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>
                                        <Link className="link" to={`albums/${item.id}/photos`}>Detail</Link>
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
