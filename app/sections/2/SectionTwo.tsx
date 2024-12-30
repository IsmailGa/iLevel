import React from "react";
import wallet from "@/assets/wallet_2.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="mt-[95px] w-full flex-col flex " id="2">
      <div className="grid grid-cols-2  w-full h-full items-center">
        {/* LEFT SIDE */}
        <div className="md:cols-span-2 lg:1 relative">
          <h1 className="text-[36px] font-normal leading-[135%] max-w-[614px]">
            <span className="text-primary">iPhone</span> sotib
            ololmayotganingizning asosiy sababi
          </h1>
          <br />
          <br />
          <div className="">
            <p className="text-[20px] leading-[135%]">
              Do‘stim... <br />
              Siz hozir ushbu sahifada ekansiz, demak sizda iphone telefonini
              sotib ololmaslik bilan bog‘liq muammo bor. <br />
              Yaxshi yangiligim shuki, siz bu muammoning aniq va sinalgan
              yechimini topasiz. <br />
              Tayyor bo‘lsangiz, ketdik.... <br /> Biz sizni yaqindan
              tanimaymiz.
              <br />
              Lekin iphone sotib ololmayotganingizning asosiy 2 ta sababi
              bo‘lishi mumkin.
              <br />
              <br />
              Birinchisi, Yetarlicha mablag’ yo’qligi
              <br />
              <br />
              Ikkinchisi, Yetarlicha mablag’ yo’qligi sabab bo’lib to’lashga
              iphone xarid qilaman desangiz rasmiy ish joy, Toshkent propiska va
              kartadagi aylanma pullarni so’rashi
            </p>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div
          className="
          w-full
          h-full
          flex 
          flex-col
          items-center
          justify-center
          md:
        "
        >
          <Image
            src={wallet}
            alt="wallet"
            className="w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
