import {
  faPlusSquare,
  faStar,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProducts from '../../hooks/useProducts';

const SingleProductDetails = ({ handleCart }) => {
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

  // rating
  const showRating = (rate = 0) => {
    const ratingArr = [];
    for (let i = 0; i < rate; i++) {
      ratingArr.push(
        <FontAwesomeIcon className="text-warning" key={i} icon={faStar} />
      );
    }
    for (let i = rate; i <= 5; i++) {
      ratingArr.push(
        <FontAwesomeIcon
          className="text-warning"
          key={i}
          icon={faStarHalfAlt}
        />
      );
    }
    return ratingArr;
  };

  return (
    <Container
      className=" d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <Row>
        {/* product info with image*/}
        <Col lg={6} xs={12} style={{ maxWidth: 1000 }}>
          {/* product name and rating */}
          <div className="d-flex justify-content-between align-items-center fs-5">
            <h2>{detailProduct?.name}</h2>
            <p>{showRating(detailProduct?.rating)}</p>
          </div>

          {/* product image */}
          <div className="d-flex justify-content-center">
            <img
              style={{ width: '100%', maxWidth: 600, maxHeight: 300 }}
              className="my-2 rounded-3"
              src={detailProduct?.image}
              alt={detailProduct?.name}
            />
          </div>

          {/* price and add to cart button */}
          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-bold text-primary fs-5">${detailProduct?.price}</p>
            <Button variant="outline-info">
              <FontAwesomeIcon icon={faPlusSquare} />
              <span className="ms-2" onClick={() => handleCart(itemId)}>
                add to cart
              </span>
            </Button>
          </div>
        </Col>

        {/* product detail */}
        <Col lg={6} xs={12} style={{ maxWidth: 1000 }}>
          <div className="w-75 mx-auto">
            <p className="fs-3">Product Detail</p>
            <p className="mt-3">{detailProduct?.detail_desc}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProductDetails;
