import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProducts from '../../hooks/useProducts';

const SingleProductDetails = () => {
  const [allProduct] = useProducts();
  const { itemId } = useParams();

  // make a flat array of the fake json data
  const makeFlatArr = () => {
    const arr = [];

    for (const product in allProduct) {
      arr.push(allProduct[product]);
    }

    return arr.flat();
  };
  const detailProduct = makeFlatArr().find((pd) => pd.id === itemId);

  const { name, image, rating, price, detail_desc } = detailProduct;

  return (
    <Container
      className=" d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <Row>
        {/* product info with image*/}
        <Col lg={6} xs={12} className="d-flex justify-content-center">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="d-3">{name}</h2>
              <h2>{rating}</h2>
            </div>
            <div className="bg-primary" style={{ maxWidth: 700 }}>
              <img className="my-3 rounded-3 w-100" src={image} alt={name} />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="fw-bold">${price}</p>
              <Button variant="outline-info">
                <FontAwesomeIcon icon={faPlusSquare} />
                <span className="ms-2">add to cart</span>
              </Button>
            </div>
          </div>
        </Col>

        {/* product detail */}
        <Col lg={6} xs={12}>
          <div className="w-75 mx-auto">
            <p className="fs-3">Product Detail</p>
            <p className="mt-3">{detail_desc}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProductDetails;
