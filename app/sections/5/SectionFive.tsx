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

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

const SectionFive = ({ setOpen }: SetOpenType) => {
  return (
    <section
      className="sm:mt-[75px] mt-[65px] w-full flex flex-col sm:gap-[35px] gap-[25px]"
      id="5"
    >
      <h1 className="md:text-[36px] text-[28px] leading-[110%] max-w-[613px]">
        <span className="text-primary">iPhonelarni</span> hech qanday bosh
        og’riqlarsiz sotib olish uchun nima qilish kerak?
      </h1>
      {/* CARDS */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 xl:gap-[25px] md:gap-x-[25px] max-md:gap-[25px] max-sm:gap-[18px] items-center">
        {/* CARD ONE */}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px]  p-[25px] flex flex-col justify-between lg:mt-0 lg:mb-[32px] md:mt-[-38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <IconWallet />
          </div>
          <p className="block md:text-[20px] text-[18px] leading-[110%]">
            Boshlang’ich 30% to’lov
          </p>
        </div>
        {/* CARD TWO*/}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px]  p-[25px] flex flex-col justify-between  lg:mt-[32px] md:mt-[38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <Paper />
          </div>
          <p className="block md:text-[20px] text-[18px] leading-[110%]">
            Birgina pasport
          </p>
        </div>
        {/* CARD THREE*/}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px]  p-[25px] flex flex-col justify-between lg:mt-0 lg:mb-[32px] md:mt-[-38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <SquareTick />
          </div>
          <p className="block md:text-[20px] text-[18px] leading-[110%]">
            Hech qanday mibdan qarzdorlik yo’qligi
          </p>
        </div>
        {/* CARD FOUR*/}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px]  p-[25px] flex flex-col justify-between lg:mt-[32px] md:mt-[38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <Profile />
          </div>
          <p className="block md:text-[20px] text-[18px] leading-[110%] ">
            Va 18 yoshdan yuqori bo’lsangiz bas
          </p>
        </div>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[25px] lg:gap-0">
        <p className="leading-[135%] md:text-[20px] text-[18px]">
          Biz sizdan hech qanday rasmiy ish joy va mahalladan spravka so’rab
          boshingizni og’ritmaymiz
        </p>
        <button
          onClick={() => setOpen(true)}
          className="justify-self-end max-md:justify-self-start flex items-center justify-between border-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
        >
          <p className="text-white text-center px-[20px] text-[16px]">
            Harid qilish
          </p>
          <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
            <Image src={arrow} alt="arrow_diagonal" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default SectionFive;
