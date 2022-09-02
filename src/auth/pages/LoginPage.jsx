import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layout/AuthLayout';

import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({ email: '', password: '' });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password });

    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log('On google sign IN');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container spacing={1} justifyContent='space-evenly'>
          <Grid item xs={12} md={5} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='email@gmail.com'
              fullWidth
              variant='outlined'
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2 }}>
            <TextField label='Password' type='password' fullWidth variant='standard' name='password' value={password} onChange={onInputChange} />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant='outlined' fullWidth disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth startIcon={<Google />} onClick={onGoogleSignIn} disabled={isAuthenticating}>
                <Typography>Sign in with Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={1} direction='row' justifyContent='center' sx={{ mt: 2 }}>
            <Link component={RouterLink} color='inherit' to='/auth/register' underline='hover'>
              Don't have an account yet ? Create one
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
