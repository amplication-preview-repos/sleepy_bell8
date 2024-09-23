import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReviewWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
