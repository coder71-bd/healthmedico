import React from 'react';
import { Button, Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center my-3 text-center"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <h3 className="text-danger d-1 mb-2">404</h3>
      <p className="text-info">Sorry We couldn't find this page.</p>
      <Link to="/home">
        <Button variant="outline-primary">Go to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
