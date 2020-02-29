import React from 'react';
import LoginRegisterForm from './LoginRegisterForm';

const Login = () => {
  const onSubmit = () => {};
  return <LoginRegisterForm onSubmit={onSubmit} submitButtonText={'Log In'} />;
};

export default Login;
