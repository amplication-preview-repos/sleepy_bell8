import { Chapter } from "../chapter/Chapter";

export type Comment = {
  author: string | null;
  chapter?: Chapter | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
