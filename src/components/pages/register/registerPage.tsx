import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  RegisterRequest,
  useRegisterMutation,
} from "../../../api/slices/authApiSlice";

const registrationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default function RegisterPage() {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const initialValues: RegisterRequest = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: RegisterRequest) => {
    await register(values);
    navigate("/catalog");
  };

  return (
    <Grid>
      <h1>Registation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <Form>
              <TextField
                name="Name"
                placeholder="Your Name"
                onChange={(e) => {
                  formikProps.setFieldValue("Name", e.target.value);
                }}
                error={!!formikProps?.errors?.name}
                disabled={isLoading}
              />
              <TextField
                name="email"
                placeholder="john@acme.com"
                type="email"
                onChange={(e) => {
                  formikProps.setFieldValue("email", e.target.value);
                }}
                error={!!formikProps?.errors?.email}
                disabled={isLoading}
              />

              <TextField
                name="password"
                placeholder="Password"
                type="password"
                error={!!formikProps?.errors?.password}
                onChange={(e) => {
                  formikProps.setFieldValue("password", e.target.value);
                }}
                disabled={isLoading}
              />

              <Button disabled={isLoading} type="submit">
                Register
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
}
