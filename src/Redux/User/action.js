import axios from 'axios'

const SaveUserData = (data) => {
    return {
        type : "SAVE_USER" ,
        payload : {
            data : data
        }
    }
}


const getUsers = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(
            result => dispatch(SaveUserData(result.data))
        )
    }
}


export {getUsers}