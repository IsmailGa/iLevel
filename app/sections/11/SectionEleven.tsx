"use client";
import Image from "next/image";
import arrow from "@/assets/arrow_diagonal_white.svg";
import formDecor from "@/public/assets/form_decor.svg";
import React, { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "contentful";

interface SectionElevenType {
  id: string;
  title: string;
  description: string;
}

const SectionEleven = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<SectionElevenType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
    });

    client
      .getEntry("5PARkf3qOFdK6htkhHUySL")
      .then((entry) => {
        const id = entry.fields.id as string || "contacts";
        const title = entry.fields.title as string || "Yordam kerakmi? Bizning mutaxassislar javob berishga tayyor.";
        const description = entry.fields.description as string || "Formani to‘ldiring, va bizning mutaxassislar siz bilan bog‘lanishadi hamda qiziqtirayotgan savollar bo‘yicha konsultatsiya berishadi.";

        setData({
          id,
          title,
          description,
        });
      })
      .catch((err) => {
        console.error("Error fetching data from Contentful:", err);
        setError("Error loading data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    setLoading(true);
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      number: (form.elements.namedItem("number") as HTMLInputElement).value,
      location: (form.elements.namedItem("location") as HTMLSelectElement).value,
    };

    try {
      const amoCRMResponse = await fetch("/api/amo-crm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (amoCRMResponse.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setTimeout(() => {
            router.push('/thank-you');
          }, 500);
        }, 2000);
        form.reset();
      } else {
        alert("Ma’lumotlarni yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Formani yuborishda xatolik:", error);
      alert("Formani yuborib bo‘lmadi.");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <section
      className="flex flex-col w-full sm:mt-[75px] mt-[65px]"
      id={data?.id}
    >
      <div className="grid bg-primary lg:grid-cols-2 grid-cols-1 items-center md:gap-[35px] gap-[25px] md:p-[35px] p-[25px] rounded-[25px] w-full">
        {/* LEFT SIDE DESCRIPTION */}
        <div className="flex flex-col md:gap-[45px] lg:gap-[75px] gap-[25px] relative">
          <h1 className="font-semiBold md:text-[36px] text-[28px] leading-[135%]">
            {data?.title}
          </h1>
          <div className="absolute top-5 bottom-5 w-full">
            <Image src={formDecor} alt="form decor" />
          </div>
          <p className="md:text-[20px] text-[18px] leading-[135%]">
            {data?.description}
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
              pattern="(\+998)?[0-9]{9}"
              required
            />
            <select
              name="location"
              id="location"
              className="border-0 text-[18px] leading-[135%] w-full h-[50px] px-[25px] rounded-[25px] outline-0 bg-white text-black placeholder-[white/10]"
              required
            >
              <option value="" disabled>
                Shahringiz yoki yashash joyingiz
              </option>
              <option value="Toshkentda">Toshkentda yashayman</option>
              <option value="Vodiyda">Vodiyda yashayman</option>
              <option value="Vohada">Vohada yashayman</option>
            </select>
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