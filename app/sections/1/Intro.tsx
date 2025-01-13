import { useState, useEffect } from "react";
import Image from "next/image";
import banner from "@/assets/Decor.svg";
import banner_two from "@/assets/Decor2.svg";
import banner_three from "@/assets/Decor3.svg";
import iPhone_text from "@/assets/iPhone_16_text.svg";
import iPhone from "@/assets/iPhone_banner.png";
import arrow from "@/assets/arrow_diagonal_white.svg";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Loading from "@/components/loading";

type SetOpenType = {
  setOpen: (value: boolean) => void;
};

type EntryType = {
  title: string;
  // eslint-disable-next-line
  description: any;
  buttonText: string;
};

const Intro = ({ setOpen }: SetOpenType) => {
  const [entry, setEntry] = useState<EntryType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("6WW8MCmccX8GOUPUuIBWyX")
      .then((entry) => {
        const title = entry.fields.title || "Default Title";
        const description = entry.fields.description || null;
        const buttonText = entry.fields.buttonText || "Default Button Text";

        if (typeof title === "string" && typeof buttonText === "string") {
          setEntry({ title, description, buttonText });
        } else {
          console.error("Invalid data format:", { title, description, buttonText });
          setError("Invalid data format");
        }
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
      className="w-full flex flex-col items-center xl:pt-[175px] md:pt-[160px] xs:pt-[130px] pt-[18vw] relative justify-center"
      id="aboutus"
    >
      <div className="absolute sm:top-[2%] top-[1%] w-full z-[-1]">
        <Image src={banner} alt="banner" className="hidden lg:block w-full" />
        <Image src={banner_two} alt="banner" className="hidden sm:block lg:hidden w-full" />
        <Image src={banner_three} alt="banner" className="block sm:hidden w-full" />
      </div>
      <div className="relative bg-primary w-full 2xl:h-[777px] xl:h-[750px] lg:h-[700px] md:h-[650px] sm:h-[600px] h-[450px] rounded-[35px] p-[24px] md:p-[35px] flex flex-col items-center">
        <div className="absolute w-full z-[3] lg:w-[94%] md:w-[105%] lg:top-[30%] md:top-[35%] sm:top-[55%] md:translate-y-[0] top-[50%] translate-y-[-50%] max-md:w-[114%]">
          <Image src={iPhone} alt="iPhone 16" className="w-full object-contain" />
        </div>
        <div className="relative flex flex-col justify-between h-full w-full">
          <p className="self-start text-white sm:text-[28px] sm:max-w-[755px] max-w-[350px] text-[18px] leading-[120%]">
            <span className="text-[37px]">{entry?.title || "No title available"}</span>
            <br />
            <br />
            {entry?.description && documentToReactComponents(entry.description)}
          </p>
          <div className="absolute md:bottom-[35%] bottom-[35%] translate-y-[60%] z-[2] flex items-center justify-center">
            <Image src={iPhone_text} alt="iPhone 16 Text" className="w-full h-auto object-contain" />
          </div>
          <button
            onClick={() => setOpen(true)}
            className="self-end md:self-end flex items-center justify-between bg-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
          >
            <p className="text-primary text-center px-[20px] text-[16px]">{entry?.buttonText || "Default Button"}</p>
            <span className="flex items-center justify-center bg-primary rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image src={arrow} alt="arrow_diagonal" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;