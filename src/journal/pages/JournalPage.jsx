import { useDispatch, useSelector } from 'react-redux';
import { startCreatingNote } from '../../store/journal/thunks';

import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

const JournalPage = () => {
  const dispatch = useDispatch();
  const {
    journal: { isSaving, activeNote },
  } = useSelector((state) => state);

  const onClickNewNote = () => dispatch(startCreatingNote());

  return (
    <JournalLayout>
      {/* Is there an active note ? yes-noteview, not yet-nothing selected */}
      {activeNote ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          position: 'fixed',
          right: 40,
          bottom: 35,
          ':hover': { backgroundColor: 'error.main', opacity: 0.85 },
        }}
        disabled={isSaving}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;
