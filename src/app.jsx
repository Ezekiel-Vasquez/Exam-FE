import React from "react";
import Navbar from "./components/navbar";
import Slide from "./components/slide";
import ImageCarousel from "./components/image-carousel";
import "../src/app.css";

const App = () => {
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
          <ImageCarousel />
        </section>
      </main>
    </>
  );
};

export default App;
