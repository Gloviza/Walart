import React from "react";
import Carousel from "react-bootstrap/Carousel";

const WalartSUR = () => {
  return (
    <>
      <div style={{ height: "100%", width: "100%", objectFit: "scale-down" }}>
        {/* style={{ height: "100%", width: "100%", objectFit: "scale-down" }} */}
        <Carousel prevLabel={""} nextLabel={""} interval={null} wrap={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/IMG-20211001-WA0028.jpg"
              alt="Walart SUR"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/SUR/Walart Pharmaceuticals VISUAL AID 01102021 16.jpg"
              alt="Walart SUR"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/SUR/Walart Pharmaceuticals VISUAL AID 01102021 17.jpg"
              alt="Walart SUR"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/SUR/Walart Pharmaceuticals VISUAL AID 01102021 18.jpg"
              alt="Walart SUR"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/SUR/Walart Pharmaceuticals VISUAL AID 01102021 19.jpg"
              alt="Walart SUR"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/SUR/Walart Pharmaceuticals VISUAL AID 01102021 20.jpg"
              alt="Walart SUR"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default WalartSUR;
