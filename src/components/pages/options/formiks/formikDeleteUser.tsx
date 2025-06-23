import { Button, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { AdminOptions } from "../adminOptions";

import {
  DeleteUserRequest,
  useUserDeleteMutation,
} from "../../../../api/slices/userApiSlice";
import { useUserInfoQuery } from "../../../../api/slices/userApiSlice";

export default function FormikDeleteUser() {
  const { data: user } = useUserInfoQuery({});
  const navigate = useNavigate();
  const [deleteUser, { isLoading: isDelete }] = useUserDeleteMutation();

  const initialValuesDelete: DeleteUserRequest = {
    id: user?.id,
  };

  const handleSubmitDelete = async (values: DeleteUserRequest) => {
    let trigger = await deleteUser(values);
    if (trigger?.data === true) navigate("/options");
  };

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
                <Link to="/options/user/delete" className="color-orange">
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
        <div>
          <Grid
            container
            direction="column"
            spacing={5}
            margin={5}
            marginLeft={10}
            width={300}
          >
            <h1>Вы уверены?</h1>
            <Formik
              initialValues={initialValuesDelete}
              onSubmit={handleSubmitDelete}
            >
              <Form>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  disabled={isDelete}
                >
                  {isDelete ? "Удаление..." : "Удалить"}
                </Button>
              </Form>
            </Formik>
          </Grid>
        </div>
      </div>
    </div>
  );
}
