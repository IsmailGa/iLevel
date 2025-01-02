import React from "react";
import {
  IconWallet,
  Paper,
  Profile,
  SquareTick,
} from "@/public/assets/icons.js";
import arrow from "@/assets/arrow_diagonal.svg";
import Image from "next/image";
import Link from "next/link";

const SectionFive = () => {
  return (
    <section className="mt-[75px] w-full flex flex-col gap-[35px]" id="5">
      <h1 className="text-[36px] leading-[41px] max-w-[613px]">
        <span className="text-primary">iPhonelarni</span> hech qanday bosh
        og’riqlarsiz sotib olish uchun nima qilish kerak?
      </h1>
      {/* CARDS */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-[25px] items-center">
        {/* CARD ONE */}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px]  p-[25px] flex flex-col justify-between lg:mb-[70px] md:mt-[-38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <IconWallet />
          </div>
          <p className="block text-[20px] leading-[22px]">
            Boshlang’ich 30% to’lov
          </p>
        </div>
        {/* CARD TWO*/}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px]  p-[25px] flex flex-col justify-between  lg:mt-[70px] md:mt-[38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <Paper />
          </div>
          <p className="block text-[20px] leading-[22px]">Birgina pasport</p>
        </div>
        {/* CARD THREE*/}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px]  p-[25px] flex flex-col justify-between  lg:mb-[70px] md:mt-[-38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <SquareTick />
          </div>
          <p className="block text-[20px] leading-[22px]">
            Hech qanday mibdan qarzdorlik yo’qligi
          </p>
        </div>
        {/* CARD FOUR*/}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px]  p-[25px] flex flex-col justify-between lg:mt-[70px] md:mt-[38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <Profile />
          </div>
          <p className="block text-[20px] leading-[22px] ">
            Va 18 yoshdan yuqori bo’lsangiz bas
          </p>
        </div>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[25px] lg:gap-0">
        <p className="leading-[22px] text-[20px]">
          Biz sizdan hech qanday rasmiy ish joy va mahalladan spravka so’rab
          boshingizni og’ritmaymiz
        </p>
        <Link
          href="/"
          className="justify-self-end max-md:justify-self-start flex items-center justify-between border-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
        >
          <p className="text-white text-center px-[20px] text-[16px]">
            Harid qilish
          </p>
          <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
            <Image src={arrow} alt="arrow_diagonal" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SectionFive;
