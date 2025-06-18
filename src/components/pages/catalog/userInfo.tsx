import { Link } from "react-router-dom";

import { useUserInfoQuery } from "../../../api/slices/userApiSlice";

export function UserInfo(input: { handleClick: () => Promise<void> }) {
  const { data: user, isError } = useUserInfoQuery({});

  if (isError) {
    return (
      <div>
        <p className="color-white text">Не авторизован</p>
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
        <p className="color-white text">{user?.name}</p>
        <hr className="color-white" />
        <ul>
          <li>
            <Link to="/logout" className="color-white hover-ligthorange">
              Выйти
            </Link>
          </li>
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
