export type Review = {
  content: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
