import Image from "next/image";
import React from "react";
import Container from "./container";
import logo from "@/assets/logo_white.png";
import arrow from "@/assets/arrow_diagonal.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mt-[35px] h-[50px] w-full flex justify-center items-center">
      <Container>
        <nav className=" w-full flex justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <Image src={logo} alt="logo" className="max-w-[140px] h-auto" />
          </Link>
          {/* LINSK */}
          <ul className="flex gap-[45px] uppercase font-[--pangram]">
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
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
