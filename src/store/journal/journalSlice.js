import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false, // boolean flag for knowing if the user is saving or not (block buttons or other)
  finishedMessage: '', // message of error or success to show using sweetalert2
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
      state.finishedMessage = '';
    },

    setNotes: (state, { payload }) => {
      state.notes = payload.notes;
    },

    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => (note.id === action.payload.id ? action.payload : note));

      // Same as :
      // state.notes = state.notes.map((note) => {
      //   if (note.id === action.payload.id) {
      //     return action.payload;
      //   }
      //   return note;
      // });

      state.finishedMessage = 'Note sucesfully saved';
    },

    deleteNoteByID: (state, { payload }) => {
      // Delete note from array
    },

    // This action is called when app is creating a new note on firebase
    savingNewNote: (state) => {
      state.isSaving = true;
    },

    // This action is called when a note is being updating on firebase
    setSaving: (state) => {
      state.isSaving = true;
      state.finishedMessage = '';
    },
  },
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteByID, savingNewNote } = journalSlice.actions;
