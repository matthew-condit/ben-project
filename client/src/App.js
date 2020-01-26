import React from 'react';
import { Router } from "@reach/router";

import PostList from './components/PostList';
import Routes from './Routes';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';
import Nav from './components/Nav';


const  App = () => {
  return (
    <div className="App">
      <Nav />
      <Router>
        <PostList path={Routes.home} />
        <PostDetails path={Routes.postDetails} />
        <CreatePost path={Routes.createPost} />
      </Router>
    </div>
  );
}

export default App;
