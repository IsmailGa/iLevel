"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Container from "./container";
import logo from "@/assets/logo_white.png";
import arrow from "@/assets/arrow_diagonal.svg";
import decor_lines from "@/public/assets/2d_lines.svg";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
  
    return () => {
      document.documentElement.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <div className="py-[14px] sm:py-[18px] md:py-[24px] w-full flex justify-between items-center">
      <Container>
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link className="z-[60]" href="/">
            <Image
              src={logo}
              alt="logo"
              className="max-w-[108px] sm:max-w-[140px] h-auto"
            />
          </Link>

          {/* BURGER BUTTON */}
          <div
            className="lg:hidden flex items-center justify-center cursor-pointer z-[60]"
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className="sm:w-[48px] sm:h-[48px] w-[36px] h-[36px] rounded-full border-[1px] border-white flex items-center justify-center">
              <div className="flex flex-col justify-between items-center gap-[5px] transition-transform duration-300">
                <span
                  className={`block sm:w-[24px] w-[16px] h-[2px] bg-white transition-all ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block sm:w-[24px] w-[16px] h-[2px] bg-white transition-all ${
                    open ? "rotate-[45deg] translate-y-[1px]" : ""
                  }`}
                ></span>
                <span
                  className={`block sm:w-[24px] w-[16px] h-[2px] bg-white transition-all ${
                    open ? "rotate-[-45deg] -translate-y-[6px]" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>

          {/* MOBILE NAV */}
          <div
            onClick={() => setOpen((prev) => !prev)}
            className={`fixed flex top-0 left-0 h-full w-full bg-[#070529] z-[50] flex-col items-center justify-center gap-[25px] transition-all duration-140 ${
              open ? "visibile opacity-1" : "invisible opacity-0"
            } lg:hidden`}
          >
            <Container>
              <ul className="text-white font-[--pangram] flex flex-col w-full gap-[24px] items-center">
                <li className="flex w-full">
                  <Link
                    className="flex flex-1 h-[50px] justify-center items-center border-white border-[1px] rounded-[25px]"
                    href="#aboutus"
                  >
                    Biz haqimizda
                  </Link>
                </li>
                <li className="flex w-full">
                  <Link
                    className="flex flex-1 h-[50px] justify-center items-center border-white border-[1px] rounded-[25px]"
                    href="#catalog"
                  >
                    Catalog
                  </Link>
                </li>
                <li className="flex w-full">
                  <Link
                    className="flex flex-1 h-[50px] justify-center items-center border-white border-[1px] rounded-[25px]"
                    href="#promotion"
                  >
                    Aksiyalar
                  </Link>
                </li>
                <li className="flex w-full">
                  <Link
                    className="flex flex-1 h-[50px] justify-center items-center border-white border-[1px] rounded-[25px]"
                    href="#contacts"
                  >
                    Kontaktalar
                  </Link>
                </li>
                <li className="flex w-full">
                  <Link
                    href="#contacts"
                    className="relative flex flex-1 h-[50px] p-[3px] items-center border-white border-[1px] rounded-[25px]"
                  >
                    <p className="flex flex-1 justify-center items-center px-[20px]">
                      Bog&apos;lanish
                    </p>
                    <span className="absolute bg-white rounded-[25px] w-[43px] h-[43px] shrink-0 flex justify-center items-center right-[3px]">
                      <Image src={arrow} alt="arrow_diagonal" />
                    </span>
                  </Link>
                </li>
              </ul>
            </Container>

            <div className="absolute w-full md:bottom-[-230px] sm:bottom-[-180px] xs:bottom-[-130px] bottom-[-22vw] opacity-[50%]">
              <Container>
                <Image className="w-full" src={decor_lines} alt="decor_lines" />
              </Container>
            </div>
            
          </div>

          {/* NAV LINKS */}
          <div className={`lg:flex hidden`}>
            <ul className="uppercase text-white font-[--pangram] flex flex-row gap-[5px]">
              <li>
                <Link
                  className="flex h-[50px] px-[18px] items-center border-transparent hover:border-primary border-[1px] rounded-[25px] transition-all duration-300"
                  href="#aboutus"
                >
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-[50px] px-[18px] items-center border-transparent hover:border-primary border-[1px] rounded-[25px] transition-all duration-300"
                  href="#catalog"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-[50px] px-[18px] items-center border-transparent hover:border-primary border-[1px] rounded-[25px] transition-all duration-300"
                  href="#promotion"
                >
                  Aksiyalar
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-[50px] px-[18px] items-center border-transparent hover:border-primary border-[1px] rounded-[25px] transition-all duration-300"
                  href="#contacts"
                >
                  Kontaktalar
                </Link>
              </li>
            </ul>
          </div>
          {/* CONTACT US LINK */}
          <Link
            href="#contacts"
            className="lg:flex hidden h-[50px] p-[3px] items-center border-white hover:border-primary hover:bg-[rgba(255,255,255,0.1)] border-[1px] rounded-[25px] mt-5 md:mt-0 transition-all duration-30 group"
          >
            <p className="flex justify-center items-center px-[20px]">
              Bog&apos;lanish
            </p>
            <span className="bg-white rounded-[25px] w-[43px] h-[43px] shrink-0 flex justify-center items-center">
              <Image
                src={arrow}
                alt="arrow_diagonal"
                className="group-hover:rotate-[45deg] transition-all duration-300"
              />
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
