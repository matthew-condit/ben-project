const Routes = {
  home: '/',
  postDetails: '/post/:postId',
  createPostDetailsUrl: (postId) => `/post/${postId}`,
  createPost: '/createPost',
  register: '/register',
  login: '/login',
};

export default Routes;
