import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shop from '../../images/banner/shop.png';
import Categories from '../Categories/Categories';
import Companies from '../Companies/Companies';
import HomeProducts from '../HomeProducts/HomeProducts';
import './Home.css';

const Home = ({ allProduct, handleCart }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* banner */}
      <Row className="banner">
        {/* banner description */}
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

        {/* banner image */}
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

      {/* categories */}
      <Categories />

      <HomeProducts allProduct={allProduct} handleCart={handleCart} />

      {/* companies */}
      <div className="my-3 w-75 mx-auto">
        <h3 className="text-center text-primary my-3">Our Partners</h3>
        <Companies />
      </div>
    </div>
  );
};

export default Home;
