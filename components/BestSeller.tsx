import React from "react";
import ProductCard from "./Helper/ProductCard";

const BestSeller = () => {
  return (
    <div className="bg-gray-900 pt-[4rem] pb-[3rem]">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Best Seller
        </h1>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-300">
          View all product
        </button>
      </div>
      <div className="grid grid-cols-1 mt-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto">
        <div 
           data-aos="fade-left"
           data-aos-anchor-placement="top-center"
        >
          <ProductCard
            title="Gun of Wars"
            actualPrice="$49.99"
            discountPrice="$35.99"
            category="Shooting"
            image="/images/g3.jpg"
          />
        </div>
        <div
           data-aos="fade-left"
           data-aos-delay="250"
           data-aos-anchor-placement="top-center">
          <ProductCard
            title="House of Fire"
            actualPrice="$45.99"
            discountPrice="$30.99"
            category="Action"
            image="/images/g4.jpg"
          />
        </div>
        <div
           data-aos="fade-left"
           data-aos-delay="500"
           data-aos-anchor-placement="top-center">
          <ProductCard
            title="Assassin's Creed"
            actualPrice="$69.99"
            discountPrice="$55.99"
            category="Action"
            image="/images/g5.jpg"
          />
        </div>
        <div
           data-aos="fade-left"
           data-aos-delay="750"
           data-aos-anchor-placement="top-center">
          <ProductCard
            title="Super Cars 2024 "
            actualPrice="$79.99"
            discountPrice="$65.99"
            category="Action"
            image="/images/g7.jpg"
          />
        </div>
        <div
           data-aos="fade-left"
           data-aos-delay="1000"
           data-aos-anchor-placement="top-center">
          <ProductCard
            title="Space Fight "
            actualPrice="$29.99"
            discountPrice="$15.99"
            category="Action"
            image="/images/g6.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
