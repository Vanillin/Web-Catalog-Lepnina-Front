import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { AdminOptions } from "../adminOptions";

import {
  UpdateUserRequest,
  useUserUpdateMutation,
} from "../../../../api/slices/userApiSlice";
import { useUserInfoQuery } from "../../../../api/slices/userApiSlice";

export default function FormikChangeUser() {
  const { data: user } = useUserInfoQuery({});

  const navigate = useNavigate();
  const [update, { isLoading: isUpdate }] = useUserUpdateMutation();

  const initialValuesUpdate: UpdateUserRequest = {
    id: user?.id,
    idIcon: undefined,
    name: user?.name,
    email: user?.email,
    password: undefined,
  };

  const loginSchema = yup.object({
    id: yup.number(),
    idIcon: yup.number(),
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmitUpdate = async (values: UpdateUserRequest) => {
    let trigger = await update(values);
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
                <Link to="/options/user/change" className="color-orange">
                  Изменить данные
                </Link>
              </li>
              <li>
                <Link
                  to="/options/user/delete"
                  className="color-white hover-ligthorange"
                >
                  Удалить аккаунт
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="color-white hover-ligthorange">
                  В каталог
                </Link>
              </li>
            </ul>
            <AdminOptions
              //handleSectionClick={handleSectionClick}
              user={user}
            />
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
            <h1>Изменить данные</h1>
            <Formik
              initialValues={initialValuesUpdate}
              validationSchema={loginSchema}
              onSubmit={handleSubmitUpdate}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    as={TextField}
                    name="name"
                    placeholder="Your Name"
                    type="name"
                    fullWidth
                    disabled={isUpdate}
                  />

                  {/* <TextField
              name="email"
              placeholder="Email@mail.ru"
              type="email"
              fullWidth
              error={touched.email && !!errors.email}
              helperText={<ErrorMessage name="email" />}
              disabled={isUpdate}
            /> */}

                  <Field
                    as={TextField}
                    name="password"
                    placeholder="password"
                    type="password"
                    fullWidth
                    error={touched.password && !!errors.password}
                    helperText={<ErrorMessage name="password" />}
                    disabled={isUpdate}
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    disabled={isUpdate}
                  >
                    {isUpdate ? "Изменение..." : "Изменить"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
        </div>
      </div>
    </div>
  );
}
