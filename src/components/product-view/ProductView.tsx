import React from "react";
import arrow from "../../assets/product-view/arrow.svg";
import product from "../../assets/product-view/product.png";
import cart from "../../assets/product-view/cart.svg";

const ProductView = () => {
  return (
    <section>
      <div className="container mt-[120px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
          <h2 className="text-[#454545] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold">
            Популярные товары
          </h2>

          <button className="hidden md:flex w-[220px] h-[50px] border rounded-[100px] justify-center items-center gap-[23px] text-[#454545] text-[16px] font-medium cursor-pointer">
            Все товары <img src={arrow} alt="" />
          </button>
        </div>

        <div className="mt-[40px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[24px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-start px-4 py-6"
            >
              <img
                src={product}
                alt=""
                className="w-full max-w-[160px] md:max-w-[180px] lg:max-w-[200px] h-auto object-contain mx-auto mb-6"
              />

              <p className="text-[16px] text-[#454545] font-medium mb-4">
                Встраиваемый светильник Novotech
              </p>
              <div className="flex justify-between items-end w-full">
                <div className="flex flex-col">
                  <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                  <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
                </div>
                <button className="bg-[#454545] rounded-full p-2 cursor-pointer">
                  <img src={cart} alt="Cart" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <button className="w-full h-[50px] border rounded-[100px] flex justify-center items-center gap-[23px] text-[#454545] text-[16px] font-medium cursor-pointer">
            Все товары <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductView);
