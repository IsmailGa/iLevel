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
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не доступен" });
  }

  const { name, number, location }: LeadData = req.body;

  if (!name || !number || !location) {
    return res
      .status(400)
      .json({ message: "Все обязательные поля должны быть заполнены" });
  }

  try {
    const tokenResponse = await axios.post(
      "https://ilevelsalescrm.amocrm.ru/oauth2/access_token",
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.SECRET_KEY,
        redirect_uri: process.env.AMO_REDIRECT_URI,
        grant_type: "authorization_code",
        code: process.env.AMO_AUTH_CODE,
      }
    );

    const { access_token } = tokenResponse.data;

    const leadResponse = await axios.post(
      "https://ilevelsalescrm.amocrm.ru/api/v4/leads",
      [
        {
          name,
        },
      ],
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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
