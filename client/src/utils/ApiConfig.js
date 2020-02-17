import axios from 'axios';
// Axios Docs: https://github.com/axios/axios

export const APIConfig = {
  apiBase: 'http://localhost:5000',
  getApiBase: function() {
    return this.apiBase;
  },
  setApiBase: function(newBase) {
    this.apiBase = newBase;
  },
  get: function(url, params) {
    return axios.get(`${this.getApiBase()}${url}`, {
      params,
    });
  },
  post: function(url, params) {
    return axios.post(`${this.getApiBase()}${url}`, {
      params,
    });
  },
  delete: function(url, params) {
    return axios.delete(`${this.getApiBase()}${url}`, {
      params,
    });
  },
  urls: {
    allPosts: '/posts/',
    createPost: '/posts/',
    postDetails: '/posts/',
    createPostDetailsAPI: (postId) => `/posts/${postId}`,
    deletePost: '/posts/',
    createPostDeleteAPI: (postId) => `/posts/${postId}`,
  },
};
