import { Link } from "react-router-dom";
import { useState } from "react";
import ViewDetails from "./viewDetails";

import { useUserInfoQuery } from "../../../api/slices/userApiSlice";

export default function OptionsPage() {
  const { data: user } = useUserInfoQuery({});

  const [idUnderPage, changeIdUnderPage] = useState<number>(0);

  const handleSectionClick = async (id: number) => {
    changeIdUnderPage(id);
  };

  return (
    <div className="backcolor-gray body">
      <div className="body-flex">
        <div>
          <nav className="nav-left backcolor-darkgray">
            <p className="color-white">{user?.name}</p>
            <hr className="color-white" />
            <ul>
              <li>
                <p
                  className="color-white hover-ligthorange"
                  onClick={() => handleSectionClick(1)}
                >
                  Изменить данные
                </p>
              </li>
              <li>
                <p
                  className="color-white hover-ligthorange"
                  onClick={() => handleSectionClick(2)}
                >
                  Удалить аккаунт
                </p>
              </li>
              <li>
                <Link to="/catalog" className="color-white hover-ligthorange">
                  В каталог
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <ViewDetails user={user} idUnderPage={idUnderPage} />
        </div>
      </div>
    </div>
  );
}
