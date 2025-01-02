"use client";
import Image from "next/image";
import Container from "./container";
import arrow from "@/assets/arrow_diagonal.svg";
import arrowUp from "@/public/assets/arrow_up.svg";
import {
  TelegramIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/public/assets/icons";
import rec from "@/public/assets/rectangle.png";
import lines from "@/public/assets/2d_lines.svg";
import React from "react";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manropeM = Manrope({ subsets: ["latin"], weight: "400" });
const manropeB = Manrope({ subsets: ["latin"], weight: "500" });

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-[75px] relative pb-[30px] overflow-hidden">
      <div className="w-full bg-gradient-to-r from-primary to-primary/50 h-[1px]"></div>
      <Container>
        <div className="mt-[65px] flex flex-col gap-[50px] ">
          {/* THE FIRST ROW */}
          <div className="flex w-full justify-between relative">
            <div className="justify-self-start self-start">
              <div className="w-[65px] md:w-full">
                <Image
                  src={arrowUp}
                  alt="arrow up"
                  className="cursor-pointer "
                  onClick={handleClick}
                />
              </div>
              <div
                className="
                md:w-[292px]
                w-[175px] 
                h-full 
                absolute 
                z-[-1] 
                left-[0%]
                "
              >
                <Image src={rec} alt="rect" className="" />
              </div>
            </div>

            {/* LINKS */}
            <ul className="flex gap-[45px] max-sm:max-md:gap-[25px] max-sm:max-md:flex-col max-sm:max-md:items-center uppercase font-[--pangram]">
              <li>
                <Link href="#aboutus">Biz haqimizda</Link>
              </li>
              <li>
                <Link href="#catalog">Catalog</Link>
              </li>
              <li>
                <Link href="#promotion">Aksiyalar</Link>
              </li>
              <li>
                <Link href="#contacts">Kontaktalar</Link>
              </li>
            </ul>
            <div className=""></div>
          </div>
          {/* THE SECOND ROW */}
          <div className="w-full flex justify-between">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-[35px]">
              <ul className="flex gap-[15px]">
                {/* TELEGRAM */}
                <li className="border-[1px] border-white p-[11px] backdrop-blur-sm bg-white/10 rounded-full">
                  <Link
                    href="telegram.org"
                    className="flex justify-center items-center"
                  >
                    <TelegramIcon />
                  </Link>
                </li>
                {/* INSTAGRAM */}
                <li className="border-[1px] border-white p-[11px] backdrop-blur-sm bg-white/10 rounded-full">
                  <Link
                    href="instagram.com"
                    className="flex justify-center items-center"
                  >
                    <InstagramIcon />
                  </Link>
                </li>
                {/* YOUTUBE */}
                <li className="border-[1px] border-white p-[11px] backdrop-blur-sm bg-white/10 rounded-full">
                  <Link
                    href="youtube.com"
                    className="flex justify-center items-center"
                  >
                    <YoutubeIcon />
                  </Link>
                </li>
              </ul>
              <h1
                className={
                  "text-white/50 uppercase font-[400] leading-[21px] " +
                  manropeM.className
                }
              >
                © ilevel - 2025, Все права защищены
              </h1>
            </div>
            {/* RIGHT SIDE */}
            <div className="flex flex-col items-end gap-[35px]">
              {/* CONTACT US LINK*/}
              <Link
                href="/"
                className="self-start flex items-center justify-between border-white border-[1px] rounded-[25px] p-[3px] sm:h-[50px] h-[44px] group"
              >
                <p className="text-white text-center px-[20px] text-[16px]">
                  Bog&apos;lanish
                </p>
                <span className="flex items-center justify-center bg-white rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
                  <Image src={arrow} alt="arrow_diagonal" />
                </span>
              </Link>
              <h1
                className={
                  "uppercase text-[16px] font-[500]  " + manropeB.className
                }
              >
                Разработано VBS
              </h1>
            </div>
          </div>
        </div>
      </Container>
      <Image
        src={lines}
        alt="lines"
        className="max-w-[411px] w-full absolute bottom-[-30%] z-[-1] lg:right-[80px] md:right-10 sm:right-5 right-2"
      />
    </footer>
  );
};

export default Footer;
