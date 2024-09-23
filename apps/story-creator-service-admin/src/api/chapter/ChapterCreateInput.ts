import { CommentCreateNestedManyWithoutChaptersInput } from "./CommentCreateNestedManyWithoutChaptersInput";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type ChapterCreateInput = {
  comments?: CommentCreateNestedManyWithoutChaptersInput;
  content?: string | null;
  overview?: string | null;
  story?: StoryWhereUniqueInput | null;
  title?: string | null;
};
