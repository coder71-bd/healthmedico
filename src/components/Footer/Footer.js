import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ overflow: 'hidden' }}>
      <Row className="align-items-center bg-info p-3">
        <Col lg={6} className="fw-bold text-uppercase text-white">
          Sign up for our weekly newsletter
        </Col>
        <Col lg={6}>
          <InputGroup>
            <FormControl
              className="border  border-light"
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-dark text-white" id="button-addon2">
              Submit
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="bg-dark text-white align-items-center">
        <Col lg={6}>
          <p className="text-center text-uppercase fw-bold fs-1 ms-3">
            HealthMedico
          </p>
        </Col>
        <Col lg={6}>
          <p className="text-center">
            &copy; all rights reserved by HealthMedico
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
