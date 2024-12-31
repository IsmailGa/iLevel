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
  return (
    <footer className="mt-[75px] pb-[30px] relative overflow-hidden">
      <Image src={rec} alt="rect" className="max-w-[292px] w-full absolute bottom-[-25%] z-[-1] left-[5%]" />
      <div className="w-full bg-gradient-to-r from-primary to-primary/50 h-[1px]"></div>
      <Container>
        <div className="mt-[65px] flex flex-col gap-[50px] ">
          {/* THE FIRST ROW */}
          <div className="flex justify-between ">
            <Image src={arrowUp} alt="arrow up" />

            {/* LINKS */}
            <ul className="lg:flex grid grid-cols-auto lg:gap-[45px] gap-1  uppercase font-[--pangram]">
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
            {/* CONTACT US LINK*/}
            <Link
              href="#contacts"
              className="max-w-[165px] w-full h-[50px] flex p-[1px] justify-between items-center border-white border-[1px] rounded-[25px]"
            >
              <p className="m-auto">Bog&apos;lanish</p>
              <span className="bg-white rounded-[25px] m-[1px] w-[43px] h-[43px] flex justify-center items-center">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
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
            <div className="self-end justify-seld-end ">
              <h1
                className={
                  "uppercase text-[16px] font-[500]  " + manropeB.className
                }
              >
                Разработано ABC
              </h1>
            </div>
          </div>
        </div>
      </Container>
      <Image src={lines} alt="lines" className="max-w-[411px] w-full absolute bottom-[-30%] z-[-1] right-0" />
    </footer>
  );
};

export default Footer;
