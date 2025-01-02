import React from "react";
import wallet from "@/assets/wallet_2.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="mt-[95px] w-full flex-col flex" id="2">
      <div className="lg:grid lg:grid-cols-2 flex w-full h-full items-center relative">
        {/* LEFT SIDE */}
        <div className="w-full relative">
          <h1 className="md:text-[36px] max-md:text-[28px] font-normal leading-[135%] max-w-[614px]">
            <span className="text-primary">iPhone</span> sotib
            ololmayotganingizning asosiy sababi
          </h1>
          <br />
          <br />
          <div className="w-full max-w-[500px]">
            <p className="md:text-[20px] max-md:text-[18px] leading-[135%]">
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
        <Image
          src={wallet}
          alt="wallet"
          className="h-auto max-md:w-full max-md:z-[-1] max-md:absolute lg:static max-md:right-[-30%] md:right-[-40%] max-md:top-0 md:top-[-20%]"
        />
      </div>
    </section>
  );
};

export default SectionTwo;
