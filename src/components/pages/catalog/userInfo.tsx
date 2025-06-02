import { User } from "../../../api/models/user";
import { Link } from "react-router-dom";

export type UserProps = {
  user: User;
};

export default function UserInfo({ user }: UserProps) {
  return (
    <div>
        <p className="color-white">{user.name}</p>
        <hr className="color-white" />
        <ul>
          <li>
            <Link to="/options" className="color-white hover-ligthorange">
              Настройки
            </Link>
          </li>
          <li>
            <a className="color-white hover-ligthorange">Избранное</a>
          </li>
        </ul> 
    </div>
  );
}
