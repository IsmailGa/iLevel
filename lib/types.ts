import { EntrySkeletonType } from "contentful";

// Типизация модели LandingSection
export interface LandingSectionFields {
  title: string;
  description: string; // Поле description - строка
}

// Создаём тип LandingSectionSkeleton на основе EntrySkeletonType
export type LandingSectionSkeleton = EntrySkeletonType<LandingSectionFields>;
