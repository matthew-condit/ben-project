const Routes = {
  home: '/',
  postDetails: '/post/:postId',
  createPostDetailsUrl: (postId) => `/post/${postId}`,
  createPost: '/createPost',
};

export default Routes;
