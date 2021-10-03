const initialValue = {
    id : '' ,
    name : '' ,
    email : '' ,
    body : ''
}

const reducer = ( state = initialValue , action) => {
    switch(action.type){
        case "EDIT_COMMENT" :
            return {
                id : action.payload.id ,
                name : action.payload.name ,
                email : action.payload.email ,
                body : action.payload.body
            }
        
        default : 
            return state
    }
} 


export default reducer