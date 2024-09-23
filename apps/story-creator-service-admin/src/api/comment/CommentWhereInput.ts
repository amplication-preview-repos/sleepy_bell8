import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  chapter?: ChapterWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
};
