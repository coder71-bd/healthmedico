import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

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
    <Container>
      <h3 className="text-center my-3">Your Cart</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {/* added products */}
        <div className="me-lg-3">
          {cart.map((item) => {
            const { name, image, short_desc, price, id, quantity } = item;
            return (
              <div
                key={id}
                className="d-flex align-items-center border my-3 rounded-3 pe-3 shadow"
                style={{ maxWidth: 700, position: 'relative' }}
              >
                {/* item image */}
                <div style={{ maxWidth: 500 }}>
                  <img className="img-fluid rounded-3" src={image} alt={name} />
                </div>

                {/* item info */}
                <div className="ms-3">
                  <div className="d-flex justify-content-between">
                    <div style={{ maxWidth: '95%' }}>
                      <p className="mb-0">{name}</p>
                      <p className="mt-0">{short_desc}</p>
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
                  <div className="d-flex">
                    <p className="fst-italic fw-bold">${price}</p>
                    <p className="ms-5">Quantity: {quantity}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* payment */}
        <div className="mt-3 ms-lg-3" style={{ minWidth: 400 }}>
          <Table striped bordered hover>
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
        </div>
      </div>
    </Container>
  );
};

export default Cart;
