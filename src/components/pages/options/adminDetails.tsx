import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { User } from "../../../api/models/user";
import {
  UpdateUserRequest,
  DeleteUserRequest,
  useUserUpdateMutation,
  useUserDeleteMutation,
} from "../../../api/slices/userApiSlice";
import {
  useProductsCreateMutation,
  useProductsUpdateMutation,
  useProductsDeleteMutation,
} from "../../../api/slices/productApiSlice";
import {
  useSectionsCreateMutation,
  useSectionsUpdateMutation,
  useSectionsDeleteMutation,
} from "../../../api/slices/sectionApiSlice";
import { Roles } from "../../../api/models/roles";

const loginSchema = yup.object({
  //email: yup.string().required("Email is required").email("Invalid email"),
  //password: yup.string().required("Password is required"),
});

export default async function ViewDetails(input: {
  user: User | undefined | null;
  idAdminUnderPage: number;
}) {
  const navigate = useNavigate();
  const [createProduct, { isLoading: isCreateProduct }] =
    useProductsCreateMutation();
  const [updateProduct, { isLoading: isUpdateProduct }] =
    useProductsUpdateMutation();
  const [deleteProduct, { isLoading: isDeleteProduct }] =
    useProductsDeleteMutation();
  const [createSection, { isLoading: isCreateSection }] =
    useSectionsCreateMutation();
  const [updateSection, { isLoading: isUpdateSection }] =
    useSectionsUpdateMutation();
  const [deleteSection, { isLoading: isDeleteSection }] =
    useSectionsDeleteMutation();

  //   const initialValuesUpdate: UpdateUserRequest = {
  //     id: 0,
  //     name: "",
  //     email: "",
  //     password: "",
  //   };
  //   const initialValuesDelete: DeleteUserRequest = {
  //     id: input.user?.id!,
  //   };
  //   const handleSubmitUpdate = async (values: UpdateUserRequest) => {
  //     await update(values);
  //     navigate("/options");
  //   };
  //   const handleSubmitDelete = async (values: DeleteUserRequest) => {
  //     await delet(values);
  //     navigate("/catalog");
  //   };

  if (
    input.user === undefined ||
    input.user === null ||
    input.user.role !== Roles.Admin
  )
    return null;
  else return null;

  //   if (input.idAdminUnderPage === 0) return null;
  //   else if (input.idAdminUnderPage === 1)
  //     return (
  //       <Grid
  //         container
  //         direction="column"
  //         spacing={5}
  //         margin={5}
  //         marginLeft={10}
  //         width={300}
  //       >
  //         <h1>Изменить данные</h1>
  //         <Formik
  //           initialValues={initialValuesUpdate}
  //           validationSchema={loginSchema}
  //           onSubmit={handleSubmitUpdate}
  //         >
  //           {({ errors, touched }) => (
  //             <Form>
  //               <TextField
  //                 name="name"
  //                 placeholder="Your Name"
  //                 type="text"
  //                 fullWidth
  //                 disabled={isUpdate}
  //               />

  //               <TextField
  //                 name="email"
  //                 placeholder="Email@mail.ru"
  //                 type="email"
  //                 fullWidth
  //                 error={touched.email && !!errors.email}
  //                 helperText={<ErrorMessage name="email" />}
  //                 disabled={isUpdate}
  //               />

  //               <TextField
  //                 name="password"
  //                 placeholder="Password"
  //                 type="password"
  //                 fullWidth
  //                 error={touched.password && !!errors.password}
  //                 helperText={<ErrorMessage name="password" />}
  //                 disabled={isUpdate}
  //               />

  //               <Button variant="contained" fullWidth disabled={isUpdate}>
  //                 {isUpdate ? "Изменение..." : "Изменить"}
  //               </Button>
  //             </Form>
  //           )}
  //         </Formik>
  //       </Grid>
  //     );
  //   else if (input.idAdminUnderPage === 2)
  //     return (
  //       <Grid
  //         container
  //         direction="column"
  //         spacing={5}
  //         margin={5}
  //         marginLeft={10}
  //         width={300}
  //       >
  //         <h1>Вы уверены?</h1>
  //         <Formik
  //           initialValues={initialValuesDelete}
  //           onSubmit={handleSubmitDelete}
  //         >
  //           <Form>
  //             <Button variant="contained" fullWidth disabled={isDelete}>
  //               {isDelete ? "Удаление..." : "Удалить"}
  //             </Button>
  //           </Form>
  //         </Formik>
  //       </Grid>
  //     );
  //   else return null;
}
