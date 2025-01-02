import React from "react";
import thirtyBg from "@/assets/thirty.svg";
import arrow from "@/assets/arrow_diagonal_white.svg";
import Link from "next/link";
import Image from "next/image";

const SectionSix = () => {
  return (
    <section className="w-full mt-[75px] flex flex-col" id="6">
      <div className="bg-primary rounded-[25px] p-[35px] grid gap-[25px] relative">
        <h1 className="text-[36px] leading-[41px] max-w-[576px]">
          Kuting oling, ilevel apple gadjetlar do’koni
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-0 items-center">
          <p>
            ilevel do’konidan siz boshlang’ich 30% to’lov va birgina pasport
            bilan istalgan turdagi apple gadjetlarini xarid qilishingiz mumkin
          </p>

          <Link
            href="/"
            className="justify-self-end z-[50] max-lg:justify-self-start flex items-center justify-between bg-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
          >
            <p className="text-primary text-center px-[20px] text-[16px] uppercase">
              Batafsil ma’lumot
            </p>
            <span className="flex items-center justify-center bg-primary rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </Link>
        </div>

        <Image
          src={thirtyBg}
          alt="thirty bg"
          className="absolute right-0 top-[20%] z-1"
        />
      </div>
    </section>
  );
};

export default SectionSix;
