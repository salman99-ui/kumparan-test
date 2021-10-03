import axios from 'axios'

const createComment = (data , id ) => {
    axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments` , data)
         .then( result => console.log(result.data))
}

const editComments = (data) => {
        
    return {
        type : "EDIT_COMMENT" ,
        payload : {
            id : data.id ,
            name : data.name ,
            email : data.email ,
            body : data.body 

        }
    }
}


const updateComments = ( data , id) => {
    axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments` , data)
         .then( result => console.log(result.data))
}

export {createComment , editComments , updateComments}