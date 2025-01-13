"use client";
import React, { useEffect, useState } from "react";
import thousand from "@/assets/thousand-plus.svg";
import arrow from "@/assets/arrow_diagonal_white.svg";
import Image from "next/image";
import { createClient } from "contentful";
import Loading from "@/components/loading";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

type SectionEightType = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
};

const SectionEight = ({ setOpen }: SetOpenType) => {
  const [data, setData] = useState<SectionEightType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("4Q1dPGtvqNZrnBm6bNQDfm") // Replace with your Contentful entry ID
      .then((entry) => {

        const id = entry.fields.id as string || "8";
        const title = entry.fields.title as string || "Default Title";
        const description = entry.fields.description as string || "Default Description";
        const buttonText = entry.fields.buttonText as string || "Ro’yxatdan o’tish";

        setData({
          id,
          title,
          description,
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
    <section className="w-full sm:mt-[75px] mt-[65px] flex flex-col" id={data?.id}>
      <div className="bg-primary rounded-[25px] md:p-[35px] p-[25px]">
        <div className="flex flex-col sm:gap-[25px] gap-[18px] relative">
          <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[110%] max-w-[540px]">
            {data?.title}
          </h1>

          <div className="flex flex-col lg:flex-row sm:gap-[25px] gap-[18px] lg:gap-[200px] lg:items-end justify-between items-start">
            <p className="md:text-[20px] text-[18px] leading-[135%] max-w-[735px]">
              {data?.description}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="justify-self-end z-[50] max-lg:justify-self-start flex flex-shrink-0 items-center justify-between bg-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
            >
              <p className="text-primary text-center px-[20px] text-[16px] uppercase">
                {data?.buttonText}
              </p>
              <span className="flex items-center justify-center bg-primary rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </button>
          </div>

          <div className="absolute md:h-[145px] h-[110px] lg:h-full lg:right-[-25px] lg:top-0 top-[25%] z-1">
            <Image
              src={thousand}
              alt="thousand bg"
              className="h-full w-auto"
            />
          </div>
        </div>  
      </div>
    </section>
  );
};

export default SectionEight;