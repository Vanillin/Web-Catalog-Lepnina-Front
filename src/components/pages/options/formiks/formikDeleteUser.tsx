import { Button, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { User } from "../../../../api/models/user";
import {
  DeleteUserRequest,
  useUserDeleteMutation,
} from "../../../../api/slices/userApiSlice";

export default function FormikDeleteUser(input: {
  user: User | undefined | null;
}) {
  const navigate = useNavigate();
  const [delet, { isLoading: isDelete }] = useUserDeleteMutation();

  const initialValuesDelete: DeleteUserRequest = {
    id: input.user?.id,
  };

  const handleSubmitDelete = async (values: DeleteUserRequest) => {
    await delet(values);
    navigate("/catalog");
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
      <h1>Вы уверены?</h1>
      <Formik initialValues={initialValuesDelete} onSubmit={handleSubmitDelete}>
        <Form>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={isDelete}
          >
            {isDelete ? "Удаление..." : "Удалить"}
          </Button>
        </Form>
      </Formik>
    </Grid>
  );
}
