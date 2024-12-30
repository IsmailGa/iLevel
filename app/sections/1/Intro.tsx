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
    <section className="w-full h-[650px]" id="aboutus">
      <div className="relative ">
        {/* BG banner */}
        <Image src={banner} alt="banner" className="w-full p-[10px] sm:hidden lg:block md:hidden" />
        <Image src={banner_two} alt="banner" className="w-full p-[10px] sm:hidden md:block lg:hidden" />
        {/* iPhone levetation */}
        <div
          className={`bg-primary w-full max-xl:max-h-[550px] lg:max-h-[350px] md:max-h-[300px] absolute top-[50%] right-0 left-0 rounded-[35px] p-[35px] flex flex-col justify-end items-center`}
        >
        <Image src={iPhone} alt="banner" className="w-full z-20 md:translate-y-[40%] lg:translate-y-[35%]" />
          {/* IPHONE 16 bg underlay */}
          <Image
            src={iPhone_text}
            alt="banner"
            className="w-full h-auto z-10"
          />
          {/* TEXTS */}
          <div className="w-full flex justify-between items-center">
            <p className="max-w-[333px] w-full text-[16px] leading-[18px]">
              Va nihoyat! Endi siz boshlang&apos;ich 30% tolov va birgina
              pasport bilan xalol muddatli to&apos;lovga iphone xarid qila
              olasiz
            </p>
            <Link
              href="/"
              className="max-w-[186px] w-full h-[50px] p-[1px] flex justify-between items-center bg-white border-[1px] rounded-[25px] "
            >
              <p className="m-auto text-primary uppercase text-[16px] leading-[18px] font-normal">
                Harid qilish
              </p>
              <span className="bg-primary rounded-[25px] w-[43px] h-[43px] flex justify-center items-center">
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
