import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import dental from '../../images/categories/dental.png';
import eye from '../../images/categories/eye.png';
import homeo from '../../images/categories/homeo.png';
import wellness from '../../images/categories/wellness.png';

const Categories = () => {
  return (
    <Container>
      <h3 className="d-3 text-center my-4 text-primary">Our Categories</h3>

      <Row className="mx-auto justify-content-evenly rounded-3">
        {/* wellness */}
        <Col
          md={3}
          xs={6}
          className="d-flex flex-column justify-content-center align-items-center border border-secondary"
          style={{ maxWidth: 200 }}
        >
          <img src={wellness} alt="wellness" />
          <p className="fs-3 my-3">wellness</p>
        </Col>

        {/* homeo */}
        <Col
          md={3}
          xs={6}
          className="d-flex flex-column justify-content-center align-items-center border border-secondary"
          style={{ maxWidth: 200 }}
        >
          <img src={homeo} alt="homeo" />
          <p className="fs-3 my-3">homeo</p>
        </Col>

        {/* eye */}
        <Col
          md={3}
          xs={6}
          className="d-flex flex-column justify-content-center align-items-center border border-secondary"
          style={{ maxWidth: 200 }}
        >
          <img src={eye} alt="eye" />
          <p className="fs-3 my-3">eye</p>
        </Col>

        {/* dental */}
        <Col
          md={3}
          xs={6}
          className="d-flex flex-column justify-content-center align-items-center border border-secondary"
          style={{ maxWidth: 200, height: 200 }}
        >
          <img src={dental} alt="dental" />
          <p className="fs-3 my-3">dental</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
