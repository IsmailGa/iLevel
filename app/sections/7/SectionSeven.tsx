import Image from "next/image";
import React from "react";
import arrow from "@/assets/arrow_diagonal_white.svg";
import iphone from "@/assets/cards/iphones.png";
import imac from "@/assets/cards/imac.png";
import macbooks from "@/assets/cards/macbooks.png";
import iwatch from "@/assets/cards/iwatch.png";

const SectionSeven = () => {
  return (
    <section
      className={`mt-[75px] w-full flex flex-col gap-[35px]`}
      id="catalog"
    >
      <h1 className="text-[36px] leading-[41px] max-w-[576px] text-end self-end">
        <span className="text-primary">iLevel</span> do’konidan siz nimalarni
        xarid qilishingiz mumkin?
      </h1>
      {/* CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
        {/* CARD */}
        <div className="relative bg-primary/10 border-primary border-[1px] rounded-[25px] px-[30px] pt-[30px] cursor-pointer group overflow-hidden">
          <div className="flex justify-between w-full z-10">
            <h1 className="max-w-[237px] text-[28px] leading-[32px]">
              iPhonelarni yangi va ishlatilganlarini
            </h1>

            <span className="flex items-center justify-center bg-primary rounded-full p-[11px] shrink-0 aspect-square w-auto h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </div>
          <Image src={iphone} alt="iphone" className="z-10" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        {/* CARD TWO */}
        <div className="relative bg-primary/10 border-primary border-[1px] rounded-[25px] px-[30px] pt-[30px] cursor-pointer group overflow-hidden">
          <div className="flex justify-between w-full">
            <h1 className="max-w-[237px] text-[28px] leading-[32px]">
              Macbook
            </h1>
            <span className="flex items-center justify-center bg-primary rounded-full p-[11px] shrink-0 aspect-square w-auto h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </div>
          <Image src={macbooks} alt="iphone" className="" />
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        {/*  CARD THREE */}
        <div className="relative bg-primary/10 border-primary border-[1px] rounded-[25px] px-[30px] pt-[30px] cursor-pointer group overflow-hidden">
          <div className="flex justify-between w-full">
            <h1 className="max-w-[237px] text-[28px] leading-[32px]">iMac</h1>
            <span className="flex items-center justify-center bg-primary rounded-full p-[11px] shrink-0 aspect-square w-auto h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </div>
          <Image src={imac} alt="iphone" className="" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        {/* CARD FOUR */}
        <div className="relative bg-primary/10 border-primary border-[1px] rounded-[25px] px-[30px] pt-[30px] cursor-pointer group overflow-hidden">
          <div className="flex justify-between w-full">
            <h1 className="max-w-[237px] text-[28px] leading-[32px]">iWatch</h1>
            <span className="flex items-center justify-center bg-primary rounded-full p-[11px] shrink-0 aspect-square w-auto h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </div>
          <Image src={iwatch} alt="iphone" className="" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        {/* BIG CARD */}
        <div
          className="relative group overflow-hidden cursor-pointer bg-center bg-cover w-full border-primary h-[420px] border-[1px] rounded-[25px] px-[30px] py-[30px] lg:col-span-2 col-span-1"
          style={{
            backgroundImage: "url('/assets/cards/accesories.png')",
          }}
        >
          <div className="flex justify-between items-center w-full">
            <h1 className="max-w-[237px] text-[28px] leading-[32px]">
              iPhonelarni yangi va ishlatilganlarini
            </h1>
            <span className="flex items-center justify-center bg-primary rounded-full p-[11px] shrink-0 aspect-square w-auto h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
