import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjeWhereInput = {
  aciklama?: StringNullableFilter;
  baslangicTarihi?: DateTimeNullableFilter;
  baslik?: StringNullableFilter;
  bitisTarihi?: DateTimeNullableFilter;
  id?: StringFilter;
};
