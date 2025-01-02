import Image from "next/image";
import React from "react";
import calculator from "@/assets/calculator.png";
import arrow from "@/assets/arrow_diagonal.svg";
import Link from "next/link";

const SectionFour = () => {
  return (
    <section className="mt-[75px]" id="4">
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center relative"
        id="4"
      >
        {/* IMAGE */}
        <div className="flex flex-col flex-1">
          <Image
            src={calculator}
            alt="calculator"
            className="w-full h-auto max-md:w-[518px] max-md:z-[-1] max-md:absolute lg:static max-md:top-[-10%] md:left-0 max-md:left-[-20%]"
          />
        </div>
        {/* IMAGE */}
        {/* TEXTS */}
        <div className="flex-col flex gap-[35px] items-end">
          <h2 className="text-[36px] text-end leading-[135%] max-md:max-w-[362px]">
            <span className="text-primary ">Xo‘sh</span>, iphonelarni qanday
            qilib bo’lib to’lashga olsa bo’ladi?
          </h2>
          <p className="text-end leading-[135%] text-[20px] max-md:max-w-[362px]">
            Sizni bo’lib to’lashga iphone xarid qilishdan to‘sib turgan narsa
            bu.. <br /> Bo’lib to’lashga telefon xarid qilmoqchi bo’lganingizda
            sizdan Toshkent propiska, kartadagi aylanma va rasmiy ish joy
            so’rashlari Shuning uchun siz haligacha eski telefoningizni ishlatib
            yurishga majbur bo’lyapsiz
          </p>
          {/* TEXTS */}
          {/* LINK */}
          <Link
            href="/"
            className="self-end flex items-center justify-between border-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
          >
            <p className="text-white text-center px-[20px] text-[16px]">
              Bo&apos;lib to&apos;lash
            </p>
            <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
