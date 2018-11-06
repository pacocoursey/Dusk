import React from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const Main = styled.main`
  padding: 50px 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Head>
      <title>Dusk Icons</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="simple, customizable macOS application icons." />
      <meta name="keywords" content="dusk, icons, dusk icon, dusk icons, macos, design, custom, app icon, os x" />
      <meta name="author" content="Paco Coursey" />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicon/manifest.json" />
      <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#1e1e1e" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <Header />
    <Main>
      { children }
    </Main>

    <GlobalStyle />
  </Wrapper>
);

export default Layout;
