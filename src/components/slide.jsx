import React from "react";
import { useState, useEffect } from "react";
import "../assets/css/slide.css";

const Slide = () => {
  const listOfSlider = {
    imageLink: [
      "https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg?t=st=1726831928~exp=1726835528~hmac=21b5cf3fdcdd564f1e2695eb18631e6703fd71b614c351c8478c50d60f3a083b&w=740",

      "https://img.freepik.com/premium-photo/wallpaper-illustration-by-ai_1037184-131426.jpg?w=740",

      "https://img.freepik.com/premium-photo/mountains-background-night-view_1165970-531.jpg",

      "https://img.freepik.com/free-photo/nature-landscape-with-vegetation-flora_23-2150859683.jpg?t=st=1726832299~exp=1726835899~hmac=938837ee0d2bf205811dffa2db8d56f75e34c2109516fea210f4dfb532097898&w=740",
    ],
  };

  const slider = useState(listOfSlider);
  const [counter, setCounter] = useState(0);

  const autoSlide = () => {
    if (counter < slider[0].imageLink.length - 1) {
      animationEntry();
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const animationEntry = () => {
    const carouselItem = document.querySelector(".image-count-down");
    carouselItem.classList.add("loading-process");
    setTimeout(() => {
      carouselItem.classList.remove("loading-process");
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <div className="header-section-carousel">
        <div className="carousel-item">
          <img src={slider[0].imageLink[counter]} alt="nature" />
          <div className="carousel-caption">
            <span>Welcome To TenTwenty Farms</span>
            <h1 className="caption-Header">
              <span>From Our Farms</span>
              <span>To Your Hands</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="slider-counter-group">
        <div className="image-count-down">
          <div className="image-container">
            <img
              src={
                slider[0].imageLink[
                  slider[0].imageLink.length - 1 === counter ? 0 : counter + 1
                ]
              }
              alt=""
              onClick={autoSlide}
            />
            <span onClick={autoSlide}>NEXT</span>
          </div>
        </div>

        <div className="Slide-Counter">
          <span>
            {counter.toString().length < 1
              ? counter === 3
                ? 0
                : counter + 1
              : `0${counter === 4 ? 0 : counter + 1}`}
          </span>
          <hr />
          <span>
            {slider[0].imageLink.toString().length < 1
              ? slider[0].imageLink.length
              : `0${slider[0].imageLink.length}`}
          </span>
        </div>
      </div>
    </>
  );
};

export default Slide;
