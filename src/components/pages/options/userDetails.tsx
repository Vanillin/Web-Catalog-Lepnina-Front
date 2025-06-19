import { User } from "../../../api/models/user";
import FormikChangeUser from "./formiks/formikChangeUser";
import FormikDeleteUser from "./formiks/formikDeleteUser";

export default function UserDetails(input: {
  user: User | undefined | null;
  idUnderPage: number;
}) {
  if (input.idUnderPage === 0) return null;
  else if (input.idUnderPage === 1)
    return <FormikChangeUser user={input.user} />;
  else if (input.idUnderPage === 2)
    return <FormikDeleteUser user={input.user} />;
  else return null;
}
