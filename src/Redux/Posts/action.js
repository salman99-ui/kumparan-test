import axios from 'axios'

const createPost = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/posts' , data).then( result => console.log(result.data))
} 

const editPosts = (data) => {
    return {
        type : "Post_Edit" ,
        payload : {
            userId : data.userId ,
            title  : data.title ,
            body   : data.body
        }
    }
}


const updatePosts = (data , id) => {
    axios.post(`https://jsonplaceholder.typicode.com/posts/${id}` , data).then(result => console.log(result.data))
}


export {createPost , editPosts , updatePosts}