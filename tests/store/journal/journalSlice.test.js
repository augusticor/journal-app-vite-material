import { addNewEmptyNote, journalSlice, setActiveNote, setNotes, updateNote } from '../../../src/store/journal/journalSlice';
import { activeNote, emptyNote, initialState, testNotes, updatedNoteState } from '../../fixtures/journalFixtures';

describe('Tests on journal slice', () => {
  beforeEach(() => jest.clearAllMocks());

  test('Slice name should be "journal" and return initialState', () => {
    expect(journalSlice.name).toBe('journal');
    expect(journalSlice.getInitialState()).toEqual(initialState);
  });

  test('Should add a new empty note to the notes list and set saving to false', () => {
    const state = journalSlice.reducer(initialState, addNewEmptyNote(emptyNote));

    expect(state.notes.length).toBeGreaterThanOrEqual(1);
    expect(state.notes).toContainEqual(emptyNote);
    expect(state.isSaving).toBe(false);
  });

  test('Should set active note', () => {
    const state = journalSlice.reducer(initialState, setActiveNote(activeNote));

    expect(state.activeNote).not.toEqual({});
    expect(state.activeNote).toEqual(activeNote);
    expect(state.finishedMessage).toBe('');
  });

  test('Should set notes', () => {
    const state = journalSlice.reducer(initialState, setNotes({ notes: testNotes }));

    expect(state.notes).toHaveLength(testNotes.length);
    expect(state.notes).toEqual(testNotes);
  });

  test('Should update note', () => {
    const state = journalSlice.reducer(initialState, updateNote(activeNote));

    // TODO CREATE FULL STAtE
    console.log(state);
    // expect(state).toEqual(updatedNoteState);
  });
});
