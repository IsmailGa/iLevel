"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import calculator from "@/assets/calculator.png";
import arrow from "@/assets/arrow_diagonal.svg";
import { createClient } from "contentful";
import Loading from "@/components/loading";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

type SectionFourType = {
  id: string;
  highLight?: string;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
};

const SectionFour = ({ setOpen }: SetOpenType) => {
  const [data, setData] = useState<SectionFourType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("7puSCmbe3YpUGHznwQGqlm")
      .then((entry) => {

        const id = entry.fields.id as string || "4";
        const highLight = entry.fields.highLighted as string || "Default Highlight";
        const title = entry.fields.title as string || "Default Title";
        const subTitle = entry.fields.subTitle as string || "Default Subtitle";
        const description = entry.fields.description as string || "Default Description";
        const buttonText = entry.fields.buttonText as string || "Harid Qilish";

        setData({
          id,
          highLight,
          title,
          subTitle,
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
    <section className="sm:mt-[95px] mt-[65px] w-full flex-col flex" id={data?.id}>
      <div className="relative lg:flex-row xl:pl-[500px] lg:pl-[300px] sm:pl-[100px] flex flex-col w-full h-full items-center justify-end">
        {/* LEFT SIDE */}
        <div
          style={{ backgroundImage: `url(${calculator.src})` }}
          className="absolute z-[-1] 2xl:left-0 xl:h-[450px] md:h-[430px] sm:h-[320px] h-[300px] bg-contain bg-center xl:left-[-30px] sm:left-[-130px] left-[-40px] sm:opacity-[1] opacity-[0.75] lg:top-[50%] top-[-20px] lg:translate-y-[-50%] bg-no-repeat w-[auto] aspect-square "
        ></div>
        {/* RIGHT SIDE */}
        <div className="flex-col text-right items-end flex sm:gap-[35px] gap-[25px] max-w-[720px]">
          <h1 className="font-semiBold md:text-[36px] max-md:text-[28px] font-normal leading-[110%] max-w-[614px]">
            <span className="text-primary">{data?.highLight}</span> {data?.title}
          </h1>
          <div className="w-full bg-primary rounded-[25px] flex flex-col gap-[25px] md:p-[35px] p-[25px]">
            <h1 className="text-[22px] font-semiBold text-start max-w-[596px] leading-[110%]">
              {data?.subTitle}
            </h1>
            <p className="md:text-[20px] max-md:max-lg:text-[18px] leading-[135%] flex flex-col gap-[25px] font-medium max-w-[596px] text-start">
              {data?.description}
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="self-end flex items-center justify-between border-white border-[1px] hover:bg-[rgba(255,255,255,0.1)] hover:border-primary rounded-[25px] p-[3px] sm:h-[50px] h-[44px] transition-all duration-300 group"
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
    </section>
  );
};

export default SectionFour;