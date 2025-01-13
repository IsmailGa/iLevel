import { createClient, Entry } from "contentful";
import { LandingSectionSkeleton } from "./types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// Функция для получения данных из модели LandingSection
export const fetchLandingSections = async (): Promise<Entry<LandingSectionSkeleton>[]> => {
  const entries = await client.getEntries<LandingSectionSkeleton>({
    content_type: "heroTitle", // Укажите Content Type ID
  });

  return entries.items;
};
