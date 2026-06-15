import { useEffect, useState } from "react";
import { NotesProvider } from "./contexts";
import NotesForm from "./components/NotesForm";
import NotesItem from "./components/NotesItem";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedDay, setSelectedDay] = useState("All Notes");

  const addNote = (note) => {
    setNotes((prev) => [{ id: Date.now(), ...note }, ...prev]);
  };

  const updateNote = (id, updatedNote) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? updatedNote : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
  };

  useEffect(() => {
    const storedNotes = JSON.parse(
      localStorage.getItem("notes")
    );

    if (storedNotes && storedNotes.length > 0) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const filteredNotes =
    selectedDay === "All Notes"
      ? notes
      : notes.filter(
        (note) => note.day === selectedDay
      );

  return (
    <NotesProvider
      value={{
        notes,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      <div className="min-h-screen bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            <Sidebar
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-6 text-slate-800">
                {selectedDay}
              </h1>

              <div className="mb-6">
                <NotesForm
                  selectedDay={selectedDay}
                />
              </div>

              <div className="flex flex-col gap-4">
                {filteredNotes.map((note) => (
                  <NotesItem
                    key={note.id}
                    note={note}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;