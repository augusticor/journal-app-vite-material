import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={25} fontWeight='light'>
          August 28, 2023
        </Typography>
      </Grid>

      <Grid item>
        <Button size='large' variant='contained' endIcon={<SaveOutlined />}>
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField type='text' variant='standard' label='Note title' placeholder='My personal note' fullWidth sx={{ mt: 6 }}></TextField>

        <TextField type='text' multiline placeholder='Content of the note' fullWidth sx={{ mt: 4 }} minRows={7}></TextField>
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
