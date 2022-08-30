import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar position='fixed' sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
      <Toolbar>
        <IconButton color='inherit' aria-label='toggle menu' sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid container justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' component='h2' noWrap>
            Journal App
          </Typography>

          <IconButton color='error' aria-label='logout'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
