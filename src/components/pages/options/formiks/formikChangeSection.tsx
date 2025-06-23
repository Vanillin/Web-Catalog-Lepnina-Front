import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";

import {
  UpdateSectionRequest,
  useSectionsUpdateMutation,
} from "../../../../api/slices/sectionApiSlice";
import { useUserInfoQuery } from "../../../../api/slices/userApiSlice";

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
    let trigger = await updateSection(values);
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
                <Link
                  to="/options/product/change"
                  className="color-white hover-ligthorange"
                >
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
                <Link to="/options/section/change" className="color-orange">
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
        </div>
      </div>
    </div>
  );
}
