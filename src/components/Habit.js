import React from "react";

export default function Habit({ habit, onToggle, onDelete }) {
  return (
    <li className={habit.completed ? "completed" : ""}>
      <span>{habit.name}</span>
      
      <button onClick={() => onToggle(habit.id)}>
        {habit.completed ? "Mark as Not Completed" : "Mark as Completed"}
      </button>
      
      {habit.completed && (
        <button onClick={() => onDelete(habit.id)}>Delete</button>
      )}
    </li>
  );
}
