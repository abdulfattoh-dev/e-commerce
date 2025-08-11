import { ArrowRight } from "lucide-react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import starImg from "../../assets/sodiq/features/star.png";

const Features = () => {
  return (
    <section className="features text-[#454545]">
      <div className="features__wrapper max-w-[67.7%] mx-auto mt-20 mb-[120px] max-[850px]:max-w-[89.3%]">
        <div className="features__wrapper__header flex justify-between items-center mb-[34.680px]">
          <h2 className="text-[40px] font-bold max-[550px]:text-[34px] max-[400px]:text-[28px]">
            Почему NORNLIGHT?
          </h2>
          <NavLink
            to=""
            className="flex px-[41.180px] py-[12.333px] items-center gap-[10px] border border-[#454545] rounded-[100px] font-medium  max-[1100px]:hidden" /* */
          >
            Весь каталог <ArrowRight />
          </NavLink>
        </div>
        <div className="features__wrapper__cards grid grid-cols-4 gap-5 max-[1300px]:grid-cols-3 max-[1100px]:grid-cols-2">
          {Array(4)
            .fill(undefined)
            .map((_, i) => (
              <div
                className="card pt-[17px] pl-[17px] pb-[44px] border border-[#D9D9D9] border-opacity-50 max-[500px]:p-[17px] max-[500px]:pr-[0]"
                key={i}
              >
                <div className="card__img w-[80px] max-[550px]:w-[70px] max-[400px]:w-[60px]">
                  <img src={starImg} alt="" />
                </div>
                <div className="card__body">
                  <h4 className="mt-[80px] mb-5 font-bold text-[20px] max-[550px]:text-[18px] max-[550px]:mt-[50px] max-[550px]:mb-4 max-[500px]:mt-[20px] max-[500px]:mb-2 max-[470px]:text-[16px] max-[450px]:my-[11px]">
                    Только проверенные бренды
                  </h4>
                  <p className="max-[550px]:text-[17px] max-[470px]:text-[16px]">
                    Бренды, проверенные временем и качеством
                  </p>
                </div>
              </div>
            ))}
        </div>
        <NavLink
          to=""
          className="hidden max-[1100px]:flex justify-center px-[41.180px] py-[12.333px] items-center gap-[10px] border border-[#454545] rounded-[100px] font-medium mt-[32px]" /* */
        >
          Весь каталог <ArrowRight />
        </NavLink>
      </div>
    </section>
  );
};

export default memo(Features);
