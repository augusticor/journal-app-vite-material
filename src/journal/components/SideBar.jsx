import { TurnedInNotOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant='h6' component='div' noWrap>
            {displayName}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril'].map((fecha) => (
            <ListItem key={fecha} disablePadding className='animate__animated animate__lightSpeedInLeft'>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNotOutlined />
                </ListItemIcon>
                <Grid container direction='column'>
                  <ListItemText primary={fecha} />
                  <ListItemText secondary={'Lorem ipsum bbadad vbla'} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
