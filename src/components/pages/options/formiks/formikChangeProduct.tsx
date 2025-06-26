import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";

import {
  UpdateProductRequest,
  useProductsUpdateMutation,
} from "../../../../api/slices/productApiSlice";
import { useUserInfoQuery } from "../../../../api/slices/userApiSlice";

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
    let trigger = await updateProduct(values);
    if (trigger?.data === true) navigate("/options");
  };

  const { data: user } = useUserInfoQuery({});

  return (
    <div className="backcolor-gray body">
      <div className="body-flex">
        <div>
          <nav className="nav-left backcolor-darkgray">
            <p className="color-white">{user?.name}</p>
            <hr className="color-white" />
            <ul>
              <li>
                <Link
                  to="/options/user/change"
                  className="color-white hover-ligthorange"
                >
                  Изменить данные
                </Link>
              </li>
              <li>
                <Link
                  to="/options/user/delete"
                  className="color-white hover-ligthorange"
                >
                  Удалить аккаунт
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="color-white hover-ligthorange">
                  В каталог
                </Link>
              </li>
              <hr className="color-white" />
              <li>
                <Link
                  to="/options/product/create"
                  className="color-white hover-ligthorange"
                >
                  Добавить продукт
                </Link>
              </li>
              <li>
                <Link to="/options/product/change" className="color-orange">
                  Изменить продукт
                </Link>
              </li>
              <li>
                <Link
                  to="/options/product/delete"
                  className="color-white hover-ligthorange"
                >
                  Удалить продукт
                </Link>
              </li>
              <li>
                <Link
                  to="/options/section/create"
                  className="color-white hover-ligthorange"
                >
                  Добавить секцию
                </Link>
              </li>
              <li>
                <Link
                  to="/options/section/change"
                  className="color-white hover-ligthorange"
                >
                  Изменить секцию
                </Link>
              </li>
              <li>
                <Link
                  to="/options/section/delete"
                  className="color-white hover-ligthorange"
                >
                  Удалить секцию
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
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
                  <Field
                    as={TextField}
                    name="id"
                    placeholder="id"
                    fullWidth
                    disabled={isUpdateProduct}
                    error={touched.id && !!errors.id}
                    helperText={<ErrorMessage name="id" />}
                  />
                  <Field
                    as={TextField}
                    name="length"
                    placeholder="length"
                    fullWidth
                    disabled={isUpdateProduct}
                    error={touched.length && !!errors.length}
                    helperText={<ErrorMessage name="length" />}
                  />
                  <Field
                    as={TextField}
                    name="height"
                    placeholder="height"
                    fullWidth
                    disabled={isUpdateProduct}
                    error={touched.height && !!errors.height}
                    helperText={<ErrorMessage name="height" />}
                  />
                  <Field
                    as={TextField}
                    name="width"
                    placeholder="width"
                    fullWidth
                    disabled={isUpdateProduct}
                    error={touched.width && !!errors.width}
                    helperText={<ErrorMessage name="width" />}
                  />
                  <Field
                    as={TextField}
                    name="price"
                    placeholder="price"
                    fullWidth
                    disabled={isUpdateProduct}
                    error={touched.price && !!errors.price}
                    helperText={<ErrorMessage name="price" />}
                  />
                  <Field
                    as={TextField}
                    name="discount"
                    placeholder="discount"
                    fullWidth
                    disabled={isUpdateProduct}
                    error={touched.discount && !!errors.discount}
                    helperText={<ErrorMessage name="discount" />}
                  />
                  <Field
                    as={TextField}
                    name="idPicture"
                    placeholder="idPicture"
                    fullWidth
                    disabled={isUpdateProduct}
                    error={touched.idPicture && !!errors.idPicture}
                    helperText={<ErrorMessage name="idPicture" />}
                  />
                  <Field
                    as={TextField}
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
        </div>
      </div>
    </div>
  );
}
