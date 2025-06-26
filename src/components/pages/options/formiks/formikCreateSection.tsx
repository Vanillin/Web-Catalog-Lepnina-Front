import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";

import {
  CreateSectionRequest,
  useSectionsCreateMutation,
} from "../../../../api/slices/sectionApiSlice";
import { useUserInfoQuery } from "../../../../api/slices/userApiSlice";

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
    let trigger = await createSection(values);
    if (trigger?.data !== undefined) navigate("/options");
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
                <Link to="/options/section/create" className="color-orange">
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
            <h1>Добавить секцию</h1>
            <Formik
              initialValues={initialValuesCreateSection}
              validationSchema={loginSchemaCreateSection}
              onSubmit={handleSectionCreate}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    as={TextField}
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
        </div>
      </div>
    </div>
  );
}
