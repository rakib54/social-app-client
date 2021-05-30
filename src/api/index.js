import axios from 'axios'

// const url = 'https://gentle-cove-09485.herokuapp.com/posts'
// const url = 'http://localhost:4000/posts'
const API = axios.create({ baseURL: 'http://localhost:4000' });

export const fetchPost = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (formData) => API.post('user/signin', formData)
export const signUp = (formData) => API.post('user/signup', formData)