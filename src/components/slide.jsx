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
    <div className="overflow-x-hidden">
      <div className="min-h-[150vh]">
        <div className="flex justify-center items-center flex-col">
          <img
            src={slider[0].imageLink[counter]}
            alt="nature"
            className=" w-full h-[100vh] object-cover"
          />
          <div className="carousel-caption relative bottom-[500px] left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-white text-start w-full text-[0.9rem] leading-[5]">
            <span>Welcome To TenTwenty Farms</span>
            <h1 className="caption-Header  flex justify-start items-start flex-col w-[600px] text-[3.8rem] word-spacing-[0.19rem] leading-[0.9] gap-[10px]">
              <span>From Our Farms</span>
              <span>To Your Hands</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="slider-counter-group flex justify-start items-center relative bottom-[900px] left-[140px] gap-[29px]">
        <div className="image-count-down border border-white p-[18px] h-[137px] w-[137px] ">
          <div className="image-container flex justify-center items-center w-full h-full border border-white">
            <img
              src={
                slider[0].imageLink[
                  slider[0].imageLink.length - 1 === counter ? 0 : counter + 1
                ]
              }
              alt=""
              className="w-full h-full object-cover cursor-pointer"
              onClick={autoSlide}
            />
            <span
              onClick={autoSlide}
              className="absolute text-center text-white cursor-pointer"
            >
              NEXT
            </span>
          </div>
        </div>

        <div className="Slide-Counter flex justify-center items-center text-[0.9rem] font-normal leading-[1.5] mx-[5px] text-white min-w-[100px] w-[170px]">
          <span>
            {counter.toString().length < 1
              ? counter === 3
                ? 0
                : counter + 1
              : `0${counter === 4 ? 0 : counter + 1}`}
          </span>
          <hr className="border-[0.4px] border-white rounded-full mx-[10px] w-full" />
          <span>
            {slider[0].imageLink.toString().length < 1
              ? slider[0].imageLink.length
              : `0${slider[0].imageLink.length}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
