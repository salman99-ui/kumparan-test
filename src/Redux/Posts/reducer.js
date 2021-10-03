const initialValue = {
    id : '' ,
    userId : '' ,
    title  : '' ,
    body   : ''
}

const reducer = (state = initialValue , action) => {
    switch(action.type){
        case "Post_Edit" :
            return {
                id : action.payload.id ,
                userId : action.payload.userId ,
                title  : action.payload.title ,
                body   : action.payload.body ,
            }

        default :
            return state
    }
}

export default reducer