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
      className="w-full flex flex-col items-center xl:pt-[175px] md:pt-[160px] xs:pt-[130px] pt-[18vw] relative justify-center"
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

      <div className="relative bg-primary w-full 2xl:h-[777px] xl:h-[750px] lg:h-[700px] md:h-[650px] sm:h-[600px] h-[450px] rounded-[35px] p-[24px] md:p-[35px] flex flex-col items-center">
        {/* Фоновые линии */}

        {/* iPhone */}
        <div className="absolute w-full z-[3] lg:w-[94%] md:w-[105%] lg:top-[35%] md:top-[35%] md:translate-y-[0] top-[50%] translate-y-[-50%] max-md:w-[114%]">
          <Image
            src={iPhone}
            alt="iPhone 16"
            className="w-full object-contain"
          />
        </div>
        <div className="relative flex flex-col justify-between h-full w-full">
          <p className="self-start text-white sm:text-[28px] sm:max-w-[755px] max-w-[350px] text-[18px] leading-[120%]">
            <span className="text-[37px]">Va nihoyat!</span> 
            <br/>
            <br/>
            {title}
          </p>
          {/* Текст iPhone 16 */}
          <div className="absolute md:bottom-[35%] bottom-[35%] translate-y-[60%] z-[2] flex items-center justify-center">
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
            className="self-end md:self-end flex items-center justify-between bg-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
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