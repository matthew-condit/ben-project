import React from 'react';
import styled from 'styled-components';
import { APIConfig } from '../utils/ApiConfig';
import { navigate } from '@reach/router';
import Routes from '../Routes';
import { GlobalStyles } from '../GlobalStyles';

const CreatePostWrapper = styled.div`
  padding: ${GlobalStyles.padding.large * 2}px;
`;
const Input = styled.input`
  background: ${GlobalStyles.colors.fontColor};
  padding: ${GlobalStyles.padding.standard}px;
  margin-top: ${GlobalStyles.padding.unit}px;
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

const LoginRegisterForm = ({ onSubmit, submitButtonText }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const createChangeHandler = (setter) => ({ target: { value } }) =>
    setter(value);

  const onUsernameChange = React.useCallback(createChangeHandler(setUsername), [
    setUsername,
  ]);
  const onPasswordChange = React.useCallback(createChangeHandler(setPassword), [
    setPassword,
  ]);

  return (
    <form onSubmit={onSubmit}>
      <FormLabel>
        <span>Username:</span>
        <Input value={username} onChange={onUsernameChange} required />
      </FormLabel>
      <FormLabel>
        <span>Password:</span>
        <Input
          value={password}
          onChange={onPasswordChange}
          required
          type={password}
        />
      </FormLabel>
      <SubmitButton
        type="submit"
        onSubmit={(e) => e.preventDefault() || onSubmit(e)}
        disabled={username === '' || password === ''}
      >
        {submitButtonText}
      </SubmitButton>
    </form>
  );
};

export default LoginRegisterForm;
