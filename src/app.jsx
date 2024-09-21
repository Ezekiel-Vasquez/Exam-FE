import React from "react";
import Navbar from "./components/navbar";
import Slide from "./components/slide";
import ImageCarousel from "./components/image-carousel";
import "../src/app.css";

const App = () => {
  return (
    <>
      <Navbar className="w-full" />
      <header>
        <Slide className="w-full" />
      </header>
      <main className="flex justify-center items-center flex-col">
        <section className="sub-section relative bottom-[620px] h-[300px] w-[600px] ">
          <div className="text-3xl">
            <h1 className="text-center">Quality Products</h1>
          </div>
          <div className="text-lg text-center text-[#948e8e] font-normal mt-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
      </main>
      <ImageCarousel className="w-full" />
    </>
  );
};

export default App;
