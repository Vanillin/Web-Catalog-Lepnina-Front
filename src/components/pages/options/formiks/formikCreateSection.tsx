import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  CreateSectionRequest,
  useSectionsCreateMutation,
} from "../../../../api/slices/sectionApiSlice";

export default function FormikCreateSection() {
  const navigate = useNavigate();
  const [createSection, { isLoading: isCreateSection }] =
    useSectionsCreateMutation();

  const initialValuesCreateSection: CreateSectionRequest = {
    name: "",
  };

  const loginSchemaCreateSection = yup.object({
    name: yup.string().required("Name is required"),
  });

  const handleSectionCreate = async (values: CreateSectionRequest) => {
    await createSection(values);
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
      <h1>Добавить секцию</h1>
      <Formik
        initialValues={initialValuesCreateSection}
        validationSchema={loginSchemaCreateSection}
        onSubmit={handleSectionCreate}
      >
        {({ errors, touched }) => (
          <Form>
            <TextField
              name="name"
              placeholder="name"
              type="text"
              fullWidth
              error={touched.name && !!errors.name}
              helperText={<ErrorMessage name="name" />}
              disabled={isCreateSection}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isCreateSection}
            >
              {isCreateSection ? "Добавление..." : "Добавить"}
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
