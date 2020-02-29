import React from 'react';
import LoginRegisterForm from './LoginRegisterForm';
import { APIConfig } from '../utils/ApiConfig';
import { navigate } from '@reach/router';
import Routes from '../Routes';

const Login = () => {
  const onSubmit = () => {
    // do things
  };
  return <LoginRegisterForm onSubmit={onSubmit} submitButtonText={'Log In'} />;
};

export default Login;
