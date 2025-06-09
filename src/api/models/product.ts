import { Section } from "./section";
import { PictureFile } from "./pictureFile";

export type Product = {
  id?: number;
  length?: number;
  height?: number;
  wigth?: number;
  price?: number;
  discount?: number;
  pictureFile?: PictureFile;
  section?: Section;
};
