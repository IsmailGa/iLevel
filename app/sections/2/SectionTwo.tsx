/* eslint-disable */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import rect_one from "@/public/assets/section_two/rectangle_one.png";
import rect_two from "@/public/assets/section_two/rectangle_two.png";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Loading from "@/components/loading";

type SectionTwoType = {
  id: string;
  title: string;
  highLight?: string;
  subTitleOne: string;
  descriptionOne: string;
  subTitleTwo: string;
  descriptionTwo: string;
  reasonOneTitle: string;
  reasonOneDescription: Document;
  reasonTwoTitle: string;
  reasonTwoDescription: Document;
};

const SectionTwo = () => {
  const [data, setData] = useState<SectionTwoType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("6JA2VKxxzZm5h2aRm94qT5")
      .then((entry) => {
        // Explicitly type the fields
        const id = entry.fields.id as string || "2";
        const title = entry.fields.title as string || "Default Title";
        const highLight = entry.fields.highLighted as string || "Default Highlight";
        const subTitleOne = entry.fields.subTitleOne as string || "Default Subtitle 1";
        const descriptionOne = entry.fields.descriptionOne as string;
        const subTitleTwo = entry.fields.subTitleTwo as string || "Default Subtitle 2";
        const descriptionTwo = entry.fields.descriptionTwo as string;
        const reasonOneTitle = entry.fields.reasonOneTitle as string || "Default Reason 1 Title";
        const reasonOneDescription = entry.fields.reasonOneDescription as Document || null; // Rich Text field
        const reasonTwoTitle = entry.fields.reasonTwoTitle as string || "Default Reason 2 Title";
        const reasonTwoDescription = entry.fields.reasonTwoDescription as Document || null; // Rich Text field
        console.log("Description One:", data?.descriptionOne);
        setData({
          id,
          title,
          highLight,
          subTitleOne,
          descriptionOne,
          subTitleTwo,
          descriptionTwo,
          reasonOneTitle,
          reasonOneDescription,
          reasonTwoTitle,
          reasonTwoDescription,
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
      <div className="flex flex-col w-full h-full items-center">
        {/* LEFT SIDE */}
        <div className="flex-col flex sm:gap-[35px] gap-[25px] w-full">
          <h1 className="font-semiBold md:text-[36px] max-md:text-[28px] font-normal leading-[110%] max-w-[614px]">
            <span className="text-primary">{data?.highLight}</span> {data?.title}
          </h1>
          <div className="w-full flex flex-col gap-[25px]">
            <div className="bg-primary md:p-[35px] p-[25px] rounded-[25px] flex flex-col gap-[15px]">
              <span className="font-semiBold md:text-[22px] max-md:max-lg:text-[20px]">
                {data?.subTitleOne}
              </span>
              <p className="md:text-[20px] w-full max-md:max-lg:text-[18px] font-medium max-w-[720px] leading-[135%]">
                {data?.descriptionOne}
              </p>
            </div>
            <div className="bg-primary md:p-[35px] p-[25px] rounded-[25px] flex flex-col gap-[15px]">
              <span className="font-semiBold md:text-[22px] max-md:max-lg:text-[20px]">
                {data?.subTitleTwo}
              </span>
              <p className="md:text-[20px] w-full max-md:max-lg:text-[18px] font-medium max-w-[720px] leading-[135%]">
                {data?.descriptionTwo}
              </p>
            </div>

            <div className="relative grid lg:grid-cols-2 grid-cols-1 items-stretch gap-[25px]">
              <Image
                src={rect_one}
                alt="rect one"
                className="z-[-10] absolute bottom-0 left-0 lg:translate-x-[-20%] lg:translate-y-[30%] translate-x-[-20%] translate-y-[-40%]"
              />
              <div className="flex flex-col h-full min-h-[196px] border-primary border-[1px] bg-primary/10 backdrop-blur-lg md:p-[35px] p-[25px] gap-[15px] rounded-[25px]">
                <span className="font-semiBold text-primary text-[22px] leading-[135%]">
                  {data?.reasonOneTitle}
                </span>
                <p className="text-[18px] font-normal">
                  {data?.reasonOneDescription && documentToReactComponents(data.reasonOneDescription)}
                </p>
              </div>
              <div className="flex flex-col h-full min-h-[196px] border-primary border-[1px] bg-primary/10 backdrop-blur-lg md:p-[35px] p-[25px] gap-[15px] rounded-[25px]">
                <span className="font-semiBold text-primary text-[22px] leading-[135%]">
                  {data?.reasonTwoTitle}
                </span>
                <p className="text-[18px] font-normal">
                  {data?.reasonTwoDescription && documentToReactComponents(data.reasonTwoDescription)}
                </p>
              </div>
              <Image
                src={rect_two}
                alt="rect two"
                className="z-[-10] absolute bottom-0 right-0 translate-x-[30%] translate-y-[20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
