import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false, // boolean flag for knowing if the user is saving or not (block buttons or other)
  messageSaved: '',
  notes: [],
  activeNote: null,
  // Active note example:
  //   activeNote: {
  //     id: 'AD589ND1278F',
  //     title: 'note title',
  //     body: ' note body lorem',
  //     date: 123456,
  //     imagesUrls: ['https://photo1', 'https://photo2', 'https://photo3'],
  //   },
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {
      // remember that action is an object that contains {type (string journal/addNewEmptyNote), payload}
      state.notes.push(action.payload);
      state.isSaving = false;
    },

    setActiveNote: (state, { payload }) => {
      state.activeNote = { ...payload };
    },

    setNotes: (state, { payload }) => {
      state.notes = payload.notes;
    },

    updateNote: (state, action) => {},

    deleteNoteByID: (state, { payload }) => {
      // Delete note from array
    },

    savingNewNote: (state) => {
      state.isSaving = true;
    },

    setSaving: (state, { payload }) => {
      state.isSaving = true;
    },
  },
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteByID, savingNewNote } = journalSlice.actions;
