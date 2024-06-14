import { SortOrder } from "../../util/SortOrder";

export type ProjeOrderByInput = {
  aciklama?: SortOrder;
  baslangicTarihi?: SortOrder;
  baslik?: SortOrder;
  bitisTarihi?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
