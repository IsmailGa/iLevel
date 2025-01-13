"use client";
import React, { useEffect, useState } from "react";
import arrow from "@/assets/arrow_diagonal.svg";
import Image from "next/image";
import { createClient } from "contentful";
import Loading from "@/components/loading";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

type SectionNineType = {
  id: string;
  title: string;
  highLighted: string;
  listItems: string[];
  rightTitle: string;
  buttonText: string;
};

const SectionNine = ({ setOpen }: SetOpenType) => {
  const [data, setData] = useState<SectionNineType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("5xaJ3gF6iFhjU9FEhMnwGx")
      .then((entry) => {
        const id = entry.fields.id as string || "9";
        const title = entry.fields.title as string || "Default Title";
        const highLighted = entry.fields.highLighted as string || "Default Highlight";
        const listItems = entry.fields.listItems as string[] || [];
        const rightTitle = entry.fields.rightTitle as string || "Default Right Title";
        const buttonText = entry.fields.buttonText as string || "Taklifdan foydalanish";

        setData({
          id,
          title,
          highLighted,
          listItems,
          rightTitle,
          buttonText,
        });
      })
      .catch((err) => {
        console.error("Error fetching data from Contentful:", err);
        setError("Error loading data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center h-[450px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="sm:mt-[75px] mt-[65px] flex flex-col w-full" id={data?.id}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {/* RIGHT */}
        <div className="flex flex-col gap-[35px]">
          {/* TITLE */}
          <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[135%]">
            <span className="text-primary">{data?.highLighted}</span> {data?.title}
          </h1>
          {/* LIST */}
          <ul className="flex flex-col gap-[30px]">
            {/* ELEMENT 1 */}
            {data?.listItems.map((item, index) => (
              <li key={index} className="flex items-center gap-[30px]">
                <div className="relative inline-block p-[1px] bg-gradient-to-r from-primary rounded-full">
                  <div className="flex items-center justify-center bg-[#070529] rounded-full md:w-[100px] md:h-[100px] w-[65px] h-[65px]">
                    <span className="text-primary md:text-[36px] text-[28px] font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <p className="leading-[135%] md:text-[20px] text-[18px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* LEFT */}
        <div className="relative inline-block p-[1px] bg-gradient-to-r from-primary rounded-[25px]">
          <div className="p-[30px] bg-[#070529] rounded-[25px] w-full h-full flex flex-col lg:justify-between lg:items-end">
            <h1 className="md:text-[36px] text-[28px] leading-[135%]">
              {data?.rightTitle}
            </h1>

            <button
              onClick={() => setOpen(true)}
              className="justify-self-end max-lg:max-xl:self-end max-lg:max-xl: mt-[100px] z-[50] max-lg:justify-self-start flex items-center justify-between border-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] hover:bg-[rgba(255,255,255,0.1)] hover:border-primary transition-all duration-300 group"
            >
              <p className="text-white text-center px-[20px] text-[16px]">
                {data?.buttonText}
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