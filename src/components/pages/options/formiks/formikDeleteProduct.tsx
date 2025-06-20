import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  DeleteProductRequest,
  useProductsDeleteMutation,
} from "../../../../api/slices/productApiSlice";

export default function FormikDeleteProduct() {
  const navigate = useNavigate();
  const [deleteProduct, { isLoading: isDeleteProduct }] =
    useProductsDeleteMutation();

  const initialValuesDeleteProduct: DeleteProductRequest = {
    id: undefined,
  };

  const loginSchemaDeleteProduct = yup.object({
    id: yup.number().required("Id is required"),
  });

  const handleProductDelete = async (values: DeleteProductRequest) => {
    console.log(values);
    await deleteProduct(values);
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
      <h1>Удалить продукт</h1>
      <Formik
        initialValues={initialValuesDeleteProduct}
        validationSchema={loginSchemaDeleteProduct}
        onSubmit={handleProductDelete}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              name="id"
              placeholder="id"
              fullWidth
              disabled={isDeleteProduct}
              error={touched.id && !!errors.id}
              helperText={<ErrorMessage name="id" />}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isDeleteProduct}
            >
              {isDeleteProduct ? "Удаление..." : "Удалить"}
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
