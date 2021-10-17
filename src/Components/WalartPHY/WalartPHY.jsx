import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./WalartPHY.css";

const WalartPHY = () => {
  return (
    <>
      <div
        id="PHY"
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
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousal-image"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 11.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousal-image"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 12.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousal-image"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 13.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousal-image"
              src="images/PHY/Walart Pharmaceuticals VISUAL AID 01102021 14.jpg"
              alt="Walart PHY"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousal-image"
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
