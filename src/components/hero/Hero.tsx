import React from "react";
import heroImg from "../../assets/sodiq/hero/image.png";
import swiperImg from "../../assets/sodiq/hero/karusel.svg";
import {
  hero,
  hero__swiper__img,
  hero__title,
  hero__title__piece,
  hero__wrapper,
  hero__wrapper__body,
  hero__wrapper__img,
} from "./style";

const Hero = () => {
  return (
    <section className={hero}>
      <div className={hero__wrapper}>
        <div className={hero__wrapper__body}>
          <h1 className={hero__title}>
            Скидка 15%
            <br />
            на все подвесные
            <br />
            светильники
            <br />
            <span className={hero__title__piece}>до 5 февраля</span>
          </h1>
        </div>
        <div className={hero__wrapper__img}>
          <img
            src={heroImg}
            alt=""
            className="w-full max-w-full object-contain"
          />
        </div>
      </div>
      <div className="hero__swiper">
        <img src={swiperImg} alt="" className={hero__swiper__img} />
      </div>
    </section>
  );
};

export default React.memo(Hero);
