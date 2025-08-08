import React from "react";
import productDetailImage from "../../assets/productDetail.png";
import shopIcon from "../../assets/shop.svg";
import likeIcon from "../../assets/like.svg";
import ratingIcon from "../../assets/rating.svg";

const ProductDetail = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between mt-25.5">
          <div className="w-[49%]">
            <img src={productDetailImage} alt="" />
          </div>
          <div className="w-[46%]">
            <h2 className="text-5xl font-bold">Встраиваемый светильник Novotech</h2>
            <div className="flex justify-between mt-9.5 pb-10 border-b-1">
              <div className="flex gap-8">
                <div>
                  <del className="text-xs text-[#9F9F9F]">7 000₽</del>
                  <p className="text-xl font-bold">6 399₽</p>
                </div>
                <button className="bg-[#454545] text-white flex gap-3 py-3.5 px-14.5 rounded-full items-center">
                  <div>
                    <img src={shopIcon} alt="" />
                  </div>
                  <p className="text-[16px]">В корзину</p>
                </button>
              </div>
              <div className="flex gap-5">
                <button className="border p-[15px] rounded-full">
                  <img src={likeIcon} alt="" />
                </button>
                <button className="border p-[15px] rounded-full">
                  <img src={ratingIcon} alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[45%]">
                <div className="flex justify-between mt-10 pb-[17px] border-b-1">
                  <p className="text-[#454545] text-sm">Артикул</p>
                  <p className="text-[16px]">LED LAMPS 81284</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1">
                  <p className="text-[#454545] text-sm">Площадь освещения М²</p>
                  <p className="text-[16px]">46.67</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1">
                  <p className="text-[#454545] text-sm">Габариты, мм</p>
                  <p className="text-[16px]">105х106х40</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1">
                  <p className="text-[#454545] text-sm">Степень защиты</p>
                  <p className="text-[16px]">IP67</p>
                </div>
              </div>
              <div className="w-[45%]">
                <div className="flex justify-between mt-10 pb-[17px] border-b-1">
                  <p className="text-[#454545] text-sm">Мощность, Вт</p>
                  <p className="text-[16px]">16</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1">
                  <p className="text-[#454545] text-sm">Цвет</p>
                  <p className="text-[16px]">Золото</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1">
                  <p className="text-[#454545] text-sm">Масса, кг</p>
                  <p className="text-[16px]">0,67 кг</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1">
                  <p className="text-[#454545] text-sm">Напряжение, Вт</p>
                  <p className="text-[16px]">220</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);