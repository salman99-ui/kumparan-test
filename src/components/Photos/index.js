import React , {useEffect , useState} from 'react'
import {TableContainer , Table  , TableHead , TableCell , TableBody , Paper, TableRow } from '@mui/material'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './photos.css'



function Index() {

    let { id } = useParams()

    const [ data , setData ] = useState(null)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
             .then( result => setData(result.data))
    },[])


    if( data === null) return null

    return (
        <div className="photos">
            <h3>Photos</h3>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{backgroundColor : 'rgba(39, 211, 245, 0.8)'}}>
                        <TableRow>
                            <TableCell size="medium">Id</TableCell>
                            <TableCell>Cover</TableCell>
                            <TableCell>Title</TableCell>
                            
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data.map( item => (
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>
                                        <img src={item.thumbnailUrl} />
                                    </TableCell>
                                    <TableCell>{item.title}</TableCell>
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
