import { Container, Image } from 'react-bootstrap';

const Cart = ({ cart }) => {
  return (
    <Container>
      <h3>Your Product cart</h3>
      {cart.map((item) => (
        <div
          key={item.id}
          className="border border-3 my-3 d-flex align-items-center"
          style={{ maxWidth: '25rem' }}
        >
          <div>
            <Image
              className="bg-primary"
              src={item.image}
              alt={item.name}
              fluid
            />
          </div>
          <div className="bg-warning">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Cart;
