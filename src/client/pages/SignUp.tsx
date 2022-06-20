import React from 'react';
import { useDispatch, useSelector } from '../redux';
import * as actions from '../redux/actions';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/Layout/Auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {};

function Login({}: Props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  React.useEffect(() => {
    dispatch(actions.auth.reset());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      dispatch(actions.auth.signup(values));
    },
  });

  return (
    <AuthLayout
      footer={
        <span>
          Already have an account? <Link to="/auth/signin">Sign in</Link>
        </span>
      }
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="standard"
          margin="dense"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          type="text"
          variant="standard"
          margin="dense"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="standard"
          margin="dense"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="standard"
          margin="dense"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        <Button
          disabled={isLoading}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{ marginTop: 12 }}
        >
          JOIN
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Login;
