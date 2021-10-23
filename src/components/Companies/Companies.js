import React from 'react';
import { Carousel } from 'react-bootstrap';

const Companies = () => {
  return (
    <Carousel className="mx-auto" style={{ maxWidth: 600 }}>
      {/* item 1 */}
      <Carousel.Item style={{ maxWidth: 600 }}>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Logo_of_Himalaya_-_The_Drug_Company.svg/1200px-Logo_of_Himalaya_-_The_Drug_Company.svg.png"
          alt="himalaya"
          style={{ maxHeight: 337 }}
        />
      </Carousel.Item>

      {/* item 2 */}
      <Carousel.Item style={{ maxWidth: 600 }}>
        <img
          className="d-block w-100"
          src="https://www.theindependentbd.com/assets/news_images/Beximco-Pharma3.jpg"
          alt="Beximco pharma"
          style={{ maxHeight: 337 }}
        />
      </Carousel.Item>

      {/* item 3 */}
      <Carousel.Item style={{ maxWidth: 600 }}>
        <img
          className="d-block w-100"
          src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i2FkG7wPwgaU/v1/1000x-1.jpg"
          alt="pfizer"
          style={{ maxHeight: 337 }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Companies;
