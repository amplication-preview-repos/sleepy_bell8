import { CommentUpdateManyWithoutChaptersInput } from "./CommentUpdateManyWithoutChaptersInput";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type ChapterUpdateInput = {
  comments?: CommentUpdateManyWithoutChaptersInput;
  content?: string | null;
  overview?: string | null;
  story?: StoryWhereUniqueInput | null;
  title?: string | null;
};
