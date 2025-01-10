import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface LeadData {
  name: string;
  number: string;
  location: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ВАЛИДАЦИЯ МЕТОДА
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не доступен" });
  }

  const { name, number, location }: LeadData = req.body;

  // ВАЛИДАЦИЯ ПОЛЕЙ
  if (!name || !number || !location) {
    return res
      .status(400)
      .json({ message: "Все обязательные поля должны быть заполнены" });
  }

  try {
    // Долгосрочный токен
    const accessToken = process.env.ACCESS_TOKEN;

    if (!accessToken) {
      throw new Error("ACCESS_TOKEN не найден. Добавьте его в .env файл.");
    }

    // Формирование данных для сделки
    const leadData = [
      {
        name,
        custom_fields_values: [
          {
            field_id: 1272235, // ID кастомного поля "Имя клиента"
            values: [{ value: name }],
          },
          {
            field_id: 1272237, // ID кастомного поля "Номер телефона"
            values: [{ value: number }],
          },
          {
            field_id: 1272239, // ID кастомного поля "Локация клиента"
            values: [{ value: location }],
          },
        ],
      },
    ];

    // Запрос на создание сделки
    const leadResponse = await axios.post(
      "https://ilevelsalescrm.amocrm.ru/api/v4/leads",
      leadData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.status(200).json({
      message: "Сделка успешно создана в воронке!",
      lead: leadResponse.data,
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Ошибка при подключении к amoCRM:",
        error.response?.data || error.message
      );
      return res.status(500).json({
        message: "Ошибка при подключении к amoCRM",
        error: error.response?.data || error.message,
      });
    } else {
      console.error("Неизвестная ошибка:", error);
      return res.status(500).json({
        message: "Неизвестная ошибка",
        error: "Что-то пошло не так.",
      });
    }
  }
}
