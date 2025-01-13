// services/contentful.ts
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "76bjqmvfjih6",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ToGfU93u8rCUzg0i7-H2OmwOAOnWAdlkRRFltsvSaX8",
});

export const fetchEntry = async (entryId: string) => {
  try {
    const entry = await client.getEntry(entryId);
    return entry;
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    throw error;
  }
};