"use client";
import Image from "next/image";
import React, { useState } from "react";
import Container from "./container";
import logo from "@/assets/logo_white.png";
import arrow from "@/assets/arrow_diagonal.svg";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-[35px] h-[50px] w-full flex justify-center items-center">
      <Container>
        <div className="flex">
          <nav className="w-full flex justify-between items-center gap-0 md:gap-[20px]">
            {/* LOGO */}
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className={`max-w-[140px] h-auto md:static  ${
                  open ? "sm:fixed left-5 z-[60]" : ""
                } `}
              />
            </Link>
            <div
              className={` md:flex sm:hidden md:static${
                open
                  ? "sm:fixed sm:w-full sm:h-full sm:z-50 top-0 left-0 bottom-0 right-[50%]  sm:bg-[#070529] sm:flex sm:flex-col sm:justify-center sm:items-center"
                  : ""
              }`}
            >
              <ul
                className={`sm:container sm:flex md:flex-row md:gap-[45px] sm:gap-[25px] w-full sm:justify-center sm:items-center md:items-baseline md:justify-normal uppercase font-[--pangram] sm:flex-col`}
              >
                <li className="">
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
                className="max-w-[165px] w-full h-[50px] p-[1px] flex justify-between items-center border-white border-[1px] rounded-[25px]"
              >
                <p className="flex justify-center items-center w-full">
                  Bog&apos;lanish
                </p>
                <span className="bg-white rounded-[25px] m-[1px] w-[43px] h-[43px] flex justify-center items-center">
                  <Image src={arrow} alt="arrow_diagonal" />
                </span>
              </Link>
              {/* LIN */}
            </div>
          </nav>
          <div
            className={`right-5 md:static md:hidden ${
              open ? "fixed  z-[50]" : ""
            }`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className="w-[36px] h-[36px] rounded-full border-[1px] border-white flex items-center justify-center">
              <div className="flex flex-col justify-between items-center gap-[5px] transition-transform duration-300">
                <span
                  className={`block  w-[16px] h-[2px] bg-white ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block  w-[16px] h-[2px] bg-white ${
                    open ? "rotate-60 " : ""
                  }`}
                ></span>
                <span className={`block  w-[16px] h-[2px] bg-white `}></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
