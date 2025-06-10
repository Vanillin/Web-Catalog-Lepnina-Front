import { Product } from "../../../api/models/product";
import TestImg from "../../images/navigation/corner.png";
import FavoriteBtn from "./favoriteBtn";

export default function CatalogElement(input: { prod: Product }) {
  return (
    <div className="element-grid backcolor-darkgray">
      <div className="parameters-element color-white">
        <p>{input.prod.id}</p>
        <FavoriteBtn product={input.prod} />
      </div>
      <img src={TestImg} alt="Изображение" />
      <p className="color-orange">{input.prod.price} р.</p>
      <div className="parameters-element color-white">
        <p>Длина изделия</p>
        <p>{input.prod.length} мм</p>
      </div>
      <div className="parameters-element color-white">
        <p>Ширина по потолку</p>
        <p>{input.prod.wigth} мм</p>
      </div>
      <div className="parameters-element color-white">
        <p>Высота по стене</p>
        <p>{input.prod.height} мм</p>
      </div>
    </div>
  );
}
