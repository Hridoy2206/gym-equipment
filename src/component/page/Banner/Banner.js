import React from "react";
import carousel_1 from "../../../image/banner-image.webp";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-title container">
        <div>
          <p>
            <span className="get-in">GET IN </span>
            <span className="shape">SHAPE </span>{" "}
            <span className="healthy">& BE HEALTHY</span>
          </p>
          <button className="banner-btn">Learn more</button>
        </div>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel_1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
