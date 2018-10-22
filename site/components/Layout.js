import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    { children }

    <style jsx>
      {`
        div {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
        }
      `}
    </style>

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
  </div>
);

export default Layout;
