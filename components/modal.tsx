"use client";
import React, { FormEvent, useEffect } from "react";
import Image from "next/image";
import arrow from "@/assets/arrow_diagonal_white.svg";
import formDecor from "@/public/assets/form_decor.svg";
import Container from "./container";

const Modal = ({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Пожалуйста, проверьте, что все поля заполнены корректно!");
    }
  };

  if (!open) return null;

  useEffect(() => {
    if (open) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "static";
    }
    return () => {
      document.body.style.position = "static";
    };
  }, [open]);

  const handleClick = () => {
    setOpen(false);
    document.body.style.position = "static";
  };

  return (
    <div className="fixed inset-0 bg-[#070529] w-full flex justify-center items-center z-[100]">
      <Container>
        <div className="flex flex-col gap-[10px]">
          <button
            onClick={handleClick}
            className="w-[36px] h-[36px] flex justify-center items-center border-[1px] border-white rounded-full"
          >
            <span className="absolute w-[24px] h-[2px] bg-white rotate-[45deg]"></span>
            <span className="absolute w-[24px] h-[2px] bg-white rotate-[-45deg]"></span>
          </button>

          <div className="grid bg-primary lg:grid-cols-2 grid-cols-1 items-center md:gap-[35px] gap-[25px] md:p-[35px] p-[25px] rounded-[25px] w-full">
            {/* LEFT SIDE DESCRIPTION */}
            <div className="flex flex-col md:gap-[45px] lg:gap-[75px] gap-[25px] relative">
              <h1 className="md:text-[36px] text-[28px] leading-[135%]">
                Yordam kerakmi? Bizning mutaxassislar javob berishga tayyor.
              </h1>
              <div className="absolute top-5 bottom-5 w-full">
                <Image src={formDecor} alt="form decor" />
              </div>
              <p className="md:text-[20px] text-[18px] leading-[135%]">
                Formani to‘ldiring, va bizning mutaxassislar siz bilan
                bog‘lanishadi hamda qiziqtirayotgan savollar bo‘yicha
                konsultatsiya berishadi.
              </p>
            </div>
            {/* RIGHT SIDE FORM */}
            <div className="flex flex-col w-full">
              <form
                action=""
                className="flex flex-col gap-[15px]"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-0 text-[18px] leading-[135%] w-full px-[25px] py-[15px] rounded-[25px] outline-0 bg-white text-black placeholder-primary"
                  placeholder="Ismi sharifingiz"
                  required
                />
                <input
                  type="tel"
                  name="number"
                  id="number"
                  className="border-0 text-[18px] leading-[135%] w-full px-[25px] py-[15px] rounded-[25px] outline-0 bg-white text-black placeholder-primary"
                  placeholder="Telefon raqamingiz  (+998 XX XXX-XX-XX)"
                  pattern="\+998[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                  required
                />
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="border-0 text-[18px] leading-[135%] w-full px-[25px] py-[15px] rounded-[25px] outline-0 bg-white text-black placeholder-primary"
                  placeholder="Shahringiz yoki yashash joyingiz"
                  required
                />
                <button className="bg-white h-[50px] w-full rounded-[25px] p-[5px] text-primary flex items-center mt-[10px]">
                  <p className="uppercase w-full text-center text-[16px] leading-[18px]">
                    Ro’yxatdan o’tish
                  </p>
                  <span className="bg-primary rounded-[25px] w-[43px] h-[43px] flex justify-center items-center ml-auto">
                    <Image src={arrow} alt="arrow_diagonal" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Modal;
