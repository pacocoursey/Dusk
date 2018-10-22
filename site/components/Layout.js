import React from 'react';
import styled from 'styled-components';
import Header from './Header';


const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const Main = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>
      { children }
    </Main>

    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
      `}
    </style>
  </Wrapper>
);

export default Layout;
