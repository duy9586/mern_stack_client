import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/index'
import * as apis from '../../apis/post'

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(apis.getPost);
        yield put(actions.getPost.getPostSuccess(posts.data.data));
    } catch (error) {
        yield put(actions.getPost.getPostFailure(error));
    }
}

function* createPostsSaga(action) {
    try {
        const posts = yield call(apis.createPost, action.payload);
        yield put(actions.createPost.createPostSuccess(posts.data.data));
    } catch (error) {
        yield put(actions.createPost.createPostFailure(error));
    }
}

function* updatePostLikeSaga(action) {
    try {
        const posts = yield call(apis.updatePostLike, action.payload);
        yield put(actions.updatePostLike.updatePostLikeSuccess(posts.data.data));
    } catch (error) {
        yield put(actions.updatePostLike.updatePostLikeFailure(error));
    }
}

function* sagas() {
    yield takeLatest(actions.getPost.getPostRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostsSaga);
    yield takeLatest(actions.updatePostLike.updatePostLikeRequest, updatePostLikeSaga);
}

export default sagas;