import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const Link = styled.a`
  text-decoration: none;
  text-decoration: none;
  color: #757575;
  cursor: pointer;
  transition: color 200ms;

  :hover {
    color: #000;
  }

  :nth-child(2) {
    margin-left: 30px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Center = styled.h1`
  cursor: pointer;
  font-size: 24px;
  font-weight: 800;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 75px;
  padding: 0 50px;
  border-bottom: 1px solid #eee;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`;

const Header = () => (
  <Nav>
    <Left>
      <NextLink href="/about">
        <Link>
          About
        </Link>
      </NextLink>
    </Left>

    <NextLink href="/">
      <Center>
        &#9790; Dusk
      </Center>
    </NextLink>

    <Right>
      <Link
        href="https://github.com/pacocoursey/dusk#cli-"
        target="_blank"
        rel="noopener noreferrer"
      >
        CLI
      </Link>
      <Link
        href="https://github.com/pacocoursey/dusk"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
    </Right>
  </Nav>
);

export default Header;
