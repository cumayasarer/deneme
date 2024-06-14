import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReferansWhereInput = {
  aciklama?: StringNullableFilter;
  ad?: StringNullableFilter;
  firma?: StringNullableFilter;
  id?: StringFilter;
  pozisyon?: StringNullableFilter;
};
