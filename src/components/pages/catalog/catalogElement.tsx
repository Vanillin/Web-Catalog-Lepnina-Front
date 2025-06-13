import { Product } from "../../../api/models/product";
import TestImg from "../../images/navigation/corner.png";
import FavoriteBtn from "./favoriteBtn";
import { usePictureFileGetQuery } from "../../../api/slices/pictureFileApiSlices";

export default function CatalogElement(input: { prod: Product }) {
  const { data: picture, isError } = usePictureFileGetQuery({
    req: { idPicture: input.prod.idPicture },
  });

  let Img = TestImg;
  if (!isError) {
    Img = picture?.storedPath!;
  }

  return (
    <div className="element-grid backcolor-darkgray">
      <div className="parameters-element color-white">
        <p>{input.prod.id}</p>
        <FavoriteBtn product={input.prod} />
      </div>
      <img src={Img} alt="Изображение" />
      <p className="color-orange">{input.prod.price} р.</p>
      <div className="parameters-element color-white">
        <p>Длина изделия</p>
        <p>{input.prod.length} мм</p>
      </div>
      <div className="parameters-element color-white">
        <p>Ширина по потолку</p>
        <p>{input.prod.width} мм</p>
      </div>
      <div className="parameters-element color-white">
        <p>Высота по стене</p>
        <p>{input.prod.height} мм</p>
      </div>
    </div>
  );
}
