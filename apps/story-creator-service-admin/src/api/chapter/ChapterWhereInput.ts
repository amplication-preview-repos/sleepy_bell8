import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type ChapterWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  overview?: StringNullableFilter;
  story?: StoryWhereUniqueInput;
  title?: StringNullableFilter;
};
