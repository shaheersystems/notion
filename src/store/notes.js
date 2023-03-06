import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "notes",
  initialState: [{ id: 3030, description: "This is a note" }],
  reducers: {
    noteAdded: (notes, action) => {
      notes.push({
        id: ++lastId,
        description: action.payload.description,
        starred: false,
        pinned: false,
        date: new Date().toLocaleDateString(),
      });
    },
    noteRemoved: (notes, action) => {
      return notes.filter((note) => note.id !== action.payload.id);
    },
    noteEdited: (notes, action) => {
      const index = notes.findIndex((note) => note.id === action.payload.id);
      notes[index] = action.payload;
    },
    setAsStarred: (notes, action) => {
      const index = notes.findIndex((note) => note.id === action.payload.id);
      notes[index].starred = !notes[index].starred;
    },
    setAsPinned: (notes, action) => {
      const index = notes.findIndex((note) => note.id === action.payload.id);
      notes[index].pinned = !notes[index].pinned;
    },
  },
});

export const { noteAdded, noteRemoved, noteEdited } = slice.actions;
export default slice.reducer;
