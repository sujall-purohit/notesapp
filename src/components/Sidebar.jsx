import React from "react";

function Sidebar({ selectedDay, setSelectedDay }) {
    const days = [
        "All Notes",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    return (
        <div className="
    w-full
    md:w-64
    bg-white
    rounded-2xl
    p-5
    shadow-md
">
            <h1 className="text-2xl md:text-4xl font-bold">
                NoteFlow
            </h1>

            <div className="
            mt-5
    flex
    flex-row
    flex-wrap
    gap-2
    md:flex-col
">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`text-left px-4 py-3 rounded-xl transition
                            ${selectedDay === day
                                ? "bg-slate-800 text-white"
                                : "hover:bg-slate-100"
                            }`}
                    >
                        {day === "All Notes" ? "📋 " : "📅 "}
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;