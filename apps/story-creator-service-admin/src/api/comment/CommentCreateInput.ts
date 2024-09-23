import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  chapter?: ChapterWhereUniqueInput | null;
  content?: string | null;
};
