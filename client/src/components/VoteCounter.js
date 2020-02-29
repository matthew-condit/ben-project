import React from 'react';

const VoteCounter = ({ post }) => {
  const voteCount = post.upvotes - post.downvotes;
  return (
    <VoteWrapper>
      <ArrowWrapper></ArrowWrapper>
      <CountWrapper>{post.votes}</CountWrapper>
    </VoteWrapper>
  );
};
