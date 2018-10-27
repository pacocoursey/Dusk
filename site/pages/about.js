import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Box = styled.div`
  flex: 1;
  width: 100%;
  max-width: 500px;

  h1 {
    font-size: 24px;
    font-weight: 800;
    margin: 20px 0;
  }
`;

const Text = styled.p`
  line-height: 1.7;
  font-weight: 400;
  color: #495057;
  margin-bottom: 30px;

  a {
    text-decoration: underline;
    color: inherit;
  }

  kbd {
    padding: 2px;
    border-radius: 5px;
    background-color: #f8f9fa;
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    height: 350px;
  }
`;

const About = () => (
  <Layout>
    <Box>
      <h1>About</h1>
      <Text>
        Dusk is a collection of simple, customizable macOS application icons.
        You can use them via command line, download from this website, or view the source on GitHub.
      </Text>

      <h1>Motivation</h1>
      <Text>
        You can&apos;t customize much of macOS.
        Replacing application icons with themed variants is a great way to personalize your desktop.
      </Text>

      <h1>Usage</h1>
      <Text>
        Replacing application icons can be done manually or using&nbsp;
        <a href="http://freemacsoft.net/liteicon/" target="_blank" rel="noopener noreferrer">
          LiteIcon
        </a>
      .
      </Text>

      <h3>Manually</h3>

      <Text>
        Open the information panel for the application using
        {' '}
        <kbd>&#8984;+I</kbd>
        {' '}
        or right clicking and selecting &quot;Get Info&quot;.
      </Text>

      <Image>
        <img src="/static/a.png" alt="Example Application Information Panel" />
      </Image>

      <Text>
        Open the replacement icon in Preview and copy it using
        {' '}
        <kbd>&#8984;+A</kbd>
        <kbd>&#8984;+C</kbd>
        {' '}
        .
      </Text>

      <Image>
        <img src="/static/b.png" alt="Example Replacement Icon in Preview" />
      </Image>

      <Text>
        Click the icon in the top left of the information panel so that it has a blue outline.
        Paste the new icon using
        {' '}
        <kbd>&#8984;+V</kbd>
        .
      </Text>

      <Image>
        <img src="/static/c.png" alt="Pasting into Application Information Panel" />
        <img src="/static/d.png" alt="New Icon in the Application Information Panel" />
      </Image>
    </Box>
  </Layout>
);

export default About;
