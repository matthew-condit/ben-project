import React from 'react';
import styled from 'styled-components';
import { APIConfig } from '../utils/ApiConfig';
import { navigate } from '@reach/router';
import Routes from '../Routes';
import { GlobalStyles } from '../GlobalStyles';

const CreatePostWrapper = styled.div`
  padding: ${GlobalStyles.padding.large * 2}px;
`;
const Header = styled.h1`
  margin: ${GlobalStyles.padding.standard}px;
`;
const TitleInput = styled.input`
  background: ${GlobalStyles.colors.fontColor};
  padding: ${GlobalStyles.padding.standard}px;
  margin-top: ${GlobalStyles.padding.unit}px;
  font-size: 1.5rem;
`;
const BodyInput = styled.textarea`
  background: ${GlobalStyles.colors.fontColor};
  padding: ${GlobalStyles.padding.standard}px;
  margin-top: ${GlobalStyles.padding.unit}px;
  resize: vertical;
  font-size: 1.2rem;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: ${GlobalStyles.padding.standard * 2}px
    ${GlobalStyles.padding.standard}px;
`;

const SubmitButton = styled.button`
  background-color: ${GlobalStyles.colors.secondary};
  border: 1px solid ${GlobalStyles.colors.fontColor};
  border-radius: ${GlobalStyles.padding.unit};
  margin: ${GlobalStyles.padding.standard}px;
  color: ${GlobalStyles.colors.fontColor};
  padding: ${GlobalStyles.padding.standard}px;

  &:disabled {
    opacity: 0.5;
  }
`;

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
      <Header>New Post</Header>
      <form onSubmit={onSubmit}>
        <FormLabel>
          Post Title:{' '}
          <TitleInput value={title} onChange={onTitleChange} required />
        </FormLabel>
        <FormLabel>
          Body:{' '}
          <BodyInput value={body} onChange={onBodyChange} required rows={5} />
        </FormLabel>
        <SubmitButton
          type="submit"
          onSubmit={onSubmit}
          disabled={body === '' || title === ''}
        >
          Create Post
        </SubmitButton>
      </form>
    </CreatePostWrapper>
  );
};

export default CreatePost;
