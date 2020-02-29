import React from 'react';
import LoginRegisterForm from './LoginRegisterForm';

const Register = () => {
  const onSubmit = () => {};
  return (
    <LoginRegisterForm onSubmit={onSubmit} submitButtonText={'Register'} />
  );
};

export default Register;
