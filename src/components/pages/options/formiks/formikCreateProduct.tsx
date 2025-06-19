import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  AddProductRequest,
  useProductsCreateMutation,
} from "../../../../api/slices/productApiSlice";

export default function FormikCreateProduct() {
  const navigate = useNavigate();
  const [createProduct, { isLoading: isCreateProduct }] =
    useProductsCreateMutation();

  const initialValuesCreateProduct: AddProductRequest = {
    length: undefined,
    height: undefined,
    width: undefined,
    price: undefined,
    discount: undefined,
    idPicture: undefined,
    idSection: undefined,
  };

  const loginSchemaCreateProduct = yup.object({
    length: yup.number().required("Length is required"),
    height: yup.number().required("Height is required"),
    width: yup.number().required("Width is required"),
    price: yup.number().required("Price is required"),
    discount: yup.number(),
    idPicture: yup.number().required("IdPicture is required"),
    idSection: yup.number().required("IdSection is required"),
  });

  const handleProductCreate = async (values: AddProductRequest) => {
    await createProduct(values);
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
      <h1>Добавить продукт</h1>
      <Formik
        initialValues={initialValuesCreateProduct}
        validationSchema={loginSchemaCreateProduct}
        onSubmit={handleProductCreate}
      >
        {({ errors, touched }) => (
          <Form>
            <TextField
              name="length"
              placeholder="length"
              fullWidth
              disabled={isCreateProduct}
              error={touched.length && !!errors.length}
              helperText={<ErrorMessage name="length" />}
            />
            <TextField
              name="height"
              placeholder="height"
              fullWidth
              disabled={isCreateProduct}
              error={touched.height && !!errors.height}
              helperText={<ErrorMessage name="height" />}
            />
            <TextField
              name="width"
              placeholder="width"
              fullWidth
              disabled={isCreateProduct}
              error={touched.width && !!errors.width}
              helperText={<ErrorMessage name="width" />}
            />
            <TextField
              name="price"
              placeholder="price"
              fullWidth
              disabled={isCreateProduct}
              error={touched.price && !!errors.price}
              helperText={<ErrorMessage name="price" />}
            />
            <TextField
              name="discount"
              placeholder="discount"
              fullWidth
              disabled={isCreateProduct}
              error={touched.discount && !!errors.discount}
              helperText={<ErrorMessage name="discount" />}
            />
            <TextField
              name="idPicture"
              placeholder="idPicture"
              fullWidth
              disabled={isCreateProduct}
              error={touched.idPicture && !!errors.idPicture}
              helperText={<ErrorMessage name="idPicture" />}
            />
            <TextField
              name="idSection"
              placeholder="idSection"
              fullWidth
              disabled={isCreateProduct}
              error={touched.idSection && !!errors.idSection}
              helperText={<ErrorMessage name="idSection" />}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isCreateProduct}
            >
              {isCreateProduct ? "Добавление..." : "Добавить"}
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
