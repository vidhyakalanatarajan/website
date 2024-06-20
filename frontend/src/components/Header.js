// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo src="https://static.vecteezy.com/system/resources/previews/009/144/558/original/ida-logo-ida-letter-ida-letter-logo-design-initials-ida-logo-linked-with-circle-and-uppercase-monogram-logo-ida-typography-for-technology-business-and-real-estate-brand-vector.jpg" alt="Logo" />
      <NavMenu>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color:#5b21b6;
  }
`;
