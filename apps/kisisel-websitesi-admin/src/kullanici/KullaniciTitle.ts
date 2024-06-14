import { Kullanici as TKullanici } from "../api/kullanici/Kullanici";

export const KULLANICI_TITLE_FIELD = "ad";

export const KullaniciTitle = (record: TKullanici): string => {
  return record.ad?.toString() || String(record.id);
};
