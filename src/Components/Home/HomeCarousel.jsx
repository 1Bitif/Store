import React from "react";
import Img1 from "../../Assets/Men.jpg";
import Img2 from "../../Assets/women.jpg";
import Img3 from "../../Assets/carouselImg3.png"
import Img4 from "../../Assets/bg_1.jpg"
import Img5 from "../../Assets/bg_2.jpg"
import Img6 from "../../Assets/bg_3.jpg"
import Img7 from "../../Assets/bg_4.jpg"

import Img9 from "../../Assets/bg_6.jpg"
import "./Carousel.css";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide main-hero" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item  ">
        {/* <img src={Img8} className="d-block w-100" alt="Men Collection "/> */}
        <img src={Img5} className="card-img" alt="Background" height='550px' />
        <div className="carousel-caption text-start" >
          <h5>Men Collection</h5>
          <p>New Arrival</p>
        </div>
      </div>
      <div className="carousel-item active">
        <img src={Img4} className="card-img "  alt="Women Collection "/>
        <div className="carousel-caption text-start">
          <h5>Women Collection 2023</h5>
          <p>New Arrival</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Img7} className="d-block w-100" alt="T-Shirt"/>
        <div className="carousel-caption text-start">
          <h5>T-Shirt Collection</h5>
          <p>New Arrival</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default Carousel;
