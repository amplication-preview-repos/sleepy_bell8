import { Chapter } from "../chapter/Chapter";

export type Story = {
  author: string | null;
  chapters?: Array<Chapter>;
  content: string | null;
  createdAt: Date;
  genre?: "Option1" | null;
  id: string;
  isComplete: boolean | null;
  numberOfPages: number | null;
  overview: string | null;
  ratings: number | null;
  title: string | null;
  updatedAt: Date;
};
