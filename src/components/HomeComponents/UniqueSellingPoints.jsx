import React from "react";

import bannerImg from "../../../public/banner2-img.jpg";
import ButtonLink from "../ButtonLinks";

const UniqueSellingPoint = () => (
  <div className="bg-rose-300/40 mb-20 mx-6">
    <div className="container flex flex-col md:flex-row items-center gap-14 px-4 mx-auto pt-16 pb-16 ">
      <div className=" md:mb-0">
        <img src={bannerImg} alt="Beauty products" width={700} height={300} />
      </div>
      <div>
        <h2 className="text-4xl font-semibold mb-6">
          Luxury Quality and Professionalism that you deserve
        </h2>
        <p className="text-sm mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          expedita saepe quae mollitia? Quam odio accusamus facere!
        </p>
        <p className="text-sm mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          expedita saepe quae mollitia? Quam odio accusamus facere deleniti
          nostrum.
        </p>
        <ButtonLink path="/about" text="See More" className="bg-red-400 hover:bg-red-500/80" />
      </div>
    </div>
  </div>
);

export default UniqueSellingPoint;
