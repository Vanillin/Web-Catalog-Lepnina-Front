import { Roles } from "./roles";
import { PictureFile } from "./pictureFile";

export type UserDto = {
  id?: number;
  name?: string;
  email?: string;
  role?: Roles;
  icon?: PictureFile;
};
