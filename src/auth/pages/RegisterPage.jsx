import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';
import AuthLayout from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container direction='column'>
          <Grid item sx={{ mt: 2 }}>
            <TextField label='Full Name' type='text' placeholder='Your name' fullWidth />
          </Grid>

          <Grid item sx={{ mt: 2 }}>
            <TextField label='Email' type='email' placeholder='email@gmail.com' fullWidth />
          </Grid>

          <Grid container columns={{ xs: 1, md: 4 }} spacing={1}>
            <Grid item sx={{ mt: 2 }} xs={1} md={2}>
              <TextField label='Password' type='password' fullWidth />
            </Grid>

            <Grid item sx={{ mt: 2 }} xs={1} md={2}>
              <TextField label='Confirm password' type='password' fullWidth />
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 2, mt: 5 }} direction='column'>
            <Grid item>
              <Button variant='outlined' fullWidth>
                Create Account
              </Button>
            </Grid>

            <Grid item sx={{ mt: 5 }} alignSelf='center'>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Already have an account ? Sign In
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
