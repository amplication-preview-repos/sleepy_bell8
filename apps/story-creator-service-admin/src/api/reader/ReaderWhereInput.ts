import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReaderWhereInput = {
  id?: StringFilter;
  ratingsGiven?: StringNullableFilter;
};
