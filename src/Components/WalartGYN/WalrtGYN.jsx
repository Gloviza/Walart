import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./WalartGYN.css";

const WalartGYN = () => {
  return (
    <>
      <div className="background">
        <div>
          {/* style={{ display: "block", height: "100%", width: "100%" }} */}
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
                alt="Walart GYN"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousal-image"
                src="images/GYN/Walart Pharmaceuticals VISUAL AID 01102021 7.jpg"
                alt="Walart GYN"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousal-image"
                src="images/GYN/Walart Pharmaceuticals VISUAL AID 01102021 8.jpg"
                alt="Walart GYN"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousal-image"
                src="images/GYN/Walart Pharmaceuticals VISUAL AID 01102021 9.jpg"
                alt="Walart GYN"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block vw-100 vh-100"
                src="images/GYN/Walart Pharmaceuticals VISUAL AID 01102021 10.jpg"
                alt="Walart GYN"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default WalartGYN;
