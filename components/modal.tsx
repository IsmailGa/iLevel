"use client";
import React, { FormEvent, useState, useEffect } from "react";
import Image from "next/image";
import arrow from "@/assets/arrow_diagonal_white.svg";
import formDecor from "@/public/assets/form_decor.svg";
import Container from "./container";
import { useRouter } from 'next/navigation';

interface ModalProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  number: HTMLInputElement;
  location: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  elements: FormElements;
}

const Modal: React.FC<ModalProps> = ({ setOpen, open }) => {
  const router = useRouter();  // Initialize useRouter
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
      const amoCRMResponse = await fetch("/api/amo-crm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (amoCRMResponse.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setTimeout(() => {
            setOpen(false);
            router.push('/thank-you');
          }, 500);
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

  const handleClick = () => {
    setOpen(false);
    document.body.style.position = "static";
  };

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-[#070529]/80 w-full flex justify-center items-center z-[100]">
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
            <div className="flex flex-col justify-between md:gap-[45px] lg:gap-[75px] gap-[25px] relative">
              <h1 className="md:text-[36px] text-[28px] leading-[120%]">
                Ro’yxatdan o’tish formasi
              </h1>
              <div className="absolute top-5 bottom-5 w-full">
                <Image src={formDecor} alt="form decor" />
              </div>
              <p className="md:text-[20px] text-[18px] leading-[135%]">
                Formani to‘ldiring, va bizning mutaxassislar siz bilan bog‘lanishadi hamda qiziqtirayotgan savollar bo‘yicha konsultatsiya berishadi.
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
                  pattern="(\+998)?[0-9]{9}"
                  required
                />
                <select
                  name="location"
                  id="location"
                  className="border-0 text-[18px] leading-[135%] w-full h-[50px] px-[25px] rounded-[25px] outline-0 bg-white text-black placeholder-[white/10]"
                  required
                >
                  <option value="" disabled selected>
                    Shahringiz yoki yashash joyingiz
                  </option>
                  <option value="Toshkentda">Toshkentda yashayman</option>
                  <option value="Vodiyda">Vodiyda yashayman</option>
                  <option value="Vohada">Vohada yashayman</option>
                </select>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white h-[50px] w-full rounded-[25px] p-[5px] text-primary flex items-center mt-[10px] opacity-90 hover:opacity-100"
                >
                  <>
                    <p className="uppercase w-full text-center text-[16px] leading-[18px]">
                      {loading ? "Yuklanmoqda..." : "Ro’yxatdan o’tish"}
                    </p>
                    <span className="bg-primary rounded-[25px] w-[43px] h-[43px] flex justify-center items-center ml-auto">
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
        </div>
      </Container>
    </div>
  );
};

export default Modal;
