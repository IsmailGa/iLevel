"use client";
import Image from "next/image";
import arrow from "@/assets/arrow_diagonal_white.svg";
import formDecor from "@/public/assets/form_decor.svg";
import React, { FormEvent, useState } from "react";

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  number: HTMLInputElement;
  location: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  elements: FormElements;
}

const SectionEleven = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as CustomForm;

    if (!form.checkValidity()) {
      alert("Пожалуйста, проверьте, что все поля заполнены корректно!");
      return;
    }

    setLoading(true);
    const formData = {
      name: form.elements.name.value,
      number: form.elements.number.value,
      location: form.elements.location.value,
    };

    try {
      const response = await fetch("/api/google-sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
        form.reset();
      } else {
        alert("Произошла ошибка при отправке данных.");
      }
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
      alert("Не удалось отправить форму.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col w-full sm:mt-[75px] mt-[65px]" id="contacts">
      <div className="grid bg-primary lg:grid-cols-2 grid-cols-1 items-center md:gap-[35px] gap-[25px] md:p-[35px] p-[25px] rounded-[25px] w-full">
        {/* LEFT SIDE DESCRIPTION */}
        <div className="flex flex-col md:gap-[45px] lg:gap-[75px] gap-[25px] relative">
          <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[135%]">
            Yordam kerakmi? Bizning mutaxassislar javob berishga tayyor.
          </h1>
          <div className="absolute top-5 bottom-5 w-full">
            <Image src={formDecor} alt="form decor" />
          </div>
          <p className="md:text-[20px] text-[18px] leading-[135%]">
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
              className="border-0 text-[18px] leading-[135%] w-full h-[50px] px-[25px] rounded-[25px] outline-0 bg-white text-black placeholder-[white/10]"
              placeholder="Ismi sharifingiz"
              required
            />
            <input
              type="tel"
              name="number"
              id="number"
              className="border-0 text-[18px] leading-[135%] w-full h-[50px] px-[25px] rounded-[25px] outline-0 bg-white text-black placeholder-[white/10]"
              placeholder="Telefon raqamingiz  (+998 XX XXX-XX-XX)"
              pattern="\+998[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
              required
            />
            <input
              type="text"
              name="location"
              id="location"
              className="border-0 text-[18px] leading-[135%] w-full h-[50px] px-[25px] rounded-[25px] outline-0 bg-white text-black placeholder-[white/10]"
              placeholder="Shahringiz yoki yashash joyingiz"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-white h-[50px] w-full rounded-[25px] p-[5px] text-primary flex items-center mt-[10px] group"
            >
              <>
                <p className="uppercase w-full text-center text-[16px] leading-[18px]">
                  {loading ? "Yuklanmoqda..." : "Ro’yxatdan o’tish"}
                </p>
                <span className="flex items-center justify-center bg-primary rounded-[25px] p-[11px] shrink-0 aspect-square w-[auto] h-[100%] transition-transform duration-300 group-hover:rotate-[45deg]">
                  <Image src={arrow} alt="arrow_diagonal" />
                </span>
              </>
            </button>
          </form>
          {success && (
            <p className="text-green-700 text-[18px] mt-2">
              Ma&apos;lumotlar yuborildi!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionEleven;