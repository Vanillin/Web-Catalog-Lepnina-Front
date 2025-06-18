import { Button, Grid, TextField } from "@mui/material";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { User } from "../../../api/models/user";
import {
  UpdateUserRequest,
  DeleteUserRequest,
  useUserUpdateMutation,
  useUserDeleteMutation,
} from "../../../api/slices/userApiSlice";

const loginSchema = yup.object({
  id: yup.number(),
  idIcon: yup.number(),
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export default function ViewDetails(input: {
  user: User | undefined | null;
  idUnderPage: number;
}) {
  const navigate = useNavigate();
  const [update, { isLoading: isUpdate }] = useUserUpdateMutation();
  const [delet, { isLoading: isDelete }] = useUserDeleteMutation();

  const initialValuesUpdate: UpdateUserRequest = {
    id: input.user?.id,
    idIcon: undefined,
    name: input.user?.name,
    email: input.user?.email,
    password: "",
  };
  const initialValuesDelete: DeleteUserRequest = {
    id: input.user?.id!,
  };
  const handleSubmitUpdate = async (values: UpdateUserRequest) => {
    await update(values);
    navigate("/options");
  };
  const handleSubmitDelete = async (values: DeleteUserRequest) => {
    await delet(values);
    navigate("/catalog");
  };

  if (input.idUnderPage === 0) return null;
  else if (input.idUnderPage === 1)
    return (
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
                //disabled={isUpdate}
              />

              <Field
                as={TextField}
                name="email"
                placeholder="Email@mail.ru"
                type="email"
                fullWidth
                //error={touched.email && !!errors.email}
                //helperText={<ErrorMessage name="email" />}
                //disabled={isUpdate}
              />

              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                fullWidth
                //error={touched.password && !!errors.password}
                //helperText={<ErrorMessage name="password" />}
                //disabled={isUpdate}
              />

              <Button
                variant="contained"
                type="button"
                fullWidth
                //disabled={isUpdate}
              >
                {isUpdate ? "Изменение..." : "Изменить"}
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    );
  else if (input.idUnderPage === 2)
    return (
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
              type="button"
              fullWidth
              disabled={isDelete}
            >
              {isDelete ? "Удаление..." : "Удалить"}
            </Button>
          </Form>
        </Formik>
      </Grid>
    );
  else return null;
}
