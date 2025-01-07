import React from "react";
import Image from "next/image";
import rect_one from "@/public/assets/section_two/rectangle_one.png"
import rect_two from "@/public/assets/section_two/rectangle_two.png"

const SectionTwo = () => {
  return (
    <section className="sm:mt-[95px] mt-[65px] w-full flex-col flex" id="2">
      <div className="flex flex-col w-full h-full items-center">
        {/* LEFT SIDE */}
        <div className="flex-col flex sm:gap-[35px] gap-[25px] w-full">
          <h1 className="font-semiBold md:text-[36px] max-md:text-[28px] font-normal leading-[110%] max-w-[614px]">
            <span className="text-primary">iPhone</span> sotib
            ololmayotganingizning asosiy sababi
          </h1>
          <div className="w-full flex flex-col gap-[25px]">
            <div className=" bg-primary p-[35px] rounded-[25px] ">
              <span className="font-semiBold md:text-[22px] max-md:max-lg:text-[20px] ">Do‘stim...</span>
              <p className="md:text-[20px] w-full max-md:max-lg:text-[18px] font-medium max-w-[720px] leading-[135%]">
                Siz hozir ushbu sahifada ekansiz, demak sizda iphone telefonini
                sotib ololmaslik bilan bog‘liq muammo bor. <br />
                Yaxshi yangiligim shuki, siz bu muammoning aniq va sinalgan
                yechimini topasiz. <br />

              </p>
            </div>
            <div className="bg-primary p-[35px] rounded-[25px]">
              <span className="font-semiBold md:text-[22px] max-md:max-lg:text-[20px]">Tayyor bo‘lsangiz, ketdik....</span>
              <p className="md:text-[20px] w-full max-md:max-lg:text-[18px] font-medium max-w-[720px] leading-[135%]">
                Biz sizni yaqindan tanimaymiz. <br /> Lekin iphone sotib ololmayotganingizning asosiy 2 ta sababi bo‘lishi mumkin.
              </p>
            </div>

            <div className="relative grid lg:grid-cols-2 grid-cols-1 items-stretch gap-[25px]">
              <Image
                src={rect_one}
                alt="rect one"
                className="z-[-10] absolute bottom-0 left-0 lg:translate-x-[-20%] lg:translate-y-[30%]"
              />
              <div className="flex flex-col h-full min-h-[196px] border-primary border-[1px] bg-primary/10 backdrop-blur-lg p-[35px] gap-[15px] rounded-[25px]">
                <span className="font-semiBold text-primary text-[22px] leading-[135%]">Birinchisi</span>
                <p>Yetarlicha mablag’ yo’qligi</p>
              </div>
              <div className="flex flex-col h-full min-h-[196px] border-primary border-[1px] bg-primary/10 backdrop-blur-sm p-[35px] gap-[15px] rounded-[25px]">
                <span className="font-semiBold text-primary text-[22px] leading-[135%]">Ikkinchisi</span>
                <p>
                  Yetarlicha mablag’ yo’qligi sabab bo’lib to’lashga iphone xarid qilaman desangiz rasmiy ish
                  joy, Toshkent propiska va kartadagi aylanma pullarni so’rashi
                </p>
              </div>
              <Image
                src={rect_two}
                alt="rect two"
                className="z-[-10] absolute bottom-0 right-0 translate-x-[30%] translate-y-[20%]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;