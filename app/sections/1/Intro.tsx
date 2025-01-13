import Image from "next/image";
import React from "react";
import banner from "@/assets/Decor.svg";
import banner_two from "@/assets/Decor2.svg";
import banner_three from "@/assets/Decor3.svg";
import iPhone_text from "@/assets/iPhone_16_text.svg";
import iPhone from "@/assets/iPhone_banner.png";
import arrow from "@/assets/arrow_diagonal_white.svg";

import { createClient } from "contentful";

{/* Type */}
type SetOpenType = {
  setOpen: (value: boolean) => void;
};


const Intro = ({ setOpen }: SetOpenType) => {
  const [title, setTitle] = React.useState("Loading...");

  React.useEffect(() => {
    // alert(process.env.CONTENTFUL_SPACE_ID + "," + process.env.CONTENTFUL_ACCESS_TOKEN)
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "vjvocirbh2wg",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "tv3pq6fUrJ8kveaiDDz5D4rdx0hOjQLLGNZlE_WBc6k",
    });

    client
      .getEntry("6wVGQRyC2Jp9Bp00taEwDh") // entry_id
      .then((entry) => {
        const titleField = entry.fields.heroTitle;
        console.log(entry)
        if (typeof titleField === "string") {
          setTitle(titleField);
        } else {
          console.error("Title is not a string:", titleField);
          setTitle("Invalid title format");
        }
      })
      .catch((err) => {
        console.error("Error fetching data from Contentful:", err);
        setTitle("Error loading title");
      });
    }, []);

  return (
    <section
      className="w-full flex flex-col items-center xl:pt-[150px] md:pt-[130px] xs:pt-[110px] pt-[18vw] relative justify-center"
      id="aboutus"
    >
      <div className="absolute sm:top-[2%] top-[1%] w-full z-[-1]">
        {/* Первое изображение: отображается на lg и больше */}
        <Image src={banner} alt="banner" className="hidden lg:block w-full" />
        {/* Второе изображение: отображается от sm до lg */}
        <Image
          src={banner_two}
          alt="banner"
          className="hidden sm:block lg:hidden w-full"
        />
        {/* Третье изображение: отображается на sm и меньше */}
        <Image
          src={banner_three}
          alt="banner"
          className="block sm:hidden w-full"
        />
      </div>
      {/* Основной блок */}

      <div className="relative bg-primary w-full 2xl:h-[485px] xl:h-[440px] lg:h-[400px] md:h-[480px] xs:h-[455px] h-[385px] rounded-[35px] p-[24px] md:p-[35px] flex flex-col items-center">
        {/* Фоновые линии */}

        {/* iPhone */}
        <div className="absolute w-full z-[3] lg:w-[90%] md:w-[105%] lg:top-[-12%] md:top-[28%] md:translate-y-[0] xs:top-[50%] translate-y-[-50%] top-[58%] max-md:w-[114%]">
          <Image
            src={iPhone}
            alt="iPhone 16"
            className="w-full object-contain"
          />
        </div>
        <div className="relative flex lg:flex-row lg:items-end lg:gap-[200px] flex-col justify-between h-full w-full">
          <div className="flex flex-col gap-[12px] text-white md:text-[22px] text-[18px] md:max-w-[650px] max-w-[365px] leading-[120%]">
            <h4 className="md:text-[32px] text-[26px] font-semiBold">Va nihoyat!</h4> 
            <p>
              {title}
            </p>
          </div>
          {/* Текст iPhone 16 */}
          <div className="absolute xl:bottom-[60%] lg:bottom-[65%] xs:bottom-[35%] translate-y-[60%] bottom-[28%] z-[2] flex items-center justify-center">
            <Image
              src={iPhone_text}
              alt="iPhone 16 Text"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Текст и кнопка */}
          {/* <div className="relative z-[4] flex w-full h-full md:h-fit md:flex-row flex-col justify-between items-center"> */}
          {/* Текст */}

          {/* Кнопка */}
          <button
            onClick={() => setOpen(true)}
            className="self-end md:self-end flex flex-shrink-0 items-center justify-between bg-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
          >
            <p className="text-primary text-center px-[20px] text-[16px]">
              Harid qilish
            </p>
            <span className="flex items-center justify-center bg-primary rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </button>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;