import React from "react";
import HeroSection from "./HeroSection";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mt-4 underline">
        RANDOM PRODUCT
      </h1>
      <HeroSection />
      <h1 className="text-2xl text-center font-bold mt-4 underline">
        ALL PRODUCTS
      </h1>
      <Card />
    </>
  );
};

export default Home;
