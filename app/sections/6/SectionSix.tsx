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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-0">
          <p>
            ilevel do’konidan siz boshlang’ich 30% to’lov va birgina pasport
            bilan istalgan turdagi apple gadjetlarini xarid qilishingiz mumkin
          </p>
          <Link
            href="#contacts"
            className={`
            max-w-[235px]
            w-full h-[50px] 
            flex 
            p-[1px] 
            justify-between 
        bg-white
            border-[1px] 
            rounded-[25px] 
            lg:justify-self-end 
            lg:items-end
            z-10
           `}
          >
            <p className="m-auto text-primary uppercase">Batafsil ma’lumot</p>
            <span className="bg-primary rounded-[25px] m-[1px] w-[43px] h-[43px] flex justify-center items-center">
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
