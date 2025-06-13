import { Roles } from "./roles";

export type User = {
  id?: number;
  name?: string;
  email?: string;
  role?: Roles;
  icon?: number;
};
