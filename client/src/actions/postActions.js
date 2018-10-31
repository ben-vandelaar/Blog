import axios from 'axios';

import { GET_POSTS, ADD_POST, DELETE_POST, POSTS_LOADING } from './types';



export const getPosts = () => dispatch => {
    dispatch(setPostsLoading());
    axios.get('/api/posts')
        .then(res =>
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
};

export const addPost = post => dispatch => {
    axios.post('api/posts', post)
        .then(res =>
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
};

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING,
    };
};