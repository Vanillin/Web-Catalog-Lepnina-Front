import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  UpdateProductRequest,
  useProductsUpdateMutation,
} from "../../../../api/slices/productApiSlice";

export default function FormikChangeProduct() {
  const navigate = useNavigate();
  const [updateProduct, { isLoading: isUpdateProduct }] =
    useProductsUpdateMutation();

  const initialValuesUpdateProduct: UpdateProductRequest = {
    id: undefined,
    length: undefined,
    height: undefined,
    width: undefined,
    price: undefined,
    discount: undefined,
    idPicture: undefined,
    idSection: undefined,
  };

  const loginSchemaUpdateProduct = yup.object({
    id: yup.number().required("Id is required"),
    length: yup.number().required("Length is required"),
    height: yup.number().required("Height is required"),
    width: yup.number().required("Width is required"),
    price: yup.number().required("Price is required"),
    discount: yup.number(),
    idPicture: yup.number().required("IdPicture is required"),
    idSection: yup.number().required("IdSection is required"),
  });

  const handleProductUpdate = async (values: UpdateProductRequest) => {
    await updateProduct(values);
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
      <h1>Изменить продукт</h1>
      <Formik
        initialValues={initialValuesUpdateProduct}
        validationSchema={loginSchemaUpdateProduct}
        onSubmit={handleProductUpdate}
      >
        {({ errors, touched }) => (
          <Form>
            <TextField
              name="id"
              placeholder="id"
              fullWidth
              disabled={isUpdateProduct}
              error={touched.id && !!errors.id}
              helperText={<ErrorMessage name="id" />}
            />
            <TextField
              name="length"
              placeholder="length"
              fullWidth
              disabled={isUpdateProduct}
              error={touched.length && !!errors.length}
              helperText={<ErrorMessage name="length" />}
            />
            <TextField
              name="height"
              placeholder="height"
              fullWidth
              disabled={isUpdateProduct}
              error={touched.height && !!errors.height}
              helperText={<ErrorMessage name="height" />}
            />
            <TextField
              name="width"
              placeholder="width"
              fullWidth
              disabled={isUpdateProduct}
              error={touched.width && !!errors.width}
              helperText={<ErrorMessage name="width" />}
            />
            <TextField
              name="price"
              placeholder="price"
              fullWidth
              disabled={isUpdateProduct}
              error={touched.price && !!errors.price}
              helperText={<ErrorMessage name="price" />}
            />
            <TextField
              name="discount"
              placeholder="discount"
              fullWidth
              disabled={isUpdateProduct}
              error={touched.discount && !!errors.discount}
              helperText={<ErrorMessage name="discount" />}
            />
            <TextField
              name="idPicture"
              placeholder="idPicture"
              fullWidth
              disabled={isUpdateProduct}
              error={touched.idPicture && !!errors.idPicture}
              helperText={<ErrorMessage name="idPicture" />}
            />
            <TextField
              name="idSection"
              placeholder="idSection"
              fullWidth
              disabled={isUpdateProduct}
              error={touched.idSection && !!errors.idSection}
              helperText={<ErrorMessage name="idSection" />}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isUpdateProduct}
            >
              {isUpdateProduct ? "Изменение..." : "Изменить"}
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
