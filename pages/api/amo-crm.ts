import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface LeadData {
  name: string;
  number: string;
  location: string;
}

interface TokenResponse {
  access_token: string;
  refresh_token: string;
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
    // ПОЛУЧЕНИЕ ТОКЕНА
    const accessToken = await getAccessToken();

    const leadData = [
      {
        name,
        custom_fields_values: [
          {
            field_id: 1272235,
            values: [{ value: name }],
          },
          {
            field_id: 1272237, 
            values: [{ value: number }],
          },
          {
            field_id: 1272239,
            values: [{ value: location }],
          },
        ],
      },
    ];

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

// ОБНОВИТЬ ТОКЕН
async function refreshAccessToken(): Promise<string> {
  try {
    const response = await axios.post<TokenResponse>(
      "https://ilevelsalescrm.amocrm.ru/oauth2/access_token",
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.SECRET_KEY,
        redirect_uri: process.env.AMO_REDIRECT_URI,
        grant_type: "refresh_token",
        refresh_token: process.env.REFRESH_TOKEN,
      }
    );

    const { access_token, refresh_token } = response.data;

    process.env.ACCESS_TOKEN = access_token;
    process.env.REFRESH_TOKEN = refresh_token;

    return access_token;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Ошибка обновления токена:",
        error.response?.data || error.message
      );
    } else {
      console.error("Неизвестная ошибка:", error);
    }
    throw new Error("Не удалось обновить токен.");
  }
}

// ПОЛУЧИТЬ ТОКЕН
async function getAccessToken(): Promise<string> {
  if (!process.env.ACCESS_TOKEN) {
    // Если токена нет, обновить его
    return await refreshAccessToken();
  }
  return process.env.ACCESS_TOKEN!;
}
