import { User } from "../../../api/models/user";

export type UserProps = {
  user: User;
};

export default function UserInfo({ user }: UserProps) {
  return (
    <div>
        <p className="color-white">{user.name}</p>
    </div>
  );
}
