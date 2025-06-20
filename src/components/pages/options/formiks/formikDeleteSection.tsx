import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  DeleteSectionRequest,
  useSectionsDeleteMutation,
} from "../../../../api/slices/sectionApiSlice";

export default function FormikDeleteSection() {
  const navigate = useNavigate();
  const [deleteSection, { isLoading: isDeleteSection }] =
    useSectionsDeleteMutation();

  const initialValuesDeleteSection: DeleteSectionRequest = {
    id: undefined,
  };

  const loginSchemaDeleteSection = yup.object({
    id: yup.number().required("Id is required"),
  });
  const handleSectionDelete = async (values: DeleteSectionRequest) => {
    console.log(values);
    await deleteSection(values);
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
      <h1>Удалить секцию</h1>
      <Formik
        initialValues={initialValuesDeleteSection}
        validationSchema={loginSchemaDeleteSection}
        onSubmit={handleSectionDelete}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              name="id"
              placeholder="id"
              fullWidth
              disabled={isDeleteSection}
              error={touched.id && !!errors.id}
              helperText={<ErrorMessage name="id" />}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isDeleteSection}
            >
              {isDeleteSection ? "Удаление..." : "Удалить"}
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
