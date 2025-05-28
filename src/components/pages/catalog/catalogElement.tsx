import { Product } from "../../../api/models/product";

export type ProductProps = {
  prod: Product;
};

export default function CatalogElement({ prod }: ProductProps) {
  return (
    <div className="element-grid backcolor-darkgray">
      <p className="color-white">{prod.id}</p>
      {/* <img src="`+img+`" alt="Изображение">   */}
      <p className="color-orange">{prod.price} р.</p>
      <div className="parameters-element color-white">
        {" "}
        <p>Длина изделия</p> <p>{prod.length} мм</p>{" "}
      </div>
      <div className="parameters-element color-white">
        {" "}
        <p>Ширина по потолку</p> <p>{prod.wigth} мм</p>{" "}
      </div>
      <div className="parameters-element color-white">
        {" "}
        <p>Высота по стене</p> <p>{prod.height} мм</p>{" "}
      </div>
    </div>
  );
}
