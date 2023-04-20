import React from "react";
import MainBanner from "../components/HomeComponents/MainBanner";
import TopProducts from "../components/HomeComponents/TopProducts";
import UniqueSellingPoints from "../components/HomeComponents/UniqueSellingPoints";
import Benefits from "../components/HomeComponents/Benefits";

const Home = () => {
  return (
    <>
      <MainBanner />
      <TopProducts />
      <UniqueSellingPoints />
      <Benefits />
    </>
  );
};

export default Home;
