import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type KullaniciWhereInput = {
  ad?: StringNullableFilter;
  biyografi?: StringNullableFilter;
  ePosta?: StringNullableFilter;
  id?: StringFilter;
  soyad?: StringNullableFilter;
};
