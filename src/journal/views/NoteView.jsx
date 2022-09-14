import { useEffect, useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote, startSavingNote } from '../../store/journal';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { activeNote, finishedMessage, isSaving } = useSelector((state) => state.journal);

  // Se toma la nota activa como el estado inicial del formulario useForm
  const { title, body, date, onInputChange, formState } = useForm(activeNote);

  // We use useMemo hook because body and title changes frequently and will refresh date as well
  const dateString = useMemo(() => {
    const reFormattedDate = new Date(date);
    return reFormattedDate.toUTCString();
  }, [date]);

  // Use effect to watch for new message (error or success)
  useEffect(() => {
    if (finishedMessage.length > 0) {
      Swal.fire({
        text: finishedMessage,
        icon: 'success',
        timer: 2000,
      });
    }
  }, [finishedMessage]);

  const onClickSaveNote = () => {
    // Update de redux activeNote when the user clicks on save note
    dispatch(setActiveNote(formState));
    // Save new content of note on firebase
    dispatch(startSavingNote());
  };

  return (
    <Grid container justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animate__animated animate__zoomIn'>
      <Grid item>
        <Typography fontSize={25} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button size='large' variant='contained' endIcon={<SaveOutlined />} onClick={onClickSaveNote} disabled={isSaving}>
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
