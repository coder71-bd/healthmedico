import { Button } from 'react-bootstrap';
const Shipping = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <div>
        <div>
          <div>
            {/* home delivery */}
            <div className="d-flex border border-secondary shadow mb-3">
              <div>
                <p className="mb-2 fs-3">Home</p>
                <address>
                  <p>+880 123 456</p>
                </address>
              </div>
              <input type="radio" style={{ width: 20, height: 20 }} checked />
            </div>

            {/* office delivery */}
            <div className="d-flex border border-secondary shadow mb-3">
              <div>
                <p className="mb-2 fs-3">Office</p>
                <address>
                  <p>+880 134 789</p>
                </address>
              </div>
              <input type="radio" style={{ width: 20, height: 20 }} />
            </div>
          </div>
        </div>
        <Button variabnt="primary">Track your order</Button>
      </div>
    </div>
  );
};

export default Shipping;
