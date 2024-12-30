import React from "react";
import { IconWallet, Paper, Profile, SquareTick } from "@/public/assets/icons.js";
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
        <div className="border-primary bg-primary/10 border-[1px] rounded-[25px] p-[25px] flex flex-col gap-[60px] lg:mb-[70px] ">
          <IconWallet />
          <p className="text-[20px] leading-[22px]">Boshlang’ich 30% to’lov</p>
        </div>
        {/* CARD TWO*/}
        <div className="border-primary bg-primary/10 border-[1px] rounded-[25px] p-[25px] flex flex-col gap-[60px] lg:mt-[70px] md:">
          <Paper />
          <p className="text-[20px] leading-[22px]">Birgina pasport</p>
        </div>
        {/* CARD THREE*/}
        <div className="border-primary bg-primary/10 border-[1px] rounded-[25px] p-[25px] flex flex-col gap-[60px] lg:mb-[70px]">
          <SquareTick />
          <p className="text-[20px] leading-[22px]">
            Hech qanday mibdan qarzdorlik yo’qligi
          </p>
        </div>
        {/* CARD FOUR*/}
        <div className="border-primary bg-primary/10 border-[1px] rounded-[25px] p-[25px] flex flex-col gap-[60px] lg:mt-[70px] md:">
          <Profile />
          <p className="text-[20px] leading-[22px]">
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
          href="#contacts"
          className={`
          max-w-[170px] 
          w-full 
          h-[50px] 
          flex 
          p-[1px] 
          justify-between 
          items-center 
          border-white 
          border-[1px] 
          rounded-[25px] 
          lg:justify-self-end

          `}
        >
          <p className="m-auto">Harid qilish</p>
          <span className="bg-white rounded-[25px] m-[1px] w-[43px] h-[43px] flex justify-center items-center">
            <Image src={arrow} alt="arrow_diagonal" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SectionFive;
