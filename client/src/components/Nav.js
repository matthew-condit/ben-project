import React from 'react';
import { Link } from '@reach/router';
import Routes from '../Routes';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 10px;
`;

const Nav = () => {
  return (
    <div>
      <StyledLink to={Routes.home}>
        Home
      </StyledLink>
      <StyledLink to={Routes.createPost}>
        create
      </StyledLink>
      <StyledLink to={Routes.postDetails}>
        details
      </StyledLink>
    </div>
  )
};


export default Nav;
