import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
const Shipping = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckedOne = (e) => {
    setIsChecked(!isChecked);
    e.target.setAttribute('checked', isChecked);
  };

  const handleCheckedTwo = (e) => {
    e.target.setAttribute('checked', !isChecked);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <div>
        {/* delivery */}
        <div>
          <h3 className="text-center mb-3">Choose your delivery opiton</h3>
          {/* home delivery */}
          <div className="d-flex justify-content-between align-items-center border shadow-lg mb-3 px-5">
            <div>
              <p className="mb-2 fs-3">Home</p>
              <address>
                <p>+880 123 456</p>
              </address>
            </div>
            <input
              type="radio"
              name="select-option"
              style={{ width: 20, height: 20 }}
              onChange={handleCheckedOne}
            />
          </div>

          {/* office delivery */}
          <div className="d-flex justify-content-between align-items-center border shadow-lg mb-3 px-5">
            <div>
              <p className="mb-2 fs-3">Office</p>
              <address>
                <p>+880 134 789</p>
              </address>
            </div>
            <input
              type="radio"
              name="select-option"
              style={{ width: 20, height: 20 }}
              onChange={handleCheckedTwo}
              defaultChecked
            />
          </div>
        </div>

        {/* payment */}
        <div className="my-5">
          <h3 className="text-center">Give payment info</h3>

          {/* payment form */}
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="111 222 3333"
            />
            <label htmlFor="floatingInputCustom">Card Number</label>
          </Form.Floating>

          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
        </div>

        <Button variabnt="primary" className="w-100">
          Track your order
        </Button>
      </div>
    </div>
  );
};

export default Shipping;
