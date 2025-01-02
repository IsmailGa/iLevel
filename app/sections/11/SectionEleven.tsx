"use client"
import Image from "next/image";
import arrow from "@/assets/arrow_diagonal_white.svg";
import formDecor from "@/public/assets/form_decor.svg";
import React, { FormEvent } from "react";

const SectionEleven = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Пожалуйста, проверьте, что все поля заполнены корректно!");
    }
  };

  return (
    <section className="flex flex-col w-full mt-[75px]" id="contacts">
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-primary p-[35px] items-center gap-[35px] rounded-[25px]">
        {/* LEFT SIDE DESCRIPTION */}
        <div className="flex flex-col justify-between relative gap-[72px]">
          <Image src={formDecor} alt={"form decor"} className="absolute" />
          <h1 className="text-[36px] leading-[43px]">
            Yordam kerakmi? Bizning mutaxassislar javob berishga tayyor.
          </h1>
          <p className="text-[20px] leading-[27px]">
            Formani to‘ldiring, va bizning mutaxassislar siz bilan bog‘lanishadi
            hamda qiziqtirayotgan savollar bo‘yicha konsultatsiya berishadi.
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
              className="border-0 text-[18px] leading-[20px] w-full px-[25px] py-[15px] rounded-[25px] outline-0 bg-white text-black placholder-primary"
              placeholder="Ismi sharifingiz"
              required
            />
            <input
              type="tel"
              name="number"
              id="number"
              className="border-0 text-[18px] leading-[20px] w-full px-[25px] py-[15px] rounded-[25px] outline-0 bg-white text-black placholder-primary"
              placeholder="Telefon raqamingiz  (+998 XX XXX-XX-XX)"
              pattern="\+998[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
              required
            />
            <input
              type="text"
              name="location"
              id="location"
              className="border-0 text-[18px] leading-[20px] w-full px-[25px] py-[15px] rounded-[25px] outline-0 bg-white text-black placholder-primary"
              placeholder="Shahringiz yoki yashash joyingiz"
              required
            />
            <button className="bg-white h-[50px] w-full rounded-[25px] p-[5px] text-primary flex items-center mt-[10px]">
              <p className="uppercase w-full text-center text-[16px] leading-[18px]">Ro’yxatdan o’tish</p>
              <span className="bg-primary rounded-[25px] w-[43px] h-[43px] flex justify-center items-center ml-auto">
                <Image src={arrow} alt="arrow_diagonal" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionEleven;
