import { ADD_POST } from '../actions/actionTypes'
import { ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Rafael Filho',
        email: 'rafa@rafa.com',
        image: require('../../../assets/imgs/fence'),
        comments: [{
            nickname: 'Johny',
            comments: 'Top'
        }, {
            nickmane: 'Joelma',
            comment: 'Nossa que horrível'
        }]
    }, {
        id: Math.random(),
        nickname: 'Junior Filho',
        email: 'junior@junior.com',
        image: require('../../../assets/imgs/bw'),
        comments: []

    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = pos.comment.concat(
                                action.payload.comment
                            )
                        } else { 
                            post.comment = [action.payload.comment] 
                        }
                    }
                
                    return post
                }                
                )
            }
        default:
            return state
    }
}

export default reducer 