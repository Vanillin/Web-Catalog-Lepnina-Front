import React from "react";
import { Product } from "../../../api/models/product";
import { Section } from "../../../api/models/section";
import { PictureFile } from "../../../api/models/pictureFile";
import { Grid } from "@mui/material";
import CatalogElement from "./catalogElement";

export default function ViewCorner() {
  const section1: Section = {
    id: 1,
    name: "Name",
  };

  const picture1: PictureFile = {
    id: 1,
  };

  const products: Product[] = [
    {
      id: 1,
      length: 1000,
      height: 500,
      wigth: 300,
      price: 10,
      discount: 0,
      pictureFile: picture1,
      section: section1,
    },
    {
      id: 1,
      length: 1000,
      height: 500,
      wigth: 300,
      price: 10,
      discount: 0,
      pictureFile: picture1,
      section: section1,
    },
    {
      id: 1,
      length: 1000,
      height: 500,
      wigth: 300,
      price: 10,
      discount: 0,
      pictureFile: picture1,
      section: section1,
    },
    {
      id: 1,
      length: 1000,
      height: 500,
      wigth: 300,
      price: 10,
      discount: 0,
      pictureFile: picture1,
      section: section1,
    },
    {
      id: 1,
      length: 1000,
      height: 500,
      wigth: 300,
      price: 10,
      discount: 0,
      pictureFile: picture1,
      section: section1,
    },
    {
      id: 1,
      length: 1000,
      height: 500,
      wigth: 300,
      price: 10,
      discount: 0,
      pictureFile: picture1,
      section: section1,
    },
  ];

  return (
    <div className="grid" id="grid">
      {products.map((prod) => (
        <CatalogElement prod={prod} />
      ))}
    </div>
  );
}
