'use client'
import React from 'react';
import styled from 'styled-components';

import userResponseMock from './userResponseMock.json';
import UserCard from '../components/UserCard';
import Footer from '../components/Footer';
import Search from '../components/Search';
import DataProvider from '../components/DataProvider';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    background-color: #a9ffad;
    padding: 0 100px;
    div {
      padding: 10px 0;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  main {
    background-color: #c7eaff;
    padding: 0 100px;
  }

  footer {
    padding: 0 100px;
    background-color: #a9ffad;
  }
`;

export default function UserPage() {
  return (
    <DataProvider data={userResponseMock}>
      <HomeContainer>
        <header>
          <div>Github user: {'insert user name'}</div>
        </header>
        <main>
          <UserCard userData={userResponseMock} />
          <Search />
        </main>
        <footer>
          <Footer />
        </footer>
      </HomeContainer>
    </DataProvider>
  );
}
