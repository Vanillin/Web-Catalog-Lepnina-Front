import { Button, Grid, TextField } from "@mui/material";
import { Field, Form, Formik, ErrorMessage } from "formik";
import {
  LoginRequest,
  useLoginMutation,
} from "../../../api/slices/authApiSlice";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export default function LoginPage() {
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const initialValues: LoginRequest = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginRequest) => {
    await login(values);
    navigate("/catalog");
  };

  return (
    <Grid container direction="column" spacing={2} width={300} margin="auto">
      <h1>Login Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              name="email"
              label="Email"
              placeholder="john@acme.com"
              type="email"
              fullWidth
              margin="normal"
              error={touched.email && !!errors.email}
              helperText={<ErrorMessage name="email" />}
              disabled={isLoading}
            />

            <Field
              as={TextField}
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              fullWidth
              margin="normal"
              error={touched.password && !!errors.password}
              helperText={<ErrorMessage name="password" />}
              disabled={isLoading}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
              style={{ marginTop: "1rem" }}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
