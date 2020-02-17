import React from 'react';
import styled from 'styled-components';
import { APIConfig } from '../utils/ApiConfig';
import { GlobalStyles } from '../GlobalStyles';
import { UserAvatar } from './UserAvatar';
import { navigate } from '@reach/router';
import Routes from '../Routes';
import { Link } from '@reach/router';
const PostDetailsPageWrapper = styled.div`
  padding: ${GlobalStyles.padding.large}px ${GlobalStyles.padding.large * 2}px;
  color: ${GlobalStyles.colors.fontColor};
`;
const Title = styled.h1``;
const Body = styled.div``;
const DeletePostButton = ({ postId }) => {
  const onDeleteClicked = () => {
    const p = APIConfig.delete(APIConfig.urls.createPostDeleteAPI(postId)).then(
      (successful) => {
        navigate(Routes.home);
      },
    );
    console.error(p);
  };
  return <button onClick={onDeleteClicked}>Delete Post</button>;
};
const PostDetails = ({ postId }) => {
  const [post, setPost] = React.useState();

  const [isLoading, setIsLoading] = React.useState();

  const [errorMessage, setErrorMessage] = React.useState();

  React.useEffect(() => {
    setIsLoading(true);
    APIConfig.get(APIConfig.urls.createPostDetailsAPI(postId))
      .then(({ data }) => console.error(data) || setPost(data))
      .catch((e) => console.warn(e) || setErrorMessage(e.message))
      .finally(() => setIsLoading(false));
  }, [postId]);

  if (isLoading) {
    return <PostDetailsPageWrapper>Loading...</PostDetailsPageWrapper>;
  }

  if (errorMessage) {
    return <PostDetailsPageWrapper>{errorMessage}</PostDetailsPageWrapper>;
  }
  if (!post) {
    return (
      <div>
        404 there is no post here! Go <Link to={Routes.home}>home</Link>
      </div>
    );
  }

  return (
    <PostDetailsPageWrapper>
      <Title>{post.title}</Title>
      <UserAvatar userId={post.userId} />
      <Body>{post.body}</Body>
      <DeletePostButton postId={post.id} />
    </PostDetailsPageWrapper>
  );
};

export default PostDetails;
