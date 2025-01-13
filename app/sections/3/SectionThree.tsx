import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrow from "@/assets/arrow_diagonal.svg";
import { createClient } from "contentful";
import Loading from "@/components/loading";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

type SectionTwoType = {
  id: string;
  title: string;
  highLight?: string;
  descriptionOne: string;
  descriptionTwo: string;
  buttonText: string;
};

const SectionThree = ({ setOpen }: SetOpenType) => {
  const [data, setData] = useState<SectionTwoType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("1ZISQhYXIMqhizQfz3Mp6O")
      .then((entry) => {
        const id = entry.fields.id as string || "2";
        const title = entry.fields.title as string || "Title";
        const highLight = entry.fields.highLighted as string || "Default Highlight";
        const descriptionOne = entry.fields.descriptionOne as string || "Default Text";
        const descriptionTwo = entry.fields.descriptionTwo as string || "Default Text";
        const buttonText = entry.fields.buttonText as string || "Harid Qilish";

        setData({
          id,
          title,
          highLight,
          descriptionOne,
          descriptionTwo,
          buttonText
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
      className="mt-[75px] flex-col flex sm:gap-[35px] gap-[25px]"
      id={data?.id}
    >
      {/* TITLE */}
      <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[110%]">
        <span className="text-primary ">{data?.highLight}</span> {data?.title}
      </h1>
      {/* CARDS */}
      <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-[25px] gap-[18px]">
        {/* FIRST CARD */}
        <div className="border-primary border-[1px] rounded-[25px] bg-primary/10 p-[25px] grid gap-[25px]">
          <h2 className="text-primary md:text-[28px] text-[24px]">(1)</h2>
          <p className="md:text-[20px] text-[18px] leading-[135%]">
            {data?.descriptionOne}
          </p>
        </div>
        {/* SECOND CARD */}
        <div className="border-primary border-[1px] rounded-[25px] bg-primary/10 p-[25px] grid gap-[25px]">
          <h2 className="text-primary md:text-[28px] text-[24px]">(2)</h2>
          <p className="md:text-[20px] text-[18px] leading-[135%]">
            {data?.descriptionTwo}
          </p>
        </div>
      </div>
      {/* CARDS */}
      {/* LINK */}
      <button
        onClick={() => setOpen(true)}
        className="self-start flex items-center justify-between border-white border-[1px] hover:bg-[rgba(255,255,255,0.1)] hover:border-primary rounded-[25px] p-[3px] sm:h-[50px] h-[44px] transition-all duration-300 group"
      >
        <p className="text-white text-center px-[20px] text-[16px]">
          {data?.buttonText}
        </p>
        <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
          <Image src={arrow} alt="arrow_diagonal" />
        </span>
      </button>
    </section>
  );
};

export default SectionThree;
