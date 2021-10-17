import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./WalartPediatric.css";

const WalartPediatric = () => {
  return (
    <div
      id="Pediatric"
      style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
    >
      {/* style={{ height: "100%", width: "100%", objectFit: "scale-down" }} */}
      <Carousel
        prevLabel={""}
        nextLabel={""}
        interval={null}
        wrap={false}
        touch={false}
      >
        <Carousel.Item>
          <img
            className="carousal-image"
            src="images/Walart Pharmaceuticals VISUAL AID coverpage.jpg"
            alt="Walart Pediatric"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousal-image"
            src="images/Pediatrique/Walart Pharmaceuticals VISUAL AID 01102021 2.jpg"
            alt="Walart Pediatric"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousal-image"
            src="images/Pediatrique/Walart Pharmaceuticals VISUAL AID 01102021 3.jpg"
            alt="Walart Pediatric"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousal-image"
            src="images/Pediatrique/Walart Pharmaceuticals VISUAL AID 01102021 4.jpg"
            alt="Walart Pediatric"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousal-image"
            src="images/Pediatrique/Walart Pharmaceuticals VISUAL AID 01102021 5.jpg"
            alt="Walart Pediatric"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousal-image"
            src="images/Pediatrique/Walart Pharmaceuticals VISUAL AID 01102021 6.jpg"
            alt="Walart Pediatric"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WalartPediatric;
