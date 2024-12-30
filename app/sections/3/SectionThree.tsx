import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "@/assets/arrow_diagonal.svg";

const SectionThree = () => {
  return (
    <section className="mt-[75px] flex-col flex gap-[35px]" id="3">
      {/* TITLE */}
      <h1 className="text-[36px] leading-[135%]">
        <span className="text-primary ">Bu</span> muammolar sabab…
      </h1>
      {/* CARDS */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[25px]">
        {/* FIRST CARD */}
        <div className="border-primary border-[1px] rounded-[25px] bg-primary/10 p-[25px] grid gap-[25px]">
          <h2 className="text-primary text-[28px]">(1)</h2>
          <p className="text-[20px] leading-[135%]">
            Hali ham shu qotadigan telefoningizni ishlatib yurishga majbur
            bo’lyapsiz
          </p>
        </div>
        {/* SECOND CARD */}
        <div className="border-primary border-[1px] rounded-[25px] bg-primary/10 p-[25px] grid gap-[25px]">
          <h2 className="text-primary text-[28px]">(2)</h2>
          <p className="text-[20px] leading-[135%]">
            Iphone yangi modellari chiqsa ham siz eski modellarini ishlatib
            yuribsiz
          </p>
        </div>
      </div>
      {/* CARDS */}
      {/* LINK */}
      <Link
        href="#contacts"
        className="max-w-[170px] w-full h-[50px] flex p-[1px] justify-between items-center border-white border-[1px] rounded-[25px]"
      >
        <p className="m-auto text-[16px] leading-[135%]">Harid qilish</p>
        <span className="bg-white rounded-[25px] m-[1px] w-[43px] h-[43px] flex justify-center items-center">
          <Image src={arrow} alt="arrow_diagonal" />
        </span>
      </Link>
    </section>
  );
};

export default SectionThree;
