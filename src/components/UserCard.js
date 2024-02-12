import React from 'react';
import styled from 'styled-components';

const UserCardContainer = styled.div`
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;

  .avatar-holder {
    width: 150px;
    height: 150px;
    background-color: pink;
  }

  .repositories {
    background-color: lightcyan;
  }
`;

const UserCard = () => {
  return (
    <UserCardContainer>
      <div className="avatar-holder">
        avatar
        <div className="stars">total stars: {'output total stars here'}</div>
      </div>

      <div className="repositories">
        <div className="stars">List of repositories</div>
        <ul>{'repositories'}</ul>
      </div>
    </UserCardContainer>
  );
};

export default UserCard;
