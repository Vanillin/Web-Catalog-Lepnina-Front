import { User } from "../../../api/models/user";

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
            <a className="color-white hover-ligthorange">Изменить</a>
          </li>
          <li>
            <a className="color-white hover-ligthorange">Избранное</a>
          </li>
        </ul> 
    </div>
  );
}
