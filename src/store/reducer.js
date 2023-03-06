import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./notes";

export default combineReducers({
  notes: notesReducer,
});
