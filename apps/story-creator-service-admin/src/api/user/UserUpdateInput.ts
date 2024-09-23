import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  facebook?: string | null;
  firstName?: string | null;
  instagram?: string | null;
  lastName?: string | null;
  linkedin?: string | null;
  password?: string;
  photo?: InputJsonValue;
  roles?: InputJsonValue;
  tiktok?: string | null;
  twitter?: string | null;
  username?: string;
};
