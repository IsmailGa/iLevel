"use client";
import React, { useState } from "react";

type Question = {
  question: string;
  answer: string;
};

const SectionTen: React.FC = () => {
  const questions: Question[] = [
    {
      question: "Necha oygacha bo‘lib to‘lashga xarid qilish mumkin?",
      answer:
        "Telefonlarni 3 oydan 12 oygacha hech qanday foizlarsiz bo‘lib to‘lashga beramiz",
    },
    {
      question:
        "Telefonlarni 3 oydan 12 oygacha hech qanday foizlarsiz bo’lib to’lashga beramiz",
      answer:
        "Bo‘lib to‘lash nafaqat telefonlar uchun, balki boshqa texnika va gadjetlar uchun ham mavjud.",
    },
    {
      question: "Telefonlarga kafolat berasizlarmi?",
      answer:
        "Bo‘lib to‘lash nafaqat telefonlar uchun, balki boshqa texnika va gadjetlar uchun ham mavjud.",
    },
    {
      question: "Do’koniglarni manzili qayerda joylashgan??",
      answer:
        "Bo‘lib to‘lash nafaqat telefonlar uchun, balki boshqa texnika va gadjetlar uchun ham mavjud.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col w-full mt-[75px] gap-[35px]" id="faq">
      <h1 className="text-[36px] leading-[41px] mb-4">
        Eng ko‘p so‘raladigan savollar:
      </h1>

      {questions.map((item, index) => (
        <div key={index} className="flex flex-col w-full">
          {/* SEPARATION */}
          <div className="w-full h-[2px] bg-gradient-to-r from-primary"></div>

          {/* QUESTION CARDS */}
          <div className="w-full flex flex-col">
            {/* QUESTION */}
            <div
              onClick={() => toggleDropdown(index)}
              className="cursor-pointer flex justify-between items-center mt-[33px]"
            >
              <h2
                className={`text-[28px] leading-[32px] transition-transform duration-500 ease-in-out ${
                  openIndex === index ? "text-primary" : ""
                }`}
              >
                {item.question}
              </h2>

              {/* LINE ICON */}
              <div className="relative w-[30px] h-[20px] flex items-center justify-center">
                {/* UPPER LINE */}
                <span
                  className={`absolute w-[30px] h-[2px] transition-transform duration-300 ${
                    openIndex === index ? "rotate-0 bg-primary" : "bg-white"
                  }`}
                ></span>
                {/* UNDER LINE */}
                <span
                  className={`absolute w-[30px] h-[2px] transition-all duration-300 ${
                    openIndex === index ? "opacity-0" : "rotate-90 bg-white"
                  }`}
                ></span>
              </div>
            </div>

            {/* ANSWER */}
            <div
              className={`relative overflow-hidden transition-[height] duration-500 ease-in-out ${
                openIndex === index ? "h-auto" : "h-0"
              }`}
              style={{ position: "relative" }}
            >
              <p
                className={`mt-[45px] transition-opacity duration-450 leading-[22px] text-[20px]  ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionTen;
