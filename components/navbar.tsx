"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Container from "./container";
import logo from "@/assets/logo_white.png";
import arrow from "@/assets/arrow_diagonal.svg";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.classList.add("body-no-scroll");
    } else {
      body.classList.remove("body-no-scroll");
    }
    return () => {
      body.classList.remove("body-no-scroll");
    };
  }, [open]);

  return (
    <div className="relative mt-[35px] w-full flex justify-center items-center">
      <Container>
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className={`max-w-[140px] h-auto z-[60] ${
                open ? "fixed top-[35px] left-5" : ""
              }`}
            />
          </Link>

          {/* BURGER MENU */}
          <div
            className={`md:hidden flex items-center justify-center cursor-pointer z-[60] ${
              open ? "fixed top-[35px] right-5" : ""
            }`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className="w-[36px] h-[36px] rounded-full border-[1px] border-white flex items-center justify-center">
              <div className="flex flex-col justify-between items-center gap-[5px] transition-transform duration-300">
                <span
                  className={`block w-[16px] h-[2px] bg-white transition-all ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-[16px] h-[2px] bg-white transition-all ${
                    open ? "rotate-[45deg] translate-y-[1px]" : ""
                  }`}
                ></span>
                <span
                  className={`block w-[16px] h-[2px] bg-white transition-all ${
                    open ? "rotate-[-45deg] -translate-y-[6px]" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>

          {/* NAV LINKS */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-[#070529] z-50 flex flex-col items-center justify-сenter gap-[25px] transform transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            } md:static md:flex md:flex-row md:gap-[45px] md:translate-x-0 md:bg-transparent`}
          >
            <ul className="uppercase text-white font-[--pangram] flex flex-col md:flex-row md:gap-[45px] md:items-center sm:translate-x-0 md:transalte-x-[100%]">
              <li onClick={() => setOpen(false)}>
                <Link href="#aboutus">Biz haqimizda</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="#catalog">Catalog</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="#promotion">Aksiyalar</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="#contacts">Kontaktalar</Link>
              </li>
            </ul>

            {/* CONTACT US LINK */}
            <Link
              href="#contacts"
              className="max-w-[165px] w-full h-[50px] p-[1px] flex justify-between items-center border-white border-[1px] rounded-[25px] mt-5 md:mt-0"
            >
              <p className="flex justify-center items-center w-full">
                Bog&apos;lanish
              </p>
              <span className="bg-white rounded-[25px] m-[1px] w-[43px] h-[43px] flex justify-center items-center">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
