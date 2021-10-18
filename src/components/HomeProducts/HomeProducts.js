import React from 'react';
import { Container } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const HomeProducts = ({ allProduct }) => {
  const { wellness, homeo, eye, dental } = allProduct;
  return (
    <div>
      <h3>Our Products</h3>
      <Container className="d-flex flex-wrap">
        {/* wellness products */}
        {wellness &&
          wellness
            .slice(0, 2)
            .map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}

        {/* homeo products */}
        {homeo &&
          homeo
            .slice(0, 2)
            .map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
        {/* eye products */}
        {eye &&
          eye
            .slice(0, 2)
            .map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}

        {/* dental products */}
        {dental &&
          dental
            .slice(0, 2)
            .map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
      </Container>
    </div>
  );
};

export default HomeProducts;
