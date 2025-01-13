import Image from "next/image";
import React from "react";
import arrow from "@/assets/arrow_diagonal.svg";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

const SectionThree = ({ setOpen }: SetOpenType) => {
  return (
    <section
      className="pt-[75px] flex-col flex sm:gap-[35px] gap-[25px]"
      id="3"
    >
      {/* TITLE */}
      <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[110%]">
        <span className="text-primary ">Bu</span> muammolar sabab…
      </h1>
      {/* CARDS */}
      <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-[25px] gap-[18px]">
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
      <button
        onClick={() => setOpen(true)}
        className="self-start flex items-center justify-between border-white border-[1px] hover:bg-[rgba(255,255,255,0.1)] hover:border-primary rounded-[25px] p-[3px] sm:h-[50px] h-[44px] transition-all duration-300 group"
      >
        <p className="text-white text-center px-[20px] text-[16px]">
          Harid qilish
        </p>
        <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
          <Image src={arrow} alt="arrow_diagonal" />
        </span>
      </button>
    </section>
  );
};

export default SectionThree;
