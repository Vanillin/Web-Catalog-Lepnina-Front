import { Roles } from "../../../api/models/roles";
import { User } from "../../../api/models/user";

export function AdminOptions(input: {
  handleSectionClick: (id: number) => Promise<void>;
  user: User | undefined | null;
}) {
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
          <p
            className="color-white hover-ligthorange"
            onClick={() => input.handleSectionClick(10)}
          >
            Добавить продукт
          </p>
        </li>
        <li>
          <p
            className="color-white hover-ligthorange"
            onClick={() => input.handleSectionClick(11)}
          >
            Изменить продукт
          </p>
        </li>
        <li>
          <p
            className="color-white hover-ligthorange"
            onClick={() => input.handleSectionClick(12)}
          >
            Удалить продукт
          </p>
        </li>
        <li>
          <p
            className="color-white hover-ligthorange"
            onClick={() => input.handleSectionClick(13)}
          >
            Добавить секцию
          </p>
        </li>
        <li>
          <p
            className="color-white hover-ligthorange"
            onClick={() => input.handleSectionClick(14)}
          >
            Изменить секцию
          </p>
        </li>
        <li>
          <p
            className="color-white hover-ligthorange"
            onClick={() => input.handleSectionClick(15)}
          >
            Удалить секцию
          </p>
        </li>
      </ul>
    );
}
