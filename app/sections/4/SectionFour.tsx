import Image from "next/image";
import React from "react";
import calculator from "@/assets/calculator.png";
import arrow from "@/assets/arrow_diagonal.svg";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

const SectionFour = ({ setOpen }: SetOpenType) => {
  return (
<<<<<<< Updated upstream
    <section className="sm:mt-[95px] mt-[65px] w-full flex-col flex" id="2">
      <div className="relative lg:flex-row xl:pl-[500px] lg:pl-[300px] sm:pl-[100px] flex flex-col w-full h-full items-center justify-end">
        {/* LEFT SIDE */}
        <div
          style={{ backgroundImage: `url(${calculator.src})` }}
          className="absolute z-[-1] 2xl:left-0 xl:h-[450px] md:h-[430px] sm:h-[320px] h-[300px] bg-contain bg-center xl:left-[-30px] sm:left-[-130px] left-[-40px] sm:opacity-[1] opacity-[0.75] lg:top-[50%] top-[-20px] lg:translate-y-[-50%] bg-no-repeat w-[auto] aspect-square "
        ></div>
        {/* RIGHT SIDE */}
        <div className="flex-col text-right items-end flex sm:gap-[35px] gap-[25px] max-w-[720px]">
          <h1 className="font-semiBold md:text-[36px] max-md:text-[28px] font-normal leading-[110%] max-w-[614px]">
            <span className="text-primary">Xo‘sh</span>, iphonelarni qanday
=======
    <section className="mt-[75px]" id="4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative" id="4">
        {/* IMAGE */}
        <div className="flex flex-col flex-1">
          <Image
            src={calculator}
            alt="calculator"
            className="w-full h-auto sm:w-[518px] sm:z-[-1] sm:absolute lg:static md:top-[-50%] sm:top-[0%] md:left-0 sm:left-[-20%]"
          />
        </div>
        {/* IMAGE */}
        {/* TEXTS */}
        <div className="flex-col flex gap-[35px] items-end">
          <h2 className="text-[36px] text-end leading-[41px]">
            <span className="text-primary ">Xo‘sh</span>, iphonelarni qanday
            qilib bo’lib to’lashga olsa bo’ladi?
          </h1>
          <div className="w-full ">
            <p className="md:text-[20px] max-md:max-lg:text-[18px] leading-[135%]">
              Sizni bo’lib to’lashga iphone xarid qilishdan to‘sib turgan narsa
              bu.. Bo’lib to’lashga telefon xarid qilmoqchi bo’lganingizda
              sizdan Toshkent propiska, kartadagi aylanma va rasmiy ish joy
              so’rashlari Shuning uchun siz haligacha eski telefoningizni
              ishlatib yurishga majbur bo’lyapsiz
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="self-end flex items-center justify-between border-white border-[1px] hover:bg-[rgba(255,255,255,0.1)] hover:border-primary rounded-[25px] p-[3px] sm:h-[50px] h-[44px] transition-all duration-300 group"
          >
            <p className="text-white text-center px-[20px] text-[16px]">
              Harid qilish
            </p>
            <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
