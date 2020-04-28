import { ADD_POST } from './actionTypes'

export const addPost = post => {
    return dispatch => {
        axius.post(('/posts.json'), {...post})
        .catch(err => console.log(err))
        .then(res => console.log(err))
    }
 
    /*    return{
        type: ADD_POST,
        payload: post,
    } */
}

export const addComment = payload => {
    return{
        type: ADD_COMMENT,
        payload,
    }
}