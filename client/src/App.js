import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import PostList from './components/PostList';
import Routes from './Routes';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';
import Nav from './components/Nav';
import { GlobalStyles } from './GlobalStyles';
import Register from './components/Register';
import Login from './components/Login';

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
  background: ${GlobalStyles.colors.tertiary};
  color: ${GlobalStyles.colors.fontColor};
`;
const App = () => {
  return (
    <AppWrapper className="App">
      <Nav />
      <Router style={{ width: '100%' }}>
        <PostList path={Routes.home} />
        <PostDetails path={Routes.postDetails} />
        <CreatePost path={Routes.createPost} />
        <Register path={Routes.register} />
        <Login path={Routes.login} />
      </Router>
    </AppWrapper>
  );
};

export default App;
