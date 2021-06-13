import axios from 'axios';

const baseUrl = 'http://localhost:4000/api';

export const fetchPosts = () => axios.get(`${baseUrl}/posts`);

export const createPost = newPost => axios.post(`${baseUrl}/posts`, newPost);
