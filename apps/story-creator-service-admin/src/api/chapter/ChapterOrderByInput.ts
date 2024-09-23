import { SortOrder } from "../../util/SortOrder";

export type ChapterOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  overview?: SortOrder;
  storyId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
