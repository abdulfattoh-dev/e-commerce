import React from "react";
import arrowl from "../../assets/product-view/arrow-left.svg";
import arrowr from "../../assets/product-view/arrow-right.svg";
import brand from "../../assets/product-view/brand.png";

const Brands = () => {
  return (
    <section>
      <div className="container mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h2 className="text-[#454545] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-center sm:text-left">
            Только проверенные бренды
          </h2>
          <div className="flex items-center gap-2.5 hidden sm:flex">
            <img
              src={arrowl}
              alt="arrow left"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <img
              src={arrowr}
              alt="arrow right"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>

        <div className="mt-[32px] sm:mt-[48px] md:mt-[60px] lg:mt-[72px] flex items-center gap-4 sm:gap-5 overflow-auto custom-scroll">
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Brands);
