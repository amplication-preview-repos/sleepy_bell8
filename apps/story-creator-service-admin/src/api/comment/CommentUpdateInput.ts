import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  chapter?: ChapterWhereUniqueInput | null;
  content?: string | null;
};
