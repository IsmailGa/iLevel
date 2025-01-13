import React from "react";
import thousand from "@/assets/thousand-plus.svg";
import arrow from "@/assets/arrow_diagonal_white.svg";
import Image from "next/image";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

const SectionEight = ({ setOpen }: SetOpenType) => {
  return (
    <section className="w-full pm:mt-[75px] pt-[65px] flex flex-col" id="6">
      <div className="bg-primary rounded-[25px] md:p-[35px] p-[25px]">
        <div className="flex flex-col sm:gap-[25px] gap-[18px] relative">
          <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[110%] max-w-[540px]">
            Har oy 1000+ dan ortiq mijozlarga xizmat ko’rsatamiz
          </h1>

          <div className="flex flex-col lg:flex-row sm:gap-[25px] gap-[18px] lg:gap-[200px] lg:items-end justify-between items-start">
            <p className="md:text-[20px] text-[18px] leading-[135%] max-w-[735px]">
              iLevel do’koniga x yilda asos solganmiz va har oy minglab mijozlarga xizmat ko’rsatamiz
            </p>

            <button
              onClick={() => setOpen(true)}
              className="justify-self-end z-[50] max-lg:justify-self-start flex flex-shrink-0 items-center justify-between bg-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
            >
              <p className="text-primary text-center px-[20px] text-[16px] uppercase">
                Ro’yxatdan o’tish
              </p>
              <span className="flex items-center justify-center bg-primary rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </button>
          </div>

          <div className="absolute md:h-[145px] h-[110px] lg:h-full lg:right-[-25px] lg:top-0 top-[25%] z-1">
            <Image
              src={thousand}
              alt="thirty bg"
              className="h-full w-auto"
            />
          </div>
        </div>  
      </div>
    </section>
  );
};

export default SectionEight;