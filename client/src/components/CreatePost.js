import React from 'react';
import styled from 'styled-components';
import { APIConfig } from '../utils/ApiConfig';
import { navigate } from '@reach/router';
import Routes from '../Routes';

const CreatePostWrapper = styled.div``;
const TitleInput = styled.input``;
const BodyInput = styled.input``;

const CreatePost = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    APIConfig.post(APIConfig.urls.createPost, {
      post: {
        title,
        body,
        userId: '1',
      },
    })
      .then(({ data }) => {
        // navigate
        navigate(Routes.createPostDetailsUrl(data.id));
      })
      .catch((e) => console.warn(e));
  };

  const createChangeHandler = (setter) => ({ target: { value } }) =>
    setter(value);
  const onTitleChange = React.useCallback(createChangeHandler(setTitle), [
    setTitle,
  ]);
  const onBodyChange = React.useCallback(createChangeHandler(setBody), [
    setBody,
  ]);

  return (
    <CreatePostWrapper>
      <div>New Post</div>
      <form onSubmit={onSubmit}>
        <label>
          Post Title: <input value={title} onChange={onTitleChange} />
        </label>
        <label>
          Body: <input value={body} onChange={onBodyChange} />
        </label>
        <button type="submit" onSubmit={onSubmit}>
          Create Post
        </button>
      </form>
    </CreatePostWrapper>
  );
};

export default CreatePost;
