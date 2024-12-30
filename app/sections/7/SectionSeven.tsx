import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "@/assets/arrow_diagonal.svg";
import iphone from "@/assets/cards/iphones.png";
import imac from "@/assets/cards/imac.png";
import macbooks from "@/assets/cards/macbooks.png";
import iwatch from "@/assets/cards/iwatch.png";

const SectionSeven = () => {
  return (
    <section className={`mt-[75px] w-full flex flex-col gap-[35px]`} id="catalog">
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
            <Link href="/">
              <span className="bg-white rounded-[25px] w-[43px] h-[43px] flex justify-center items-center">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
          </div>
          <Image src={iphone} alt="iphone" className="z-10" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        {/* CARD TWO */}
        <div className="relative bg-primary/10 border-primary border-[1px] rounded-[25px] px-[30px] pt-[30px] cursor-pointer group overflow-hidden">
          <div className="flex justify-between w-full">
            <h1 className="max-w-[237px] text-[28px] leading-[32px]">
              iPhonelarni yangi va ishlatilganlarini
            </h1>
            <Link href="/">
              <span className="bg-white rounded-[25px] w-[43px] h-[43px] flex justify-center items-center">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
          </div>
          <Image src={macbooks} alt="iphone" className="" />
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        {/*  CARD THREE */}
        <div className="relative bg-primary/10 border-primary border-[1px] rounded-[25px] px-[30px] pt-[30px] cursor-pointer group overflow-hidden">
          <div className="flex justify-between w-full">
            <h1 className="max-w-[237px] text-[28px] leading-[32px]">
              iPhonelarni yangi va ishlatilganlarini
            </h1>
            <Link href="/">
              <span className="bg-white rounded-[25px] w-[43px] h-[43px] flex justify-center items-center">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
          </div>
          <Image src={imac} alt="iphone" className="" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        {/* CARD FOUR */}
        <div className="relative bg-primary/10 border-primary border-[1px] rounded-[25px] px-[30px] pt-[30px] cursor-pointer group overflow-hidden">
          <div className="flex justify-between w-full">
            <h1 className="max-w-[237px] text-[28px] leading-[32px]">
              iPhonelarni yangi va ishlatilganlarini
            </h1>
            <Link href="/">
              <span className="bg-white rounded-[25px] w-[43px] h-[43px] flex justify-center items-center">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
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
            <Link href="/">
              <span className="bg-white rounded-[25px] w-[43px] h-[43px] flex justify-center items-center">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
