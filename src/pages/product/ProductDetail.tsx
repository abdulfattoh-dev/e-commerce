import React from "react";
import productDetailImage from "../../assets/productDetail.png";
import shopIcon from "../../assets/shop.svg";
import likeIcon from "../../assets/like.svg";
import ratingIcon from "../../assets/rating.svg";
import productSwiper from "../../assets/productSwiper.png";
import { NavLink, Outlet } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between mt-25.5 max-lg:flex-col">
          <div className="w-[49%] max-lg:w-full flex max-lg:flex-col-reverse gap-[41px] max-sm:gap-[28px] items-center border-1 border-[#9F9F9F]">
            <div className="w-[58px] max-sm:w-[262px] my-12 ml-6.5 flex flex-col max-lg:w-full max-lg:flex-row max-lg:justify-center gap-[17px] max-lg:gap-15 max-sm:gap-[10px]">
              <div>
                <img src={productSwiper} alt="" />
              </div>
              <div>
                <img src={productSwiper} alt="" />
              </div>
              <div>
                <img src={productSwiper} alt="" />
              </div>
              <div>
                <img src={productSwiper} alt="" />
              </div>
              <div>
                <img src={productSwiper} alt="" />
              </div>
            </div>
            <div className="w-[429px] max-sm:w-[175px] my-[30.5px] max-sm:mb-0 mr-21.5 max-lg:mr-0">
              <img src={productDetailImage} alt="" />
            </div>
          </div>
          <div className="w-[45%] max-lg:w-full max-lg:mt-8">
            <h2 className="text-5xl font-bold">Встраиваемый светильник Novotech</h2>
            <div className="flex max-sm:flex-col max-sm:gap-12 justify-between mt-9.5 pb-10 border-b-1 border-b-[#9F9F9F]">
              <div className="flex gap-8 max-sm:justify-between">
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
            <div className="flex max-sm:flex-col gap-[50px] max-sm:gap-0">
              <div className="w-[271.5px] max-lg:w-[50%] max-sm:w-full">
                <div className="flex justify-between mt-10 pb-[17px] border-b-1 border-b-[#9F9F9F]">
                  <p className="text-[#454545] text-sm">Артикул</p>
                  <p className="text-[16px]">LED LAMPS 81284</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1 border-b-[#9F9F9F]">
                  <p className="text-[#454545] text-sm">Площадь освещения М²</p>
                  <p className="text-[16px]">46.67</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1 border-b-[#9F9F9F]">
                  <p className="text-[#454545] text-sm">Габариты, мм</p>
                  <p className="text-[16px]">105х106х40</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1 border-b-[#9F9F9F]">
                  <p className="text-[#454545] text-sm">Степень защиты</p>
                  <p className="text-[16px]">IP67</p>
                </div>
              </div>
              <div className="w-[271.5px] max-lg:w-[50%] max-sm:w-full">
                <div className="flex justify-between mt-10 pb-[17px] border-b-1 border-b-[#9F9F9F]">
                  <p className="text-[#454545] text-sm">Мощность, Вт</p>
                  <p className="text-[16px]">16</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1 border-b-[#9F9F9F]">
                  <p className="text-[#454545] text-sm">Цвет</p>
                  <p className="text-[16px]">Золото</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1 border-b-[#9F9F9F]">
                  <p className="text-[#454545] text-sm">Масса, кг</p>
                  <p className="text-[16px]">0,67 кг</p>
                </div>
                <div className="flex justify-between mt-10 pb-[17px] border-b-1 border-b-[#9F9F9F]">
                  <p className="text-[#454545] text-sm">Напряжение, Вт</p>
                  <p className="text-[16px]">220</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex gap-15 mt-[78px] mb-[60px] pb-5 border-b border-b-[#9F9F9F] max-sm:overflow-y-hidden">
          <li>
            <NavLink end={true} to={''} className={({ isActive }) => isActive ? 'text-black border-b-2 border-b-black pb-[22px]' : 'text-[#9F9F9F]'}>
              Описание
            </NavLink>
          </li>
          <li>
            <NavLink to={'characteristics'} className={({ isActive }) => isActive ? 'text-black border-b-2 border-b-black pb-[22px]' : 'text-[#9F9F9F]'}>
              Характеристики
            </NavLink>
          </li>
          <li>
            <NavLink to={'video'} className={({ isActive }) => isActive ? 'text-black border-b-2 border-b-black pb-[22px]' : 'text-[#9F9F9F]'}>
              Видео
            </NavLink>
          </li>
          <li>
            <NavLink to={'gallery'} className={({ isActive }) => isActive ? 'text-black border-b-2 border-b-black pb-[22px]' : 'text-[#9F9F9F]'}>
              Галерея
            </NavLink>
          </li>
        </ul>
        <div className="mb-[127px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);