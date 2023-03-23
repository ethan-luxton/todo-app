import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.scss'
const Header = () => {
  return (
    <header className="header">
      <Navbar className="Nav" expand="lg">
        <Container>
            <Nav className="me-auto nav">
                <Nav.Link as={Link} to="/" className="home">
                    To-Do List
                </Nav.Link>
                <Nav.Link as={Link} to="/settings" className="settings">
                    Settings
                </Nav.Link> 
            </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;