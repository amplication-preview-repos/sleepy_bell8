import { Comment } from "../comment/Comment";
import { Story } from "../story/Story";

export type Chapter = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  overview: string | null;
  story?: Story | null;
  title: string | null;
  updatedAt: Date;
};
