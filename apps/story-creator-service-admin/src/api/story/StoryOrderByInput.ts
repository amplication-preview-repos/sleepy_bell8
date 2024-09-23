import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  isComplete?: SortOrder;
  numberOfPages?: SortOrder;
  overview?: SortOrder;
  ratings?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
