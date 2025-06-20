import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { User } from "../../../../api/models/user";
import {
  UpdateUserRequest,
  useUserUpdateMutation,
} from "../../../../api/slices/userApiSlice";

export default function FormikChangeUser(input: {
  user: User | undefined | null;
}) {
  const navigate = useNavigate();
  const [update, { isLoading: isUpdate }] = useUserUpdateMutation();

  const initialValuesUpdate: UpdateUserRequest = {
    id: input.user?.id,
    idIcon: undefined,
    name: input.user?.name,
    email: input.user?.email,
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
    console.log(values);
    await update(values);
    navigate("/options");
  };

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
  );
}
