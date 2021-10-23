import {
  faCartArrowDown,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SingleProduct = ({ product, handleCart }) => {
  const { id, name, image, price, short_desc, inStock } = product;
  const history = useHistory();

  const handleDetailRoute = () => {
    history.push(`/single-product/${id}`);
  };

  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img
        variant="top"
        src={image}
        className="p-1"
        style={{ height: 207 }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{short_desc}</Card.Text>
        <Card.Text className="text-primary fw-bold">${price}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="info"
            className="text-white"
            onClick={handleDetailRoute}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            <span className="ps-1">See Detail</span>
          </Button>

          {inStock ? (
            <Button variant="primary" onClick={() => handleCart(id)}>
              <FontAwesomeIcon icon={faCartArrowDown} />
              <span className="ps-2">Add to Cart</span>
            </Button>
          ) : (
            <Button variant="primary" disabled>
              <FontAwesomeIcon icon={faCartArrowDown} />
              <span className="ps-2">Add to Cart</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
