import {
  faCartPlus,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = ({ totalItem }) => {
  const { user, logout } = useAuth();

  const history = useHistory();

  const handleLogin = () => {
    console.log(history);
    history.push('/login');
  };

  const handleLogOut = () => {
    logout();
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
      sticky="top"
      expand="lg"
      style={{ backgroundColor: '#4157FF' }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fst-italic fw-bold text-warning"
        >
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
              to="/shipping"
              className="text-white text-center me-lg-3 border border-top-0 border-start-0 border-end-0"
            >
              Shipping
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/profile"
              className="text-white text-center me-lg-3 border border-top-0 border-start-0 border-end-0"
            >
              Profile
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
            <Nav.Link
              as={Link}
              to="/cart"
              className="text-white position-relative me-lg-4"
            >
              <FontAwesomeIcon icon={faCartPlus} className="fs-3" />
              <span className="position-absolute top-0 start-50 bg-info fw-bold rounded-circle px-2 ms-2">
                {totalItem}
              </span>
            </Nav.Link>

            {/* logged in user name */}
            <Nav.Link as={Link} to="/profile" className="text-white">
              {user.name}
            </Nav.Link>
          </Nav>

          {/* login logout button toggle system */}
          {user.email ? (
            <Nav className="mt-lg-0 mt-3 ms-4">{logInBtn}</Nav>
          ) : (
            <Nav className="mt-lg-0 mt-3 ms-4">{logOutBtn}</Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
