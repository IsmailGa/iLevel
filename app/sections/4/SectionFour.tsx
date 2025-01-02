import Image from "next/image";
import React from "react";
import calculator from "@/assets/calculator.png";
import arrow from "@/assets/arrow_diagonal.svg";
import Link from "next/link";

const SectionFour = () => {
  return (
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
          </h2>
          <p className="text-end leading-[22px] text-[20px]">
            Sizni bo’lib to’lashga iphone xarid qilishdan to‘sib turgan narsa
            bu.. <br /> Bo’lib to’lashga telefon xarid qilmoqchi bo’lganingizda
            sizdan Toshkent propiska, kartadagi aylanma va rasmiy ish joy
            so’rashlari Shuning uchun siz haligacha eski telefoningizni ishlatib
            yurishga majbur bo’lyapsiz
          </p>
          {/* TEXTS */}
          {/* LINK */}
          <Link
            href="#contacts"
            className="max-w-[170px] w-full h-[50px] flex p-[1px] justify-between items-center border-white border-[1px] rounded-[25px]"
          >
            <p className="m-auto">Bo&apos;lib to&apos;lash</p>
            <span className="bg-white rounded-[25px] m-[1px] w-[43px] h-[43px] flex justify-center items-center">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
