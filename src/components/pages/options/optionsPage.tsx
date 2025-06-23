import { Link } from "react-router-dom";
import { AdminOptions } from "./adminOptions";

import { useUserInfoQuery } from "../../../api/slices/userApiSlice";

export default function OptionsPage() {
  const { data: user } = useUserInfoQuery({});

  return (
    <div className="backcolor-gray body">
      <div className="body-flex">
        <div>
          <nav className="nav-left backcolor-darkgray">
            <p className="color-white">{user?.name}</p>
            <hr className="color-white" />
            <ul>
              <li>
                <Link
                  to="/options/user/change"
                  className="color-white hover-ligthorange"
                >
                  Изменить данные
                </Link>
              </li>
              <li>
                <Link
                  to="/options/user/delete"
                  className="color-white hover-ligthorange"
                >
                  Удалить аккаунт
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="color-white hover-ligthorange">
                  В каталог
                </Link>
              </li>
            </ul>
            <AdminOptions user={user} />
          </nav>
        </div>
      </div>
    </div>
  );
}
