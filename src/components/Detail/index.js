import React from 'react'
import {useParams} from 'react-router-dom'
import {Posts , Albums} from '../index'
import './detail.css'

function Index() {
    let {id} = useParams()
    
    return (
        <div className="details">
            
            <Posts id={id} />

            <Albums id={id} />
            
        </div>
    )
}

export default Index
