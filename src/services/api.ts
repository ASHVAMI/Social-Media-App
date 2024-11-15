import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (username: string, email: string, password: string) =>
    api.post('/auth/register', { username, email, password }),
};

export const postsAPI = {
  getPosts: () => api.get('/posts'),
  createPost: (content: string, image?: File) => {
    const formData = new FormData();
    formData.append('content', content);
    if (image) formData.append('image', image);
    return api.post('/posts', formData);
  },
  likePost: (postId: string) => api.post(`/posts/${postId}/like`),
  comment: (postId: string, content: string) =>
    api.post(`/posts/${postId}/comments`, { content }),
};

export const userAPI = {
  follow: (userId: string) => api.post(`/users/${userId}/follow`),
  unfollow: (userId: string) => api.post(`/users/${userId}/unfollow`),
  getProfile: (userId: string) => api.get(`/users/${userId}`),
};

export const chatAPI = {
  getMessages: (userId: string) => api.get(`/messages/${userId}`),
  sendMessage: (receiverId: string, content: string) =>
    api.post('/messages', { receiverId, content }),
};

export default api;