import { Link } from "react-router-dom";

import { useUserInfoQuery } from "../../../api/slices/userApiSlice";

export default function OptionsPage() {
  const { data: user } = useUserInfoQuery({});

  return (
    <body className="backcolor-gray">
      <nav className="nav-top backcolor-darkgray">
        <p className="color-white">{user?.name}</p>
        <hr className="color-white" />
        <p className="color-white">Настройки</p>
        <hr className="color-white" />
        <ul>
          <li>
            <p className="color-white hover-ligthorange">Изменить</p>
          </li>
          <li>
            <p className="color-white hover-ligthorange"></p>
          </li>
        </ul>
        <hr className="color-white" />
        <div className="nav-top-body">
          <ul>
            <li>
              <Link to="/catalog" className="color-white hover-ligthorange">
                В каталог
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="body-flex">
        <div>
          <nav className="nav-left backcolor-darkgray">
            <p className="color-white">{user?.name}</p>
            <hr className="color-white" />
            <ul>
              <li>
                <p className="color-white hover-ligthorange">Изменить что-то</p>
              </li>
              <li>
                <Link to="/catalog" className="color-white hover-ligthorange">
                  В каталог
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div></div>
      </div>
    </body>
  );
}
