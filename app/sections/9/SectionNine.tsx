import Image from "next/image";
import React from "react";
import arrow from "@/assets/arrow_diagonal.svg";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

const SectionNine = ({ setOpen }: SetOpenType) => {
  return (
    <section className="sm:mt-[75px] mt-[65px] flex flex-col w-full" id="9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {/* RIGHT */}
        <div className="flex flex-col gap-[35px]">
          {/* TITLE */}
          <h1 className="md:text-[36px] text-[28px] leading-[135%]">
            <span className="text-primary">Bu</span> taklif siz uchun emas,
            Agar…
          </h1>
          {/* LIST */}
          <ul className="flex flex-col gap-[30px]">
            {/* ELEMENT 1 */}
            <li className="flex items-center gap-[30px]">
              <div className="relative inline-block p-[1px] bg-gradient-to-r from-primary rounded-full">
                <div className="flex items-center justify-center bg-[#070529] rounded-full md:w-[100px] md:h-[100px] w-[65px] h-[65px]">
                  <span className="text-primary md:text-[36px] text-[28px] font-bold flex items-center justify-center">
                    1
                  </span>
                </div>
              </div>
              <p className="leading-[135%] md:text-[20px] text-[18px]">
                Telefoningizni yangisiga almashtirishga yetarlicha xohishingiz
                bo’lmasa
              </p>
            </li>
            {/* ELEMENT 2 */}
            <li className="flex items-center gap-[30px]">
              <div className="relative inline-block p-[1px] bg-gradient-to-r from-primary rounded-full">
                <div className="flex items-center justify-center bg-[#070529] rounded-full md:w-[100px] md:h-[100px] w-[65px] h-[65px]">
                  <span className="text-primary md:text-[36px] text-[28px] font-bold flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>
              <p className="leading-[135%] md:text-[20px] text-[18px]">
                Qotadigan telefonni ishlatib yurishni xohlasangiz
              </p>
            </li>
          </ul>
        </div>
        {/* LEFT */}

        <div className="relative inline-block p-[1px] bg-gradient-to-r from-primary rounded-[25px]">
          <div className="p-[30px] bg-[#070529] rounded-[25px] w-full h-full flex flex-col lg:justify-between lg:items-end">
            <h1 className="md:text-[36px] text-[28px] leading-[135%]">
              Aksincha bo’lsa, bu taklif siz uchun
            </h1>

            <button
              onClick={() => setOpen(true)}
              className="justify-self-end max-lg:max-xl:self-end max-lg:max-xl: mt-[100px] z-[50] max-lg:justify-self-start flex items-center justify-between border-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
            >
              <p className="text-white text-center px-[20px] text-[16px]">
                Taklifdan foydalanish
              </p>
              <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNine;
