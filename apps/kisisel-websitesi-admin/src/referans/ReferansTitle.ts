import { Referans as TReferans } from "../api/referans/Referans";

export const REFERANS_TITLE_FIELD = "ad";

export const ReferansTitle = (record: TReferans): string => {
  return record.ad?.toString() || String(record.id);
};
