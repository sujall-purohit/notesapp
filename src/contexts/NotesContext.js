import { createContext, useContext } from "react";

export const NotesContext = createContext({
  notes: [
    {
      id: 123,
      title: "Learn React",
      day: "Monday",
      createdAt: Date.now(),
    },
  ],

  addNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
});

export const NotesProvider = NotesContext.Provider;

export const useNotes = () => {
  return useContext(NotesContext);
};