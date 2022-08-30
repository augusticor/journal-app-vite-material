import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layout/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container spacing={1} justifyContent='space-evenly'>
          <Grid item xs={12} md={5} sx={{ mt: 2 }}>
            <TextField label='Email' type='email' placeholder='email@gmail.com' fullWidth variant='outlined' />
          </Grid>

          <Grid item sx={{ mt: 2 }}>
            <TextField label='Password' type='password' fullWidth variant='standard' />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <Button variant='outlined' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth startIcon={<Google />}>
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
