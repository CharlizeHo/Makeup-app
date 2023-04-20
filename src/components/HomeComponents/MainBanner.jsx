import React from "react";
import bannerImg from "../../../public/banner-img.jpg";
import ButtonLink from "../ButtonLinks";

const MainBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-12 py-6">
      {/* Container */}
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center lg:justify-start h-banner">
        {/* Layout */}
        <div className="sm:w-[40%] md:w-[40%]">
          <h1 className="text-3xl md:text-4xl mb-6 font-semibold">
            The Makeup E-commerce project
          </h1>
          <p className="mb-6">
            This project is built with data from a MakeUp API using Axios,
            Tailwind CSS, ReactJS, PropTypes, React Context API and React
            Router.
          </p>
          <p className="text-sm mb-6">
            The new lineup you'll swear by for dullness, dryness and breakouts.
          </p>
          <ButtonLink path="/about" text="See More" />
        </div>
        <span className="md:ml-6">
          <img
            src={bannerImg}
            alt="beauty products"
            className="object-cover md:w-[650px] sm:h-[490px]"
          />
        </span>
      </div>
    </div>
  );
};

export default MainBanner;
