import { SortOrder } from "../../util/SortOrder";

export type ReaderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ratingsGiven?: SortOrder;
  updatedAt?: SortOrder;
};
