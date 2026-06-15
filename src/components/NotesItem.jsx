import React, { useState } from "react";
import { useNotes } from "../contexts";

function NotesItem({ note }) {
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(note.title);

  const { updateNote, deleteNote } = useNotes();

  const editNote = () => {
    updateNote(note.id, {
      ...note,
      title,
    });

    setIsEditable(false);
  };

  const date = new Date(note.createdAt);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          readOnly={!isEditable}
          className={`
            w-full
            bg-transparent
            text-lg
            font-medium
            outline-none
            rounded-lg
            px-2
            py-1
            ${
              isEditable
                ? "border border-gray-300"
                : "border border-transparent"
            }
          `}
        />
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">
            {note.day}
          </p>

          <p className="text-xs text-gray-400">
            {date.toLocaleDateString()} •{" "}
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="
              h-9 w-9
              rounded-lg
              bg-gray-100
              hover:bg-gray-200
            "
            onClick={() => {
              if (isEditable) {
                editNote();
              } else {
                setIsEditable(true);
              }
            }}
          >
            {isEditable ? "💾" : "✏️"}
          </button>

          <button
            className="
              h-9 w-9
              rounded-lg
              bg-red-100
              hover:bg-red-200
            "
            onClick={() => deleteNote(note.id)}
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesItem;