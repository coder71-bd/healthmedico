import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Cart.css';

const Cart = ({ cart, totalItem }) => {
  const history = useHistory();

  // calculate the total price
  const calculateTotal = () => {
    const total = cart.reduce(
      (prev, curr) => curr.quantity * curr.price + prev,
      0
    );
    return total;
  };

  const handlePlaceOrder = () => {
    history.push('/shipping');
  };

  return (
    <Container
      className=" d-flex flex-column justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <h3 className="text-center my-3">Your Cart</h3>
      <Row>
        {/* added products */}

        <Col className="me-lg-3">
          {cart.map((item) => {
            const { name, image, price, id, quantity } = item;
            return (
              <div
                key={id}
                className="cart-container d-flex mx-1 position-relative align-items-center border my-3 rounded-3 pe-3 shadow-lg"
              >
                {/* item image */}
                <div>
                  <img
                    className="img-fluid rounded-3"
                    src={image}
                    alt={name}
                    style={{ maxHeight: 300 }}
                  />
                </div>

                {/* item info */}
                <div className="ms-3">
                  <div className="d-flex justify-content-between">
                    <div style={{ maxWidth: '95%' }}>
                      <p className="text-primary fw-bold">{name}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="fs-3 text-primary"
                        style={{
                          position: 'absolute',
                          right: 2,
                          top: 2,
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <p className="fst-italic fw-bold">${price}</p>
                    <p className="ms-5">Quantity: {quantity}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>

        {/* payment */}
        <Col className="mt-3 ms-lg-3">
          <Table striped bordered hover className="w-100">
            <tbody>
              {/* item quantity */}
              <tr>
                <td>Total Items</td>
                <td>{totalItem}</td>
              </tr>

              {/* price */}
              <tr>
                <td>Price</td>
                <td>${calculateTotal()}</td>
              </tr>

              {/* discount */}
              <tr>
                <td>Discount</td>
                <td>${0}</td>
              </tr>

              {/* shipping */}
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>

              {/* Total Price  */}
              <tr>
                <td>Total Price</td>
                <td>${calculateTotal()}</td>
              </tr>
            </tbody>
          </Table>
          <div>
            {totalItem > 0 ? (
              <Button
                variant="info"
                className="w-100"
                onClick={handlePlaceOrder}
              >
                PlaceOrder
              </Button>
            ) : (
              <Button variant="info" className="w-100" disabled>
                Nothing to Order
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
