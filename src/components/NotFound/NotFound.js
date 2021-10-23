import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <section
      className=" d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <p style={{ fontSize: 100 }} className="text-danger">
        404
      </p>
      <p className="fs-4 text-info">Sorry! we couldn't find this page</p>
      <p>Please go back to home page</p>
      <NavLink to="/home">
        <Button variant="info text-white" className="mb-5">
          Home
        </Button>
      </NavLink>
    </section>
  );
};

export default NotFound;
