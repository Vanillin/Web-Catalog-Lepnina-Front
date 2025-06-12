import { Link } from "react-router-dom";
import { useState } from "react";

import CatalogElement from "./catalogElement";
import { Product } from "../../../api/models/product";
import { Section } from "../../../api/models/section";

import {
  useProductsBySectionMutation,
  useProductsByFavoriteMutation,
} from "../../../api/slices/productApiSlice";
import { useUserInfoQuery } from "../../../api/slices/userApiSlice";
import { useSectionsAllQuery } from "../../../api/slices/sectionApiSlice";

export function UserInfo(input: { handleClick: () => Promise<void> }) {
  const { data: user, isError } = useUserInfoQuery({});

  if (isError) {
    return (
      <div>
        <p className="color-white">Не авторизован</p>
        <hr className="color-white" />
        <ul>
          <li>
            <Link to="/login" className="color-white hover-ligthorange">
              Войти
            </Link>
          </li>
          <li>
            <Link to="/register" className="color-white hover-ligthorange">
              Зарегистрироваться
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p className="color-white">{user?.name}</p>
        <hr className="color-white" />
        <ul>
          <li>
            <Link to="/options" className="color-white hover-ligthorange">
              Настройки
            </Link>
          </li>
          <li>
            <p
              className="color-white hover-ligthorange"
              onClick={() => input.handleClick()}
            >
              Избранное
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default function CatalogPage() {
  const { data: sections } = useSectionsAllQuery({});

  const [products, setObjects] = useState<Product[]>();

  const [updateProducts] = useProductsBySectionMutation();
  const [updateFavoriteProducts] = useProductsByFavoriteMutation();

  const handleSectionClick = async (input: { id: number }) => {
    setObjects(await updateProducts({ req: { id: input.id } }).unwrap());
  };

  const handleFavoriteClick = async () => {
    setObjects(await updateFavoriteProducts({}).unwrap());
  };

  return (
    <body className="backcolor-gray">
      <nav className="nav-top backcolor-darkgray">
        <UserInfo handleClick={handleFavoriteClick} />
        <hr className="color-white" />
        <p className="color-white">Навигация</p>
        <hr className="color-white" />
        <div className="nav-top-body">
          <ul>
            <li>
              <Link to="/" className="color-white hover-ligthorange">
                Главная
              </Link>
            </li>
            {sections?.map((prod: Section) => (
              <li>
                <p
                  className="color-white hover-ligthorange"
                  onClick={() => handleSectionClick({ id: prod.id! })}
                >
                  {prod.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="body-flex">
        <div>
          <nav className="nav-left backcolor-darkgray">
            <UserInfo handleClick={handleFavoriteClick} />
            <hr className="color-white" />
            <p className="color-white">Навигация</p>
            <hr className="color-white" />
            <ul>
              <li>
                <Link to="/" className="color-white hover-ligthorange">
                  Главная
                </Link>
              </li>
              {sections?.map((prod: Section) => (
                <li>
                  <p
                    className="color-white hover-ligthorange"
                    onClick={() => handleSectionClick({ id: prod.id! })}
                  >
                    {prod.name}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="grid" id="grid">
          {/* {isLoading && <CircularProgress />} */}
          {products?.map((prod: Product) => <CatalogElement prod={prod} />)}
        </div>
      </div>
    </body>
  );
}
