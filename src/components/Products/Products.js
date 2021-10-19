import { Container } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = ({ allProduct, handleCart, handleDetailProduct }) => {
  const { wellness, homeo, eye, dental } = allProduct;
  return (
    <div>
      <Container>
        {/* wellness Products */}
        <div>
          <h3 className="text-center">wellness Products</h3>

          <div className="d-flex flex-wrap justify-content-center">
            {wellness &&
              wellness.map((product) => (
                <SingleProduct
                  key={product.id}
                  product={product}
                  handleCart={handleCart}
                  handleDetailProduct={handleDetailProduct}
                />
              ))}
          </div>
        </div>

        {/* homeo products */}
        <div>
          <h3 className="text-center">homeo Products</h3>

          <div className="d-flex flex-wrap justify-content-center">
            {homeo &&
              homeo.map((product) => (
                <SingleProduct
                  key={product.id}
                  product={product}
                  handleCart={handleCart}
                  handleDetailProduct={handleDetailProduct}
                />
              ))}
          </div>
        </div>

        {/* eye products */}
        <div>
          <h3 className="text-center">eye Products</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {eye &&
              eye.map((product) => (
                <SingleProduct
                  key={product.id}
                  product={product}
                  handleCart={handleCart}
                  handleDetailProduct={handleDetailProduct}
                />
              ))}
          </div>
        </div>

        {/* dental products */}
        <div>
          <h3 className="text-center">dental Products</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {dental &&
              dental.map((product) => (
                <SingleProduct
                  key={product.id}
                  product={product}
                  handleCart={handleCart}
                  handleDetailProduct={handleDetailProduct}
                />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
