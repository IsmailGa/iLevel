import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "@/assets/arrow_diagonal.svg";

const SectionThree = () => {
  return (
    <section className="mt-[75px] flex-col flex gap-[35px]" id="3">
      {/* TITLE */}
      <h1 className="md:text-[36px] text-[28px] leading-[135%]">
        <span className="text-primary ">Bu</span> muammolar sabab…
      </h1>
      {/* CARDS */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[25px]">
        {/* FIRST CARD */}
        <div className="border-primary border-[1px] rounded-[25px] bg-primary/10 p-[25px] grid gap-[25px]">
          <h2 className="text-primary md:text-[28px] text-[24px]">(1)</h2>
          <p className="md:text-[20px] text-[18px] leading-[135%]">
            Hali ham shu qotadigan telefoningizni ishlatib yurishga majbur
            bo’lyapsiz
          </p>
        </div>
        {/* SECOND CARD */}
        <div className="border-primary border-[1px] rounded-[25px] bg-primary/10 p-[25px] grid gap-[25px]">
          <h2 className="text-primary md:text-[28px] text-[24px]">(2)</h2>
          <p className="md:text-[20px] text-[18px] leading-[135%]">
            Iphone yangi modellari chiqsa ham siz eski modellarini ishlatib
            yuribsiz
          </p>
        </div>
      </div>
      {/* CARDS */}
      {/* LINK */}
      <Link
        href="/"
        className="self-start flex items-center justify-between border-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
      >
        <p className="text-white text-center px-[20px] text-[16px]">
          Harid qilish
        </p>
        <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
          <Image src={arrow} alt="arrow_diagonal" />
        </span>
      </Link>
    </section>
  );
};

export default SectionThree;
