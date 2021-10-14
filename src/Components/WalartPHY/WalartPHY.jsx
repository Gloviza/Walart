import React from "react";
import Carousel from "react-bootstrap/Carousel";
const WalartPHY = () => {
  return (
    <>
      <div style={{ height: "100%", width: "100%", objectFit: "scale-down" }}>
        {/* style={{ height: "100%", width: "100%", objectFit: "scale-down" }} */}
        <Carousel prevLabel={""} nextLabel={""} interval={null} wrap={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/IMG-20211001-WA0028.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 11.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 12.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 13.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 14.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 15.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default WalartPHY;
