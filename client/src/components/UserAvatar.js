import React from 'react';
import styled from 'styled-components';
import { APIConfig } from '../utils/ApiConfig';

const UserAvatarWrapper = styled.div``;
export const UserAvatar = ({ userId }) => {
  const [user, setUser] = React.useState();

  const [isLoading, setIsLoading] = React.useState();

  const [errorMessage, setErrorMessage] = React.useState();

  React.useEffect(() => {
    setIsLoading(true);
    APIConfig.get()
      .then(({ data }) => console.error(data) || setUser(data))
      .catch((e) => setErrorMessage(e.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (!userId) {
    return <UserAvatarWrapper>Unknown User</UserAvatarWrapper>;
  }

  if (isLoading) {
    return <UserAvatarWrapper>Loading...</UserAvatarWrapper>;
  }

  if (errorMessage) {
    // todo: add retry for this
    return <UserAvatarWrapper>Failed to Load user</UserAvatarWrapper>;
  }

  if (!user) return null;

  return (
    <UserAvatarWrapper>
      {user.avatar}
      {user.username}
    </UserAvatarWrapper>
  );
};
