import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../assets/css/image-carousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";

const ImageCarousel = () => {
  const listOfSlider = [
    {
      id: 1,
      text: "Client 1",
      location: "Location 1",
      imageLink:
        "https://img.freepik.com/premium-photo/wallpaper-illustration-by-ai_1037184-131426.jpg?w=740",
    },
    {
      id: 2,
      text: "Client 2",
      location: "Location 2",
      imageLink:
        "https://img.freepik.com/free-photo/nature-landscape-with-vegetation-flora_23-2150859683.jpg?t=st=1726832299~exp=1726835899~hmac=938837ee0d2bf205811dffa2db8d56f75e34c2109516fea210f4dfb532097898&w=740",
    },
    {
      id: 3,
      text: "Client 3",
      location: "Location 3",
      imageLink:
        "https://img.freepik.com/premium-photo/wallpaper-illustration-by-ai_1037184-131426.jpg?w=740",
    },
    {
      id: 4,
      text: "Client 4",
      location: "Location 4",
      imageLink:
        "https://img.freepik.com/free-photo/nature-landscape-with-vegetation-flora_23-2150859683.jpg?t=st=1726832299~exp=1726835899~hmac=938837ee0d2bf205811dffa2db8d56f75e34c2109516fea210f4dfb532097898&w=740",
    },

    {
      id: 5,
      text: "Client 5",
      location: "Location 5",
      imageLink:
        "https://img.freepik.com/premium-photo/mountains-background-night-view_1165970-531.jpg",
    },
    {
      id: 6,
      text: "Client 6",
      location: "Location 6",
      imageLink:
        "https://img.freepik.com/premium-photo/wallpaper-illustration-by-ai_1037184-131426.jpg?w=740",
    },
    {
      id: 7,
      text: "Client 7",
      location: "Location 7",
      imageLink:
        "https://img.freepik.com/premium-photo/wallpaper-illustration-by-ai_1037184-131426.jpg?w=740",
    },
  ];

  const slider = useState(listOfSlider);
  const autoMove = () => {
    const swiper = document.querySelector(".swiper_container").swiper;
    setInterval(() => {
      swiper.slideNext();
    }, 3000);
  };

  useEffect(() => {
    autoMove();
  });

  return (
    <Swiper
      className="swiper_container relative bottom-[620px] h-[500px] w-[50%] "
      effect={"coverflowEffect"}
      spaceBetween={-10}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
    >
      <SwiperSlide className="image-carousel-item flex items-center justify-center flex-col max-w-custom">
        <img src={slider[0][0].imageLink} alt="Client 1" className="card-img" />
        <h3 className="text-xl mt-2.5">{slider[0][0].text}</h3>
        <p className="text-base mt-2.5">{slider[0][0].location}</p>
      </SwiperSlide>
      <SwiperSlide className="image-carousel-item flex items-center justify-center flex-col max-w-custom">
        <img src={slider[0][1].imageLink} alt="Client 2" className="card-img" />
        <h3 className="text-xl mt-2.5">{slider[0][1].text}</h3>
        <p className="text-base mt-2.5">{slider[0][1].location}</p>
      </SwiperSlide>
      <SwiperSlide className="image-carousel-item flex items-center justify-center flex-col max-w-custom">
        <img src={slider[0][2].imageLink} alt="Client 3" className="card-img" />
        <h3 className="text-xl mt-2.5">{slider[0][2].text}</h3>
        <p className="text-base mt-2.5">{slider[0][2].location}</p>
      </SwiperSlide>
      <SwiperSlide className="image-carousel-item flex items-center justify-center flex-col max-w-custom">
        <img src={slider[0][3].imageLink} alt="Client 4" className="card-img" />
        <h3 className="text-xl mt-2.5">{slider[0][3].text}</h3>
        <p className="text-base mt-2.5">{slider[0][3].location}</p>
      </SwiperSlide>
      <SwiperSlide className="image-carousel-item flex items-center justify-center flex-col max-w-custom">
        <img src={slider[0][4].imageLink} alt="Client 5" className="card-img" />
        <h3 className="text-xl mt-2.5">{slider[0][4].text}</h3>
        <p className="text-base mt-2.5">{slider[0][4].location}</p>
      </SwiperSlide>
      <SwiperSlide className="image-carousel-item flex items-center justify-center flex-col max-w-custom">
        <img src={slider[0][5].imageLink} alt="Client 6" className="card-img" />
        <h3 className="text-xl mt-2.5">{slider[0][5].text}</h3>
        <p className="text-base mt-2.5">{slider[0][5].location}</p>
      </SwiperSlide>
      <SwiperSlide className="image-carousel-item flex items-center justify-center flex-col max-w-custom">
        <img src={slider[0][6].imageLink} alt="Client 7" className="card-img" />
        <h3 className="text-xl mt-2.5">{slider[0][6].text}</h3>
        <p className="text-base mt-2.5">{slider[0][6].location}</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
