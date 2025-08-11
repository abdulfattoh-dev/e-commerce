import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { calcRatio } from "../..";
import { ArrowRight, MoveRight } from "lucide-react";
import categoryImg from "../../assets/sodiq/category/image.png";

const Category = () => {
  return (
    <section className="category">
      <div
        className={`category__wrapper max-w-[67.7%] mx-auto mt-20 mb-[120px] max-[850px]:max-w-[89.3%]`}
      >
        <div className="category__wrapper__header flex justify-between items-center mb-[34.680px] text-[#454545]">
          <h2 className="text-[40px] font-bold">Каталог</h2>
          <NavLink
            to=""
            className="flex px-[41.180px] py-[12.333px] items-center gap-[10px] border border-[#454545] rounded-[100px] font-medium  max-[650px]:hidden" /* */
          >
            Весь каталог <ArrowRight />
          </NavLink>
        </div>
        <div className="category__wrapper__cards grid grid-cols-6 gap-[1.5384615384615385%] max-[1250px]:grid-cols-2 max-[650px]:hidden">
          {Array(11)
            .fill(undefined)
            .map((_, i) => (
              <div
                key={i}
                className={`h-[216.76923076923083px] bg-[#F2F2F2] col-span-2 nth-last-[1]:col-span-3 nth-last-[2]:col-span-3 rounded-[20px] flex justify-between max-[1250px]:col-span-1 max-[1250px]:nth-last-[1]:col-span-1 max-[1250px]:nth-last-[2]:col-span-1 `}
              >
                <div className="card__body p-[7.6190476190476195%] flex flex-col justify-between whitespace-nowrap">
                  <h4 className="text-[20px] font-medium">Люстры</h4>
                  <Link to={""} className="flex text-[14px] items-center gap-2">
                    От 540₽
                    <MoveRight className="text-[#9F9F9F]" />
                  </Link>
                </div>
                <div className="card__img mx-auto">
                  <img
                    src={categoryImg}
                    alt=""
                    className="h-full object-contain"
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="hidden category__wrapper__cards grid-cols-2 gap-[1.5384615384615385%] max-[1250px]:grid-cols-2 max-[650px]:grid">
          {Array(2)
            .fill(undefined)
            .map((_, i) => (
              <div
                key={i}
                className={`h-[216.76923076923083px] bg-[#F2F2F2] rounded-[20px] flex justify-between relative`}
              >
                <div className="card__body p-[7.6190476190476195%] flex flex-col justify-between whitespace-nowrap">
                  <h4 className="text-[20px] font-medium">Люстры</h4>
                  <div className="card__img mx-auto h-[70%]">
                    <img
                      src={categoryImg}
                      alt=""
                      className="h-full object-contain"
                    />
                  </div>
                  <Link to={""} className="flex text-[14px] items-center gap-2">
                    От 540₽
                    <MoveRight className="text-[#9F9F9F]" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <NavLink
          to=""
          className="hidden justify-center py-[12.333px] items-center gap-[10px] border border-[#454545] rounded-[100px] font-medium  max-[650px]:flex mt-[32px]" /* */
        >
          Весь каталог <ArrowRight />
        </NavLink>
      </div>
    </section>
  );
};

export default React.memo(Category);
