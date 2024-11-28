import React from "react";

function Habit({ habit, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggle(habit.id)}
        aria-label="Toggle habit completion"
      />
      <span
        style={{
          textDecoration: habit.completed ? "line-through" : "none",
        }}
      >
        {habit.name}
      </span>
      <button onClick={() => onDelete(habit.id)}>Delete</button>
    </li>
  );
}

export default Habit;
