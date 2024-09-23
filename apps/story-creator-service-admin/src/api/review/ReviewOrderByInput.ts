import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
