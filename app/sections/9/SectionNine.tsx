import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "@/assets/arrow_diagonal.svg";

const SectionNine = () => {
  return (
    <section className="mt-[75px] flex flex-col w-full" id="9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {/* RIGHT */}
        <div className="flex flex-col gap-[35px]">
          {/* TITLE */}
          <h1 className="text-[36px] leading-[41px]">
            <span className="text-primary">Bu</span> {" "}
            taklif siz uchun emas, Agar…
          </h1>
          {/* LIST */}
          <ul className="flex flex-col gap-[30px]">
            {/* ELEMENT 1 */}
            <li className="flex items-center gap-[30px]">
              <div className="relative inline-block p-[1px] bg-gradient-to-r from-primary rounded-full">
                <div className="flex items-center justify-center bg-[#070529] rounded-full w-[100px] h-[100px]">
                  <span className="text-primary text-[36px] font-bold flex items-center justify-center">
                    1
                  </span>
                </div>
              </div>
              <p className="leading-[25px text-[20px]">
                Telefoningizni yangisiga almashtirishga yetarlicha xohishingiz
                bo’lmasa
              </p>
            </li>
            {/* ELEMENT 2 */}
            <li className="flex items-center gap-[30px]">
              <div className="relative inline-block p-[1px] bg-gradient-to-r from-primary rounded-full">
                <div className="flex items-center justify-center bg-[#070529] rounded-full w-[100px] h-[100px]">
                  <span className="text-primary text-[36px] font-bold flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>
              <p className="leading-[25px text-[20px]">
                Qotadigan telefonni ishlatib yurishni xohlasangiz
              </p>
            </li>
          </ul>
        </div>
        {/* LEFT */}

        <div className="relative inline-block p-[1px] bg-gradient-to-r from-primary rounded-[25px]">
          <div className="p-[30px] bg-[#070529] rounded-[25px] w-full h-full flex flex-col lg:justify-between lg:items-end lg:gap-0 gap-[25px]">
            <h1 className="text-[36px] leading-[41px]">
              Aksincha bo’lsa, bu taklif siz uchun
            </h1>
            <Link
              href="#contacts"
              className={`
            max-w-[235px]
            w-full h-[50px] 
            flex 
            p-[1px] 
            justify-between 
        border-white
            border-[1px] 
            rounded-[25px]  
            z-10
           `}
            >
              <p className="m-auto">Taklifdan foydalanish</p>
              <span className="bg-white rounded-[25px] m-[1px] w-[43px] h-[43px] flex justify-center items-center">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNine;
