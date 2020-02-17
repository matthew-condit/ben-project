import React from 'react';
import { APIConfig } from '../utils/ApiConfig';
import styled from 'styled-components';
import { PostListCard } from './PostListCard';

const LoadingPostList = styled.div``;
const PostListError = styled.div``;
const PostListWrapper = styled.div``;
const PostList = () => {
  const [posts, setPosts] = React.useState();

  const [isLoading, setIsLoading] = React.useState();

  const [errorMessage, setErrorMessage] = React.useState();

  React.useEffect(() => {
    setIsLoading(true);
    APIConfig.get(APIConfig.urls.allPosts)
      .then(({ data }) => console.error(data) || setPosts(data))
      .catch((e) => setErrorMessage(e.message))
      .finally(() => setIsLoading(false));
  }, []); // on Mount;

  if (isLoading) {
    return <LoadingPostList>Loading...</LoadingPostList>;
  }

  if (errorMessage || !posts) {
    return <PostListError>{errorMessage}</PostListError>;
  }

  if (posts.length === 0) {
    return <PostListWrapper>No Posts to show today!</PostListWrapper>;
  }
  return (
    <PostListWrapper>
      {posts.map((post) => (
        <PostListCard post={post} key={post.id} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
