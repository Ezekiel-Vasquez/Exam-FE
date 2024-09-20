import React from "react";
import Navbar from "./components/navbar";
import Slide from "./components/slide";
import "../src/app.css";
import { useState, useEffect } from "react";

const App = () => {
  const listOfSlider = [
    {
      id: 1,
      text: "Client 1",
      location: "Location 1",
      imageLink:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/bluebells,_oxfordshire.jpg?resize=1500%2C1000&ssl=1",
    },
    {
      id: 2,
      text: "Client 2",
      location: "Location 2",
      imageLink:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/taking-beautiful-photos-of-nature-2.jpg?w=1500&ssl=1",
    },
    {
      id: 3,
      text: "Client 3",
      location: "Location 3",
      imageLink:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/taking-beautiful-photos-of-nature-1.jpg?w=1500&ssl=1",
    },
  ];

  const slider = useState(listOfSlider);

  useEffect(() => {
    console.log(slider);
  }, []);

  return (
    <>
      <Navbar />
      <header>
        <Slide />
      </header>
      <main>
        <section className="sub-section">
          <div className="sub-header slide-right">
            <h1 className="text-center">Quality Products</h1>
          </div>
          <div className="sub-description slide-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
        <section className="sub-section">
          <div className="image-carousel-container">
            {slider[0].map((slide) => (
              <div key={slide.id} className="image-carousel-item">
                <img
                  src={slide.imageLink}
                  alt={slide.text}
                  className="card-image"
                />
                <h3>{slide.text}</h3>
                <p>{slide.location}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
