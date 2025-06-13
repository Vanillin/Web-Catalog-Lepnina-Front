import { CircularProgress, Grid, Typography } from "@mui/material";
import { useLogoutMutation } from "../../../api/slices/authApiSlice";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function LogoutPage() {
  const [logout, { isLoading }] = useLogoutMutation();

  useEffect(() => {
    logout({});
  });

  if (isLoading) {
    return (
      <Grid>
        <CircularProgress />
        <Typography>Logging out ...</Typography>
      </Grid>
    );
  }

  return <Navigate to="/catalog" replace />;
}
