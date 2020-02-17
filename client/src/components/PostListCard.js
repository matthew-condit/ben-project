import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import { Link } from '@reach/router';
import Routes from '../Routes';

const CardWrapper = styled.div`
  margin: ${GlobalStyles.padding.standard}px 0;
  padding: ${GlobalStyles.padding.standard}px;
  border: 1px solid ${GlobalStyles.colors.fontColor};
  border-radius: ${GlobalStyles.padding.unit}px;
`;

const Title = styled.div``;
const StyledDetailsLink = styled(Link)`
  color: ${GlobalStyles.colors.fontColor};
`;

export const PostListCard = ({ post }) => {
  // fetches it's own user details
  return (
    <CardWrapper>
      <Title>{post.title}</Title>
      <StyledDetailsLink to={Routes.createPostDetailsUrl(post.id)}>
        View Post
      </StyledDetailsLink>
    </CardWrapper>
  );
};
