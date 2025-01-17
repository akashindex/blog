import React from "react";
import FeaturedProductSlider from "./Helper/FeaturedProductSlider";

const Featuredroducts = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          More from us
        </h1>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-300">
          View all Games
        </button>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto">
        {/* FeaturedProductsSlider */}
        <FeaturedProductSlider />
      </div>
    </div>
  );
};

export default Featuredroducts;
