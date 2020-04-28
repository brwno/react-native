import {createStore, combineReducer} from 'redux'
import userReducer from './reducers/user'
import postReducer from './reducers/posts'

const reducers = combineReducer ({
    user: userReducer,
    posts: postReducer,
})


const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig