import axios from 'axios';

const URL = 'http://localhost:3001';

export const getPost = async () => await axios.get(`${URL}/posts`)
export const createPost = async (data) => await axios.post(`${URL}/posts/create`, data, {})
export const updatePostLike = async (data) => await axios.post(`${URL}/posts/update_like`, data, {})