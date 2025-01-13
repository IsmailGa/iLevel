"use client";
import React, { useEffect, useState } from "react";
import { IconWallet, Paper, Profile, SquareTick } from "@/public/assets/icons.js";
import arrow from "@/assets/arrow_diagonal.svg";
import Image from "next/image";
import { createClient } from "contentful";
import Loading from "@/components/loading";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

type SectionFiveType = {
  id: string;
  title: string;
  highLighted: string;
  cardTitles: string[];
  description: string;
  buttonText: string;
};

const SectionFive = ({ setOpen }: SetOpenType) => {
  const [data, setData] = useState<SectionFiveType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("4p5b05yjRjYhBotQb7vvuj")
      .then((entry) => {
        const id = entry.fields.id as string || "5";
        const title = entry.fields.title as string || "Default Title";
        const highLighted = entry.fields.highLighted as string || "Default Highlight";
        const cardTitles = entry.fields.cardTitles as string[] || [];
        const description = entry.fields.description as string || "Default Description";
        const buttonText = entry.fields.buttonText as string || "Harid Qilish";

        setData({
          id,
          title,
          highLighted,
          cardTitles,
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
    <section
      className="sm:mt-[75px] mt-[65px] w-full flex flex-col sm:gap-[35px] gap-[25px]"
      id={data?.id}
    >
      <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[110%] max-w-[613px]">
        <span className="text-primary">{data?.highLighted}</span> {data?.title}
      </h1>
      {/* CARDS */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 xl:gap-[25px] md:gap-x-[25px] max-md:gap-[25px] max-sm:gap-[18px] items-center">
        {/* CARD ONE */}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px] p-[25px] flex flex-col justify-between lg:mt-0 lg:mb-[32px] md:mt-[-38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <IconWallet />
          </div>
          <p className="block md:text-[20px] text-[18px] leading-[110%]">
            {data?.cardTitles[0]}
          </p>
        </div>
        {/* CARD TWO */}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px] p-[25px] flex flex-col justify-between lg:mt-[32px] md:mt-[38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <Paper />
          </div>
          <p className="block md:text-[20px] text-[18px] leading-[110%]">
            {data?.cardTitles[1]}
          </p>
        </div>
        {/* CARD THREE */}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px] p-[25px] flex flex-col justify-between lg:mt-0 lg:mb-[32px] md:mt-[-38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <SquareTick />
          </div>
          <p className="block md:text-[20px] text-[18px] leading-[110%]">
            {data?.cardTitles[2]}
          </p>
        </div>
        {/* CARD FOUR */}
        <div className="border-primary h-[165px] bg-primary/10 border-[1px] rounded-[25px] p-[25px] flex flex-col justify-between lg:mt-[32px] md:mt-[38px]">
          <div className="block max-w-[32px] max-h-[32px]">
            <Profile />
          </div>
          <p className="block md:text-[20px] text-[18px] leading-[110%]">
            {data?.cardTitles[3]}
          </p>
        </div>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[25px] lg:gap-0">
        <p className="leading-[135%] md:text-[20px] text-[18px]">
          {data?.description}
        </p>
        <button
          onClick={() => setOpen(true)}
          className="justify-self-end max-md:justify-self-start flex items-center justify-between border-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] hover:bg-[rgba(255,255,255,0.1)] hover:border-primary transition-all duration-300 group"
        >
          <p className="text-white text-center px-[20px] text-[16px]">
            {data?.buttonText}
          </p>
          <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
            <Image src={arrow} alt="arrow_diagonal" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default SectionFive;