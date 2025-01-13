"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Loading from "@/components/loading";

type Question = {
  question: string;
  answer: string;
};

type SectionTenType = {
  id: string;
  title: string;
  questions: Question[];
};

const SectionTen: React.FC = () => {
  const [data, setData] = useState<SectionTenType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("Zy4Zny3GTHr43nKTHdWyF")
      .then((entry) => {
        const id = entry.fields.id as string || "faq";
        const title = entry.fields.title as string || "Eng ko‘p so‘raladigan savollar";

        // Fetch linked Question entries
        const questions = entry.fields.questions as any[];
        const questionPromises = questions.map((question) =>
          client.getEntry(question.sys.id)
        );

        Promise.all(questionPromises)
          .then((questionEntries) => {
            const questionsData = questionEntries.map((q) => ({
              question: q.fields.question as string,
              answer: q.fields.answer as string,
            }));

            setData({
              id,
              title,
              questions: questionsData,
            });
          })
          .catch((err) => {
            console.error("Error fetching questions:", err);
            setError("Error loading questions");
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

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section className="flex flex-col w-full sm:mt-[75px] mt-[65px] gap-[35px]" id={data?.id}>
      <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[135%] mb-4">
        {data?.title}
      </h1>

      {data?.questions.map((item, index) => (
        <div key={index} className="flex flex-col w-full">
          {/* SEPARATION */}
          <div className="w-full h-[2px] bg-gradient-to-r from-primary"></div>

          {/* QUESTION CARDS */}
          <div className="w-full flex flex-col">
            {/* QUESTION */}
            <div
              onClick={() => toggleDropdown(index)}
              className="cursor-pointer flex justify-between items-center mt-[33px] gap-[44px] md:gap-0"
            >
              <h2
                className={`md:text-[28px] text-[22px] leading-[135%] transition-transform duration-500 ease-in-out ${openIndex === index ? "text-primary" : ""
                  }`}
              >
                {item.question}
              </h2>

              {/* LINE ICON */}
              <div className="relative md:w-[30px] md:h-[20px] w-[21px] h-[21px] flex items-center justify-center">
                {/* UPPER LINE */}
                <span
                  className={`absolute md:w-[30px] w-[21px] h-[2px] transition-transform duration-300 ${openIndex === index ? "rotate-0 bg-primary" : "bg-white"
                    }`}
                ></span>
                {/* UNDER LINE */}
                <span
                  className={`absolute md:w-[30px] w-[21px] h-[2px] transition-all duration-300 ${openIndex === index ? "opacity-0" : "rotate-90 bg-white"
                    }`}
                ></span>
              </div>
            </div>

            {/* ANSWER */}
            <div
              className={`relative overflow-hidden transition-[height] duration-500 ease-in-out ${openIndex === index ? "h-auto" : "h-0"
                }`}
              style={{ position: "relative" }}
            >
              <p
                className={`mt-[45px] transition-opacity duration-450 leading-[135%] md:text-[20px] text-[18px]  ${openIndex === index ? "opacity-100" : "opacity-0"
                  }`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full h-[2px] bg-gradient-to-r from-primary"></div>
    </section>
  );
};

export default SectionTen;