import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shop from '../../images/banner/shop.png';
import Categories from '../Categories/Categories';
import './Home.css';

const Home = () => {
  //later I will convert it to json
  const json = {
    eyeCare: [
      {
        id: 1,
        name: 'random',
        image: 'demourl',
        price: 129,
        desc: 'best eye dropper for eyes',
        detailDesc:
          'It is a very convenient product. We are offering it in very low price. You can buy it with discount.',
        rating: 3,
        InStock: true,
      },
      {
        id: 1,
        name: 'random',
        image: 'demourl',
        price: 129,
        desc: 'best eye dropper for eyes',
        detailDesc:
          'It is a very convenient product. We are offering it in very low price. You can buy it with discount.',
        rating: 3,
        InStock: true,
      },
      {
        id: 1,
        name: 'random',
        image: 'demourl',
        price: 129,
        desc: 'best eye dropper for eyes',
        detailDesc:
          'It is a very convenient product. We are offering it in very low price. You can buy it with discount.',
        rating: 3,
        InStock: true,
      },
    ],
  };

  return (
    <Container fluid style={{ overflow: 'hidden' }}>
      <Row className="banner">
        <Col
          xs={12}
          lg
          className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        >
          <p className="fs-1">Welcome to HealthMedico</p>
          <p className="fs-6">Get any medical tool or medicine</p>
          <Link to="/products">
            <Button variant="outline-light">Visit Shop</Button>
          </Link>
        </Col>
        <Col xs={12} lg className="d-flex flex-column">
          <img className="img-fluid" src={shop} alt="shop" />
          <a
            className="credit text-center"
            href="https://www.freevector.com/prevention-of-contagion-while-shopping--30828#"
          >
            FreeVector.com
          </a>
        </Col>
      </Row>
      <Categories />
    </Container>
  );
};

export default Home;
