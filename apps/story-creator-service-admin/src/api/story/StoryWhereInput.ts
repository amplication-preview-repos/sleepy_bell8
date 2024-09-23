import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChapterListRelationFilter } from "../chapter/ChapterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StoryWhereInput = {
  author?: StringNullableFilter;
  chapters?: ChapterListRelationFilter;
  content?: StringNullableFilter;
  genre?: "Option1";
  id?: StringFilter;
  isComplete?: BooleanNullableFilter;
  numberOfPages?: IntNullableFilter;
  overview?: StringNullableFilter;
  ratings?: IntNullableFilter;
  title?: StringNullableFilter;
};
