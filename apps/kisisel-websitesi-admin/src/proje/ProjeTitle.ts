import { Proje as TProje } from "../api/proje/Proje";

export const PROJE_TITLE_FIELD = "baslik";

export const ProjeTitle = (record: TProje): string => {
  return record.baslik?.toString() || String(record.id);
};
