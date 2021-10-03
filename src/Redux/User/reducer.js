const initialValue = {
    data : []
}

const reducer = (state = initialValue , action) => {
    switch(action.type){

        case "SAVE_USER" :
            return {
                data : action.payload.data
            }

        default :
            return state 
    }
}

export default reducer