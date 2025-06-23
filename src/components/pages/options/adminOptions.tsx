import { Link } from "react-router-dom";
import { Roles } from "../../../api/models/roles";
import { User } from "../../../api/models/user";

export function AdminOptions(input: { user: User | undefined | null }) {
  if (
    input.user === undefined ||
    input.user === null ||
    input.user.role !== Roles.Admin
  )
    return null;
  else
    return (
      <ul>
        <hr className="color-white" />
        <li>
          <Link
            to="/options/product/create"
            className="color-white hover-ligthorange"
          >
            Добавить продукт
          </Link>
        </li>
        <li>
          <Link
            to="/options/product/change"
            className="color-white hover-ligthorange"
          >
            Изменить продукт
          </Link>
        </li>
        <li>
          <Link
            to="/options/product/delete"
            className="color-white hover-ligthorange"
          >
            Удалить продукт
          </Link>
        </li>
        <li>
          <Link
            to="/options/section/create"
            className="color-white hover-ligthorange"
          >
            Добавить секцию
          </Link>
        </li>
        <li>
          <Link
            to="/options/section/change"
            className="color-white hover-ligthorange"
          >
            Изменить секцию
          </Link>
        </li>
        <li>
          <Link
            to="/options/section/delete"
            className="color-white hover-ligthorange"
          >
            Удалить секцию
          </Link>
        </li>
      </ul>
    );
}
