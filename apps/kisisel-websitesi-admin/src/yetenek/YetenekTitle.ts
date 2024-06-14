import { Yetenek as TYetenek } from "../api/yetenek/Yetenek";

export const YETENEK_TITLE_FIELD = "ad";

export const YetenekTitle = (record: TYetenek): string => {
  return record.ad?.toString() || String(record.id);
};
