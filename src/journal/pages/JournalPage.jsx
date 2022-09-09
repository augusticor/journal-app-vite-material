import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

const JournalPage = () => {
  return (
    <JournalLayout>
      <NoteView />

      {/* <NothingSelectedView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          position: 'fixed',
          right: 40,
          bottom: 35,
          ':hover': { backgroundColor: 'error.main', opacity: 0.85 },
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;
