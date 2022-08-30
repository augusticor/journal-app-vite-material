import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

const JournalPage = () => {
  return (
    <JournalLayout>
      <NoteView />

      {/* <NothingSelectedView /> */}

      {/* Note screen */}
    </JournalLayout>
  );
};

export default JournalPage;
