import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//NavBar functions


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Playlist</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/songs">Songs</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
// Navbar settings and links to Song Pages and About page
