import React from "react";
import Slider from "react-slick";
import "../../assets/css/style.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="img_content">
          <img
            src={require("../../assets/img/Transperth_Volgren_CR228L_bodied_Volvo_B7RLE.jpg")}
            alt="avatar"
            className=" rounded"
          />
        </p>
      </div>
      <div>
        <p className="img_content">
          <img
            src={require("../../assets/img/banner-alliance_partner_640x500.jpg")}
            alt="avatar"
            className=" rounded"
          />
        </p>
      </div>
      <div>
        <p className="img_content">
          <img
            src={require("../../assets/img/Transperth_Volgren_CR228L_bodied_Volvo_B7RLE.jpg")}
            alt="avatar"
            className=" rounded"
          />
        </p>
      </div>
      <div>
        <p className="img_content">
          <img
            src={require("../../assets/img/banner-alliance_partner_640x500.jpg")}
            alt="avatar"
            className=" rounded"
          />
        </p>
      </div>
    </Slider>
  );
};
export default TestimonialSlider;
