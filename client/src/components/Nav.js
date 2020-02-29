import React from 'react';
import { Link } from '@reach/router';
import Routes from '../Routes';
import styled from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import { lighten } from 'polished';

const NavWrapper = styled.div`
  background: ${GlobalStyles.colors.secondary};
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
`;
const StyledLink = styled(Link)`
  padding: ${GlobalStyles.padding.unit * 2}px ${GlobalStyles.padding.unit * 4}px;
  color: ${GlobalStyles.colors.fontColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    background-color: ${lighten(0.1, GlobalStyles.colors.secondary)};
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <StyledLink to={Routes.home}>Home</StyledLink>
      <StyledLink to={Routes.home}>Most Recent</StyledLink>
      <StyledLink to={Routes.home}>Top Voted</StyledLink>
      <StyledLink to={Routes.createPost}>Create a new post</StyledLink>
      <StyledLink to={Routes.register}>Register</StyledLink>
      <StyledLink to={Routes.login}>Login</StyledLink>
      {/* <StyledLink to={Routes.postDetails}>details</StyledLink> */}
    </NavWrapper>
  );
};

export default Nav;
