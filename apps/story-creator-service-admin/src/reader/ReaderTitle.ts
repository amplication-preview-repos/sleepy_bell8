import { Reader as TReader } from "../api/reader/Reader";

export const READER_TITLE_FIELD = "ratingsGiven";

export const ReaderTitle = (record: TReader): string => {
  return record.ratingsGiven?.toString() || String(record.id);
};
