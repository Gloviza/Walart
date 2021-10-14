import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const WalartGYN = () => {
  return (
    <>
      <div style={{ height: "100%", width: "100%", objectFit: "scale-down" }}>
        {/* style={{ height: "100%", width: "100%", objectFit: "scale-down" }} */}
        <Carousel prevLabel={""} nextLabel={""} interval={null} wrap={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/IMG-20211001-WA0028.jpg"
              alt="Walart GYN"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/GYN/Walart Pharmaceuticals VISUAL AID 01102021 7.jpg"
              alt="Walart GYN"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/GYN/Walart Pharmaceuticals VISUAL AID 01102021 8.jpg"
              alt="Walart GYN"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/GYN/Walart Pharmaceuticals VISUAL AID 01102021 9.jpg"
              alt="Walart GYN"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/GYN/Walart Pharmaceuticals VISUAL AID 01102021 10.jpg"
              alt="Walart GYN"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default WalartGYN;
