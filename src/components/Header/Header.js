import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleLogin = () => {
    alert('logged in');
  };
  const handleLogOut = () => {
    alert('logged out');
  };

  const logInBtn = (
    <Button variant="success" onClick={handleLogin}>
      <span className="pe-2">login</span>
      <FontAwesomeIcon icon={faSignInAlt} />
    </Button>
  );

  const logOutBtn = (
    <Button variant="danger" onClick={handleLogOut}>
      <span className="pe-2">logout</span>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </Button>
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: '#4157FF' }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="fst-italic fw-bold text-warning">
          HealthMedico
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/home"
              className="text-white text-center me-lg-3 border border-top-0 border-start-0 border-end-0"
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className="text-white text-center me-lg-3 border border-top-0 border-start-0 border-end-0"
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/track-order"
              className="text-white text-center me-lg-3 border border-top-0 border-start-0 border-end-0"
            >
              Track Order
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className="text-white text-center border border-top-0 border-start-0 border-end-0"
            >
              About us
            </Nav.Link>
          </Nav>
          <Nav>
            <p className="pt-lg-3 me-3 text-white fs-5 mt-4 mt-lg-0">
              user name's
            </p>
            <Nav.Link
              as={Link}
              to="/profile"
              className="text-white bg-primary text-center pt-lg-3 rounded-pill fs-5"
            >
              Profile
            </Nav.Link>
          </Nav>
          <Nav className="mt-lg-0 mt-3 ms-4">{logInBtn}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
