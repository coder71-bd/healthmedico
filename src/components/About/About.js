import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <Container
      className=" d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <Row className="justify-content-center align-items-center">
        {/* about info */}
        <Col lg={6}>
          <h3 className="pe-2 text-warning mb-3">About UNIEDUPRO</h3>
          <p>
            HealthMedico is an online medical store. We provide many healthcare
            related tools and medicine. You can get various kinds of medicine
            and tools in our online store. If you don't find anything in the
            website You can contact in our local branches or you can email us.
            We also provide emergency medicine supply. Our branches are located
            many areas in the world. Our main goal is to make our customer's
            happy. So, don't hesitate to use our services. Thanks for reading.
          </p>
        </Col>
        {/* about image */}
        <Col lg={6} style={{ maxWidth: 500 }}>
          <img
            className="img-fluid mx-auto"
            src="give image link"
            alt="about"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
