import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div``;

export const PostListCard = ({ post }) => {
  return <CardWrapper>{post.title}</CardWrapper>;
};
