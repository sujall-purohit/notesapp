import React, { useState } from "react";
import { useNotes } from "../contexts";

function NotesForm({ selectedDay }) {
    const [title, setTitle] = useState("");

    const { addNote } = useNotes();

    const add = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        addNote({
            title,
            day:
                selectedDay === "All Notes"
                    ? "Monday"
                    : selectedDay,
            createdAt: Date.now(),
        });

        setTitle("");
    };

    return (
        <form
            onSubmit={add}
            className="flex gap-3 bg-white p-3 rounded-xl shadow-md"
        >
            <input
                type="text"
                placeholder={`Add note for ${selectedDay}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="
                    flex-1
                    px-4
                    py-2
                    outline-none
                    rounded-lg
                    border
                    border-gray-200
                "
            />

            <button
                type="submit"
                className="
                    px-5
                    py-2
                    bg-slate-800
                    hover:bg-slate-700
                    text-white
                    rounded-lg
                "
            >
                Add
            </button>
        </form>
    );
}

export default NotesForm;