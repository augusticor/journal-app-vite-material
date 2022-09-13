import { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';

import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  const { activeNote } = useSelector((state) => state.journal);

  // Se toma la nota activa como el estado inicial del formulario useForm
  const { title, body, date, onInputChange, formState } = useForm(activeNote);

  // We use useMemo hook because body and title changes frequently and will refresh date as well
  const dateString = useMemo(() => {
    const reFormattedDate = new Date(date);
    return reFormattedDate.toUTCString();
  }, [date]);

  // Use effect to update de redux activeNote when the title or body changes
  // TODO

  return (
    <Grid container justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animate__animated animate__zoomIn'>
      <Grid item>
        <Typography fontSize={25} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button size='large' variant='contained' endIcon={<SaveOutlined />}>
          Save
        </Button>
      </Grid>

      <Grid container sx={{ mb: 3 }}>
        <TextField
          type='text'
          variant='standard'
          label='Note title'
          placeholder='My personal note'
          fullWidth
          sx={{ mt: 6 }}
          name='title'
          value={title}
          onChange={onInputChange}
        ></TextField>

        <TextField
          type='text'
          multiline
          placeholder='Content of the note'
          fullWidth
          sx={{ mt: 4 }}
          minRows={7}
          name='body'
          value={body}
          onChange={onInputChange}
        ></TextField>
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
