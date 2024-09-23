import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  facebook: string | null;
  firstName: string | null;
  id: string;
  instagram: string | null;
  lastName: string | null;
  linkedin: string | null;
  photo: JsonValue;
  roles: JsonValue;
  tiktok: string | null;
  twitter: string | null;
  updatedAt: Date;
  username: string;
};
