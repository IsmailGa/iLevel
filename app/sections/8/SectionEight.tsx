import React from "react";
import thousand from "@/assets/thousand-plus.svg";
import arrow from "@/assets/arrow_diagonal_white.svg";
import Image from "next/image";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

const SectionEight = ({ setOpen }: SetOpenType) => {
  return (
    <section className="w-full mt-[75px] flex flex-col" id="8">
      <div className="bg-primary rounded-[25px] p-[35px] grid gap-[25px] relative">
        <h1 className="md:text-[36px] text-[28px] leading-[135%] max-w-[576px]">
          Har oy 1000+ dan ortiq mijozlarga xizmat ko’rsatamiz
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-0 items-center">
          <p className="md:text-[20px] text-[18px] leading-[135%]">
            iLevel do’koniga x yilda asos solganmiz va har oy minglab mijozlarga
            xizmat ko’rsatamiz
          </p>

          <button
            onClick={() => setOpen(true)}
            className="justify-self-end z-[50] max-lg:justify-self-start flex items-center justify-between bg-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
          >
            <p className="text-primary text-center px-[20px] text-[16px] uppercase">
              Ro’yxatdan o’tish
            </p>
            <span className="flex items-center justify-center bg-primary rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </button>
        </div>
        <Image
          src={thousand}
          alt="thirty bg"
          className="absolute right-0 top-[20%] z-1"
        />
      </div>
    </section>
  );
};

export default SectionEight;
