import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selections from "./components/Selections";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import SocialButton from "./components/SocialButton";

const App = () => {
  return (
    <>
    <div className="relative">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selections />
      <Carousel />
      <Footer />
      <div className="fixed top-40 left-5 z-20">
            <SocialButton />
          </div>
          </div>
    </>
  );
};

export default App;
