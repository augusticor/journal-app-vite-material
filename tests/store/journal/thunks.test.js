import { deleteAllNotesFromAnUser } from '../../../src/firebase/provides';
import { addNewEmptyNote, savingNewNote, setActiveNote } from '../../../src/store/journal/journalSlice';
import { startCreatingNote } from '../../../src/store/journal/thunks';
import { emptyNote } from '../../fixtures/journalFixtures';

describe('Tests on Journal thunks', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Should start creating new note', async () => {
    const testUID = 'ABCD1edheu2U';

    getState.mockReturnValue({ auth: { uid: testUID } });
    // getState.mockResolvedValue Just for resolve promise functions

    await startCreatingNote()(dispatch, getState);

    const mockedNote = { ...emptyNote, id: expect.any(String), date: expect.any(Number) };

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(mockedNote));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote(mockedNote));
    expect(dispatch).toHaveBeenCalledTimes(3);

    // Delete all notes after test
    await deleteAllNotesFromAnUser(`${testUID}/journal/notes`);
  });
});
