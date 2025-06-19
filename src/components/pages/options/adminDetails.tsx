import { User } from "../../../api/models/user";
import { Roles } from "../../../api/models/roles";
import FormikDeleteSection from "./formiks/formikDeleteSection";
import FormikChangeSection from "./formiks/formikChangeSection";
import FormikCreateSection from "./formiks/formikCreateSection";
import FormikDeleteProduct from "./formiks/formikDeleteProduct";
import FormikChangeProduct from "./formiks/formikChangeProduct";
import FormikCreateProduct from "./formiks/formikCreateProduct";

export default function AdminDetails(input: {
  user: User | undefined | null;
  idAdminUnderPage: number;
}) {
  if (
    input.user === undefined ||
    input.user === null ||
    input.user.role !== Roles.Admin
  )
    return null;
  else if (input.idAdminUnderPage === 0) return null;
  else if (input.idAdminUnderPage === 10) return <FormikCreateProduct />;
  else if (input.idAdminUnderPage === 11) return <FormikChangeProduct />;
  else if (input.idAdminUnderPage === 12) return <FormikDeleteProduct />;
  else if (input.idAdminUnderPage === 13) return <FormikCreateSection />;
  else if (input.idAdminUnderPage === 14) return <FormikChangeSection />;
  else if (input.idAdminUnderPage === 15) return <FormikDeleteSection />;
  else return null;
}
