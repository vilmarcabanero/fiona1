import axios from 'axios';

const url = 'https://memoria-api.herokuapp.com/api';

export const fetchPosts = () => axios.get(`${url}/posts`);

export const createPost = newPost => axios.post(`${url}/posts`, newPost);

export const updatePost = (id, updatedPost) =>
	axios.patch(`${url}/posts/${id}`, updatedPost);

export const deletePost = id => axios.delete(`${url}/posts/${id}`);

export const likePost = id => axios.patch(`${url}/posts/likePost/${id}`);
