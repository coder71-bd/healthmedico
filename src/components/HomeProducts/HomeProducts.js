import React from 'react';
import { Container } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const HomeProducts = ({ allProduct, handleCart }) => {
  const { wellness, homeo, eye, dental } = allProduct;
  return (
    <div>
      <h3 className="d-1 text-center my-4 text-primary">Our Products</h3>
      <Container className="d-flex flex-wrap justify-content-center">
        {/* wellness products */}
        {wellness &&
          wellness
            .slice(0, 2)
            .map((product) => (
              <SingleProduct
                key={product.id}
                product={product}
                handleCart={handleCart}
              />
            ))}

        {/* homeo products */}
        {homeo &&
          homeo
            .slice(0, 2)
            .map((product) => (
              <SingleProduct
                key={product.id}
                product={product}
                handleCart={handleCart}
              />
            ))}
        {/* eye products */}
        {eye &&
          eye
            .slice(0, 2)
            .map((product) => (
              <SingleProduct
                key={product.id}
                product={product}
                handleCart={handleCart}
              />
            ))}

        {/* dental products */}
        {dental &&
          dental
            .slice(0, 2)
            .map((product) => (
              <SingleProduct
                key={product.id}
                product={product}
                handleCart={handleCart}
              />
            ))}
      </Container>
    </div>
  );
};

export default HomeProducts;
