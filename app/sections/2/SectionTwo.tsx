import React from "react";
import wallet from "@/assets/wallet_2.png";

const SectionTwo = () => {
  return (
    <section className="sm:mt-[95px] mt-[65px] w-full flex-col flex" id="2">
      <div className="relative lg:flex-row xl:pr-[500px] lg:pr-[300px] sm:pr-[100px] flex flex-col w-full h-full items-center">
        {/* LEFT SIDE */}
        <div className="flex-col flex sm:gap-[35px] gap-[25px] max-w-[720px]">
          <h1 className="md:text-[36px] max-md:text-[28px] font-normal leading-[110%] max-w-[614px]">
            <span className="text-primary">iPhone</span> sotib
            ololmayotganingizning asosiy sababi
          </h1>
          <div className="w-full ">
            <p className="md:text-[20px] max-md:max-lg:text-[18px] leading-[135%]">
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
          style={{ backgroundImage: `url(${wallet.src})` }}
          className="absolute z-[-1] 2xl:right-0 xl:h-[510px] md:h-[430px] sm:h-[320px] h-[300px] bg-contain bg-center xl:right-[-30px] sm:right-[-130px] right-[-90px] sm:opacity-[1] opacity-[0.75] lg:top-0 bg-no-repeat w-[auto] aspect-square "
        >
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;