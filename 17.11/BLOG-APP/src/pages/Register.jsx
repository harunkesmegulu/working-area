import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import * as yup from "yup";
import { signUpWithGoogle } from "../helper/firebase";
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please  enter an email"),
  password: yup
    .string()
    .required("Please enter a password ")
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});
const Register = () => {
  const navigate = useNavigate();
  // const { currentUser, error, loading } = useSelector((state) => state?.auth);



const handleGoogle=()=>{
  signUpWithGoogle(navigate)
}

  
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        // direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        {/* <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid> */}
        <Grid
          justifyContent="center"
          alignItems="-moz-initial"
           item xs={12} sm={10} md={6}
           >
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Register
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              //!login(values)
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              values,
              isSubmitting,
              handleChange,
              handleBlur,
              touched,
              errors,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    label="UserName"
                    name="username"
                    id="username"
                    type="text"
                    variant="outlined"
                    // value={values.username}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  
                  <LoadingButton
                    type="submit"
                    // loading={loading}
                    loadingPosition="center"
                    variant="contained"
                  >
                    Register
                  </LoadingButton>
                  <LoadingButton
                  sx={{backgroundColor:"pink"}}
                    loadingPosition="center"
                    variant="contained"
                    onClick={handleGoogle}
                  >
                    Sign Up With Google
                  </LoadingButton>
                </Box>
              </Form>
            )}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/login">Hesabın Varmi?</Link>
          </Box>
        </Grid>
        {/* <Grid item xs={10} sm={7} md={6}>
        </Grid> */}
      </Grid>
    </Container>
  );
};
export default Register;