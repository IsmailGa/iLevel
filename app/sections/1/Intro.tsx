import Image from "next/image";
import React from "react";
import banner from "@/assets/Decor.svg";
import banner_two from "@/assets/Decor2.svg";
import iPhone_text from "@/assets/iPhone_16_text.svg";
import iPhone from "@/assets/iPhone_banner.png";
import arrow from "@/assets/arrow_diagonal_white.svg";
import Link from "next/link";

const Intro = () => {
  return (
    <section
      className="w-full flex flex-col items-center h-[100vh] relative justify-center"
      id="aboutus"
    >
      <div className="absolute bottom-[50%] z-[-1]">
        <Image
          src={banner}
          alt="banner"
          className="hidden sm:block lg:hidden w-full"
        />
        <Image
          src={banner_two}
          alt="banner"
          className="hidden lg:block w-full"
        />
      </div>
      {/* Основной блок */}

      <div className="relative bg-primary w-full rounded-[35px] p-[35px] flex flex-col items-center">
        {/* Фоновые линии */}

        {/* iPhone */}
        <div className="w-full absolute z-[3] bottom-[40%]">
          <Image
            src={iPhone}
            alt="iPhone 16"
            className="w-full object-contain"
          />
        </div>
        <div className="flex flex-col lg:mt-[100px]">

          {/* Текст iPhone 16 */}
          <div className="z-[2] flex items-center justify-center">
            <Image
              src={iPhone_text}
              alt="iPhone 16 Text"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Текст и кнопка */}
          <div className="relative z-[4] flex w-full justify-between items-center">
            {/* Текст */}
            <p className="max-w-[333px] text-white text-[16px] leading-[18px]">
              Va nihoyat! Endi siz boshlang&apos;ich 30% tolov va birgina
              pasport bilan xalol muddatli to&apos;lovga iphone xarid qila
              olasiz
            </p>
            {/* Кнопка */}
            <Link
              href="/"
              className="flex items-center justify-between bg-white border-[1px] rounded-[25px] p-[1px] w-full h-[50px] max-w-[186px]"
            >
              <p className="text-primary text-center w-full text-[16px] leading-[18px] font-normal">
                Harid qilish
              </p>
              <span className="flex items-center justify-center bg-primary rounded-[25px] w-[43px] h-[43px]">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
