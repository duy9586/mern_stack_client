import { combineReducers } from "redux";
import posts from './posts/posts';
import modal from './posts/modal';

export default combineReducers({
    posts,
    modal
})