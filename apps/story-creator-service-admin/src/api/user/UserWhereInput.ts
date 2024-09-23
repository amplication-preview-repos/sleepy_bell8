import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  facebook?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  instagram?: StringNullableFilter;
  lastName?: StringNullableFilter;
  linkedin?: StringNullableFilter;
  photo?: JsonFilter;
  tiktok?: StringNullableFilter;
  twitter?: StringNullableFilter;
  username?: StringFilter;
};
