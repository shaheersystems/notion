import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    noteAdded: (notes, action) => {
      notes.push({
        id: ++lastId,
        title: action.payload.title,
        description: action.payload.description,
        starred: false,
        pinned: false,
        date: new Date().toLocaleDateString(),
        color: "#ffffff",
      });
    },
    noteRemoved: (notes, action) => {
      return notes.filter((note) => note.id !== action.payload.id);
    },
    noteEditTitle: (notes, action) => {
      const index = notes.findIndex((note) => note.id === action.payload.id);
      notes[index].title = action.payload.title;
    },
    noteEditDescription: (notes, action) => {
      const index = notes.findIndex((note) => note.id === action.payload.id);
      notes[index].description = action.payload.description;
    },
    toggleStarred: (notes, action) => {
      const index = notes.findIndex((note) => note.id === action.payload.id);
      notes[index].starred = !notes[index].starred;
    },
    togglePinned: (notes, action) => {
      const index = notes.findIndex((note) => note.id === action.payload.id);
      notes[index].pinned = !notes[index].pinned;
    },
    colorChanged: (notes, action) => {
      const index = notes.findIndex((note) => note.id === action.payload.id);
      notes[index].color = action.payload.color;
    },
  },
});

export const {
  noteAdded,
  noteRemoved,
  noteEditedTitle,
  noteEditDescription,
  togglePinned,
  toggleStarred,
  colorChanged,
} = slice.actions;
export default slice.reducer;
