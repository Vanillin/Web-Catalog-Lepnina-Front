import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  UpdateSectionRequest,
  useSectionsUpdateMutation,
} from "../../../../api/slices/sectionApiSlice";

export default function FormikChangeSection() {
  const navigate = useNavigate();
  const [updateSection, { isLoading: isUpdateSection }] =
    useSectionsUpdateMutation();
  const initialValuesUpdateSection: UpdateSectionRequest = {
    id: undefined,
    name: "",
  };
  const loginSchemaUpdateSection = yup.object({
    id: yup.number().required("Id is required"),
    name: yup.string().required("Name is required"),
  });
  const handleSectionUpdate = async (values: UpdateSectionRequest) => {
    console.log(values);
    await updateSection(values);
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
      <h1>Изменить секцию</h1>
      <Formik
        initialValues={initialValuesUpdateSection}
        validationSchema={loginSchemaUpdateSection}
        onSubmit={handleSectionUpdate}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              name="id"
              placeholder="id"
              fullWidth
              disabled={isUpdateSection}
              error={touched.id && !!errors.id}
              helperText={<ErrorMessage name="id" />}
            />
            <Field
              as={TextField}
              name="name"
              placeholder="name"
              fullWidth
              disabled={isUpdateSection}
              error={touched.name && !!errors.name}
              helperText={<ErrorMessage name="name" />}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isUpdateSection}
            >
              {isUpdateSection ? "Изменение..." : "Изменить"}
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
