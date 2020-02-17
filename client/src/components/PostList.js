import React from 'react';
import { APIConfig } from '../utils/ApiConfig';
import styled from 'styled-components';
import { PostListCard } from './PostListCard';
import { GlobalStyles } from '../GlobalStyles';

const PostListWrapper = styled.div`
  padding: ${GlobalStyles.padding.large}px ${GlobalStyles.padding.large * 2}px;
  color: ${GlobalStyles.colors.fontColor};
`;
const LoadingPostList = styled(PostListWrapper)``;
const PostListError = styled(PostListWrapper)``;
const PostListHeader = styled.h2`
  padding: ${GlobalStyles.padding.standard / 2}px 0;
`;
const Posts = styled.div`
  padding: ${GlobalStyles.padding.standard / 2}px 0;
`;
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

  if (errorMessage) {
    return <PostListError>{errorMessage}</PostListError>;
  }

  if (!posts) return null;

  if (posts.length === 0) {
    return <PostListWrapper>No Posts to show today!</PostListWrapper>;
  }

  return (
    <PostListWrapper>
      <PostListHeader>Post List</PostListHeader>
      <Posts>
        {posts.map((post) => (
          <PostListCard post={post} key={post.id} />
        ))}
      </Posts>
    </PostListWrapper>
  );
};

export default PostList;
