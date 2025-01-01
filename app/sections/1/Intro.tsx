import Image from "next/image";
import React from "react";
import banner from "@/assets/Decor.svg";
import banner_two from "@/assets/Decor2.svg";
import banner_three from "@/assets/Decor3.svg";
import iPhone_text from "@/assets/iPhone_16_text.svg";
import iPhone from "@/assets/iPhone_banner.png";
import arrow from "@/assets/arrow_diagonal_white.svg";
import Link from "next/link";

const Intro = () => {
  return (
    <section
      className="w-full flex flex-col items-center xl:pt-[175px] md:pt-[160px] pt-[19vw] relative justify-center"
      id="aboutus"
    >
      <div className="absolute top-0 w-full z-[-1]">
        {/* Первое изображение: отображается на lg и больше */}
        <Image src={banner} alt="banner" className="hidden lg:block w-full" />
        {/* Второе изображение: отображается от sm до lg */}
        <Image src={banner_two} alt="banner" className="hidden sm:block lg:hidden w-full" />
        {/* Третье изображение: отображается на sm и меньше */}
        <Image src={banner_three} alt="banner" className="block sm:hidden w-full" />
      </div>
      {/* Основной блок */}

      <div className="relative bg-primary w-full xl:h-[465px] lg:h-[400px] h-[380px] rounded-[35px] p-[24px] md:p-[35px] flex flex-col items-center">
        {/* Фоновые линии */}

        {/* iPhone */}
        <div className="absolute w-full z-[3] lg:w-[94%] md:w-[105%] md:top-[-18%] md:translate-y-[0] top-[50%] translate-y-[-50%] w-[114%]">
          <Image
            src={iPhone}
            alt="iPhone 16"
            className="w-full object-contain"
          />
        </div>
        <div className="relative flex flex-col justify-end h-full w-full">

          {/* Текст iPhone 16 */}
          <div className="absolute md:bottom-[50%] bottom-[35%] translate-y-[60%] z-[2] flex items-center justify-center">
            <Image
              src={iPhone_text}
              alt="iPhone 16 Text"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Текст и кнопка */}
          <div className="relative z-[4] flex w-full h-full md:h-fit md:flex-row flex-col justify-between items-center">
            {/* Текст */}
            <p className="self-start md:self-center text-white sm:text-[16px] sm:max-w-[333px] max-w-[220px] text-[14px] leading-[120%]">
              Va nihoyat! Endi siz boshlang&apos;ich 30% tolov va birgina
              pasport bilan xalol muddatli to&apos;lovga iphone xarid qila
              olasiz
            </p>
            {/* Кнопка */}
            <Link
              href="/"
              className="self-end md:self-center flex items-center justify-between bg-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
            >
              <p className="text-primary text-center px-[20px] text-[16px]">
                Harid qilish
              </p>
              <span
                className="flex items-center justify-center bg-primary rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]"
              >
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
