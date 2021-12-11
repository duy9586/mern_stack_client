import { INIT_STATE } from '../../../constants/posts/index'
import { getPost, getType, createPost, updatePostLike } from '../../actions/index'

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPost.getPostRequest):
            return { ...state, isLoading: true }
        case getType(getPost.getPostSuccess):
            return { ...state, isLoading: false, data: action.payload }
        case getType(getPost.getPostFailure):
            return { ...state, isLoading: false }
        case getType(createPost.createPostSuccess):
            return { ...state, data: [...state.data, action.payload] }
        case getType(updatePostLike.updatePostLikeSuccess):
            return { ...state, data: action.payload }
        default:
            return state
    }
}