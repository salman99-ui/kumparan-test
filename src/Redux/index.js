import {createStore , applyMiddleware , combineReducers} from 'redux'
import thunk from 'redux-thunk'
import ReducerUser from './User/reducer'
import ReducerPost from './Posts/reducer'
import ReducerComment from './Comments/reducer'

const root = combineReducers({
    user : ReducerUser ,
    posts : ReducerPost ,
    comments : ReducerComment
})


const store = createStore(root , applyMiddleware(thunk))

export default store